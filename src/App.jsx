import { useEffect, useMemo, useState } from "react";
import { ACHIEVEMENTS } from "./data/achievements.js";
import { loadProgress, saveProgress } from "./utils/storage.js";
import { getStats } from "./utils/stats.js";
import Tabs from "./components/Tabs.jsx";
import Subfilters from "./components/Subfilters.jsx";
import AchievementList from "./components/AchievementList.jsx";

const VERSION_OPTIONS = ["", "v1.0", "v1.1", "v1.2"];
const STATUS_OPTIONS = [
  { value: "", label: "Все" },
  { value: "completed", label: "Выполнено" },
  { value: "incomplete", label: "Не выполнено" },
];

export default function App() {
  const mainKeys = Object.keys(ACHIEVEMENTS);
  const [currentMain, setCurrentMain] = useState(mainKeys[0] || "history");

  const firstSub = Object.keys(ACHIEVEMENTS[currentMain].subfilters)[0];
  const [currentSub, setCurrentSub] = useState(firstSub);

  const [versionFilter, setVersionFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [progress, setProgress] = useState(null);

  // при смене main — сбрасываем sub на первый
  useEffect(() => {
    const sub = Object.keys(ACHIEVEMENTS[currentMain].subfilters)[0];
    setCurrentSub(sub);
  }, [currentMain]);

  // загрузка localStorage
  useEffect(() => {
    const p = loadProgress(ACHIEVEMENTS);
    setProgress(p);
  }, []);

  const globalStats = useMemo(() => {
    if (!progress) return { total: 0, completed: 0, maxPoly: 0, earnedPoly: 0, bronze: 0, silver: 0, gold: 0 };
    return getStats(ACHIEVEMENTS, progress);
  }, [progress]);

  const currentStats = useMemo(() => {
    if (!progress) return { total: 0, completed: 0, maxPoly: 0, earnedPoly: 0 };
    return getStats(ACHIEVEMENTS, progress, currentMain, currentSub);
  }, [progress, currentMain, currentSub]);

  const tabs = useMemo(
    () =>
      mainKeys.map((k) => ({
        key: k,
        label: ACHIEVEMENTS[k].name,
      })),
    [mainKeys]
  );

  function toggleAchievement(index) {
    if (!progress) return;
    const next = structuredClone(progress);
    const ach = next[currentMain][currentSub][index];

    if (ach.completed) {
      ach.completed = false;
      ach.date = "";
    } else {
      ach.completed = true;
      ach.date = new Date().toLocaleDateString("ru-RU");
    }

    setProgress(next);
    saveProgress(next);
  }

  return (
    <div className="container">
      <div className="header">
        <div className="title">Zenless Zone Zero — Достижения</div>

        <div className="search-controls">
          <div className="search-box">
            <input
              id="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск..."
            />
          </div>

          <div className="version-filter-box">
            <select
              id="version-filter"
              value={versionFilter}
              onChange={(e) => setVersionFilter(e.target.value)}
            >
              <option value="">Все версии</option>
              {VERSION_OPTIONS.slice(1).map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          <div className="status-filter-box">
            <select
              id="status-filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {STATUS_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="global-stats">
        <div className="stat-group">
          <div className="stat-label">Всего</div>
          <div className="stat-value">
            <span id="global-ach">{globalStats.completed}</span>/{globalStats.total}
          </div>
        </div>

        <div className="stat-group">
          <div className="stat-label">Полихром</div>
          <div className="stat-value poly-value">
            <span id="global-poly">{globalStats.earnedPoly}</span>/{globalStats.maxPoly}
          </div>
        </div>

        <div id="tier-summary" className="stat-group tier-summary">
          <div className="tier-box">
            <img src="icons/bronze.png" alt="B" /> {globalStats.bronze}
          </div>
          <div className="tier-box">
            <img src="icons/silver.png" alt="S" /> {globalStats.silver}
          </div>
          <div className="tier-box">
            <img src="icons/gold.png" alt="G" /> {globalStats.gold}
          </div>
        </div>

        <div className="stat-group">
          <div className="stat-label">Фильтр</div>
          <div className="stat-value">
            <span id="current-filter">
              {versionFilter ? versionFilter : "—"}
              {statusFilter ? `, ${STATUS_OPTIONS.find((x) => x.value === statusFilter)?.label}` : ""}
              {searchQuery.trim() ? ", поиск" : ""}
            </span>
          </div>
        </div>

        <div className="stat-group">
          <div className="stat-label">Подфильтр</div>
          <div className="stat-value">
            <span id="current-subfilter">{ACHIEVEMENTS[currentMain].subfilters[currentSub]?.name || "—"}</span>
          </div>
        </div>
      </div>

      <Tabs items={tabs} activeKey={currentMain} onChange={setCurrentMain} />

      <div className="main">
        <div className="sidebar">
          <div className="sidebar-title">Подкатегории</div>
          {progress ? (
            <Subfilters
              achievements={ACHIEVEMENTS}
              progress={progress}
              mainKey={currentMain}
              activeSubKey={currentSub}
              onChange={setCurrentSub}
              versionFilter={versionFilter}
              statusFilter={statusFilter}
              searchQuery={searchQuery}
            />
          ) : null}
        </div>

        <div className="achievements-panel">
          <div className="subfilter-header">
            <span id="subfilter-name">{ACHIEVEMENTS[currentMain].subfilters[currentSub]?.name}</span>
            <span id="subfilter-stats" className="subfilter-stats">
              — Достижений: {currentStats.completed}/{currentStats.total} • Полихром: {currentStats.earnedPoly}/{currentStats.maxPoly}
            </span>
          </div>

          {progress ? (
            <AchievementList
              achievements={ACHIEVEMENTS}
              progress={progress}
              mainKey={currentMain}
              subKey={currentSub}
              versionFilter={versionFilter}
              statusFilter={statusFilter}
              searchQuery={searchQuery}
              onToggle={toggleAchievement}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
