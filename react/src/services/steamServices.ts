
const DEFAULT_TIMEOUT_MS = 10_000;
const API_KEY = import.meta.env.VITE_PUBLIC_STEAM_API_KEY;
const STEAM_ID = import.meta.env.VITE_PUBLIC_STEAM_ACCOUNT_ID;
const BASE_URL = '/api'; 

export type SteamUserProfile = {
  personaName?: string;
  profileUrl?: string;
  avatar?: string;
  steamId?: string;
};

export type SteamGame = {
  appId: number;
  name: string;
  playtimeForever: number;
  playtime2Weeks?: number;
  imgIconUrl: string;
};

export type SteamUserInfo = {
  profile: SteamUserProfile;
  recentGames: SteamGame[];
  ownedGames: SteamGame[];
};

async function fetchWithTimeout(url: string, options: RequestInit = {}) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT_MS);
  
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

export const steamServices = {
  async getInfo(): Promise<SteamUserInfo | null> {
    try {
      const [summaryData, recentData, ownedData] = await Promise.all([
        fetchWithTimeout(`${BASE_URL}/ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=${STEAM_ID}`),
        fetchWithTimeout(`${BASE_URL}/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${API_KEY}&steamid=${STEAM_ID}`),
        fetchWithTimeout(`${BASE_URL}/IPlayerService/GetOwnedGames/v0001/?key=${API_KEY}&steamid=${STEAM_ID}&include_appinfo=1`)
      ]);

      const player = summaryData.response.players[0];
      if (!player) return null;

      return {
        profile: {
          personaName: player.personaname,
          profileUrl: player.profileurl,
          avatar: player.avatarfull,
          steamId: player.steamid,
        },
        recentGames: (recentData.response.games || []).map((g: any) => ({
          appId: g.appid,
          name: g.name,
          playtime2Weeks: g.playtime_2weeks || 0,
          playtimeForever: g.playtime_forever,
          imgIconUrl: g.img_icon_url,
        })),
        ownedGames: (ownedData.response.games || []).map((g: any) => ({
          appId: g.appid,
          name: g.name,
          playtimeForever: g.playtime_forever,
          imgIconUrl: g.img_icon_url,
        })),
      };
    } catch (error) {
      console.error('Steam Service Error:', error);
      return null;
    }
  },
};