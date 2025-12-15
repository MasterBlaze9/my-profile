"use client";

import { steamServices } from "@/services/steamServices";
import { useEffect, useState } from "react";
import Image from "next/image";

type SteamUserInfo = {
  profile: {
    personaName?: string;
    profileUrl?: string;
    avatar?: string;
    steamId?: string;
  };
  recentGames: Array<{
    appId: number;
    name: string;
    playtime2Weeks: number;
    playtimeForever: number;
    icon: string;
    logo: string;
  }>;
  ownedGames: Array<{
    appId: number;
    name: string;
    playtimeForever: number;
    icon: string;
  }>;
};

export default function GamesPage() {
  const [data, setData] = useState<SteamUserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await steamServices.getInfo();
        setData(result as SteamUserInfo | null);
      } catch {
        setError("Failed to load Steam data");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-black">Games</h1>

      {loading && <div className="text-gray-500">Loading your Steam info…</div>}

      {error && (
        <div className="rounded-md bg-red-50 p-4 text-red-600">{error}</div>
      )}

      {!loading && data && (
        <>
          {/* Profile */}
          <section className="rounded-lg border border-gray-200 bg-white/5 p-4">
            <div className="flex items-center gap-4">
              {data.profile.avatar && (
                <Image
                  src={data.profile.avatar}
                  alt={data.profile.personaName || "Steam avatar"}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full object-cover"
                />
              )}
              <div>
                <div className="text-xl font-semibold text-black">
                  {data.profile.personaName}
                </div>
                {data.profile.profileUrl && (
                  <a
                    href={data.profile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View Steam profile
                  </a>
                )}
                {data.profile.steamId && (
                  <div className="text-xs text-gray-500">
                    ID: {data.profile.steamId}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Recent games */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-black">Recently played</h2>
            {data.recentGames && data.recentGames.length > 0 ? (
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {data.recentGames.map((g) => (
                  <li
                    key={g.appId}
                    className="rounded-lg border border-gray-200 bg-white/5 p-3 text-black"
                  >
                    <div className="flex items-center gap-3">
                      {/* Steam app icon: https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/{appId}/{icon}.jpg */}
                      <Image
                        src={`https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/${g.appId}/${g.icon}.jpg`}
                        alt={g.name}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded object-cover"
                      />
                      <div className="text-black">
                        <div className="font-medium text-black">{g.name}</div>
                        <div className="text-xs text-gray-500">
                          Played last 2 weeks:{" "}
                          {Math.round(g.playtime2Weeks || 0)} min
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-gray-500">No recent games found.</div>
            )}
          </section>

         
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-black">Collection</h2>
            {data.ownedGames && data.ownedGames.length > 0 ? (
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {data.ownedGames.map((g) => (
                  <li
                    key={g.appId}
                    className="rounded-lg border border-gray-200 bg-white/5 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={`https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/${g.appId}/${g.icon}.jpg`}
                        alt={g.name}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded object-cover"
                      />
                      <div>
                        <div className="font-medium text-black">{g.name}</div>
                        <div className="text-xs text-gray-500">
                          Total playtime: {Math.round(g.playtimeForever || 0)}{" "}
                          min
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-gray-500">No owned games found.</div>
            )}
          </section>
        </>
      )}
    </div>
  );
}
