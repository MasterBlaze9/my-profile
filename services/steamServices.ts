const DEFAULT_TIMEOUT_MS = 10_000;

export type SteamUserProfile = {
  personaName?: string;
  profileUrl?: string;
  avatar?: string;
  steamId?: string;
};

export type SteamRecentGame = {
  appId: number;
  name: string;
  playtime2Weeks: number;
  playtimeForever: number;
  icon: string;
  logo: string;
};

export type SteamUserInfo = {
  profile: SteamUserProfile;
  recentGames: SteamRecentGame[];
};

export const steamServices = {
  async getInfo(): Promise<SteamUserInfo | null> {
    const url = `/api/steam/user`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT_MS);

    try {
      const response = await fetch(url, {
        cache: "no-store",
        signal: controller.signal,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        console.error("Steam API error:", await response.text());
        return null;
      }

      const data = await response.json();

      return data as SteamUserInfo;
    } catch (error) {
      if (error) {
        console.error("Steam API request timed out");
      } else {
        console.error("Steam service error:", error);
      }
      return null;
    } finally {
      clearTimeout(timeout);
    }
  },
};
