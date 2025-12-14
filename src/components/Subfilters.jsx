import { getStats } from "../utils/stats.js";

export default function Subfilters({
  achievements,
  progress,
  mainKey,
  activeSubKey,
  onChange,
  versionFilter,
  statusFilter,
  searchQuery,
}) {
  const subs = achievements[mainKey].subfilters;

  // В оригинале счетчики слева показывают общий прогресс по подкатегории (без версий/поиска/статуса)
  // поэтому тут считаем так же: только main+sub.
  return (
    <div id="subfilters">
      {Object.entries(subs).map(([subKey, meta]) => {
        const st = getStats(achievements, progress, mainKey, subKey);
        const label = meta.name;

        return (
          <div
            key={subKey}
            className={\`subfilter-item \${activeSubKey === subKey ? "active" : ""}\`}
            onClick={() => onChange(subKey)}
            role="button"
            tabIndex={0}
          >
            <div className="subfilter-left">
              <div className="subfilter-name">{label}</div>
              <div className="subfilter-version">{meta.version}</div>
            </div>
            <div className="subfilter-right">
              <div className="subfilter-stats">{st.completed}/{st.total}</div>
              <div className="subfilter-poly">
                <img src="icons/poly.png" alt="✦" className="poly-icon" />
                {st.earnedPoly}/{st.maxPoly}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
