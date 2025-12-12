import { NextResponse } from "next/server";

export type SteamUserProfile = {
  personaName: string;
  profileUrl: string;
  avatar: string;
  steamId: string;
};

export type SteamRecentGame = {
  appId: number;
  name: string;
  playtime2Weeks: number;
  playtimeForever: number;
  icon: string;
  logo: string;
};

export type SteamOwnedGame = {
  appId: number;
  name?: string;
  playtimeForever: number;
  icon?: string;
  logo?: string;
};

export type SteamApiResponse = {
  profile: SteamUserProfile;
  recentGames: SteamRecentGame[];
  ownedGames: SteamOwnedGame[];
};

export type SteamProfile = {
  personaName: string;
  profileUrl: string;
  avatar: string;
  steamId: string;
};

export type SteamGame = {
  appId: number;
  name: string;
  playtime2Weeks?: number; // Only exists for recent games
  playtimeForever: number;
  icon: string;
  logo: string;
};

export type SteamResponse = {
  profile: SteamProfile;
  recentGames: SteamGame[];
  ownedGames: SteamGame[];
};

export type SteamGameRaw = {
  appid: number;
  name: string;
  playtime_2weeks?: number;
  playtime_forever: number;
  img_icon_url: string;
  img_logo_url: string;
};


export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_STEAM_API_KEY;
  const steamId = process.env.NEXT_PUBLIC_STEAM_ACCOUNT_ID;

  if (!apiKey) {
    return NextResponse.json(
      { error: "STEAM_API_KEY is not configured" },
      { status: 500 }
    );
  }

  if (!steamId) {
    return NextResponse.json(
      { error: "Steam ID is required" },
      { status: 400 }
    );
  }

  // API URLs
  const profileUrl = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${steamId}`;

  const recentGamesUrl = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${apiKey}&steamid=${steamId}&format=json`;

  // include_appinfo=1 to get game names + icons
  const ownedGamesUrl = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${steamId}&format=json&include_appinfo=1`;

  try {
    // Fetch parallel for speed
    const [profileRes, recentRes, ownedRes] = await Promise.all([
      fetch(profileUrl),
      fetch(recentGamesUrl),
      fetch(ownedGamesUrl),
    ]);

    // Handle errors
    if (!profileRes.ok) {
      return NextResponse.json(
        {
          error: `Steam Profile error: ${profileRes.status}`,
          details: await profileRes.text(),
        },
        { status: profileRes.status }
      );
    }

    if (!recentRes.ok) {
      return NextResponse.json(
        {
          error: `Steam Recent Games error: ${recentRes.status}`,
          details: await recentRes.text(),
        },
        { status: recentRes.status }
      );
    }

    if (!ownedRes.ok) {
      return NextResponse.json(
        {
          error: `Steam Owned Games error: ${ownedRes.status}`,
          details: await ownedRes.text(),
        },
        { status: ownedRes.status }
      );
    }

    const profileJson = await profileRes.json();
    const recentJson = await recentRes.json();
    const ownedJson = await ownedRes.json();

    const player = profileJson?.response?.players?.[0];
    const recentGames = recentJson?.response?.games ?? [];
    const ownedGames = ownedJson?.response?.games ?? [];

    if (!player) {
      return NextResponse.json({ error: "Player not found" }, { status: 404 });
    }

    return NextResponse.json({
      profile: {
        personaName: player.personaname,
        profileUrl: player.profileurl,
        avatar: player.avatarfull,
        steamId: player.steamid,
      },

      recentGames: recentGames.map((g: SteamGameRaw) => ({
        appId: g.appid,
        name: g.name,
        playtime2Weeks: g.playtime_2weeks,
        playtimeForever: g.playtime_forever,
        icon: g.img_icon_url,
        logo: g.img_logo_url,
      })),

      ownedGames: ownedGames.map((g: SteamGameRaw) => ({
        appId: g.appid,
        name: g.name,
        playtimeForever: g.playtime_forever,
        icon: g.img_icon_url,
        logo: g.img_logo_url,
      })),
    } satisfies SteamApiResponse);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch Steam data",
        details: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
