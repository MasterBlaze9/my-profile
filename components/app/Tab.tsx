import { useState } from "react";

const RatedMovies = () => <div>Lista de Filmes Avaliados (Pesado)</div>;
const FavoriteMovies = () => <div>Meus Favoritos</div>;
const WatchList = () => <div>Para Assistir</div>;

export default function Tab() {
  const tabs = ["Rated Movies", "Favorite Movies", "Watch List"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(index)}
            style={{ fontWeight: activeTab === index ? "bold" : "normal" }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {activeTab === 0 && <RatedMovies />}
        {activeTab === 1 && <FavoriteMovies />}
        {activeTab === 2 && <WatchList />}
      </div>
    </div>
  );
}
