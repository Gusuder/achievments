export default function AchievementList({
  achievements,
  progress,
  mainKey,
  subKey,
  versionFilter,
  statusFilter,
  searchQuery,
  onToggle,
}) {
  const achList = achievements[mainKey].data[subKey] || [];
  const subProg = progress?.[mainKey]?.[subKey] || [];

  const q = (searchQuery || "").trim().toLowerCase();
  const filtered = achList.filter((ach, i) => {
    const prog = subProg[i] || { completed: false };
    const matchesSearch =
      !q ||
      ach.title.toLowerCase().includes(q) ||
      (ach.desc && ach.desc.toLowerCase().includes(q));
    const matchesVersion = !versionFilter || ach.version === versionFilter;
    const matchesStatus =
      !statusFilter ||
      (statusFilter === "completed" && prog.completed) ||
      (statusFilter === "incomplete" && !prog.completed);
    return matchesSearch && matchesVersion && matchesStatus;
  });

  if (filtered.length === 0) {
    return (
      <div id="ach-list" className="ach-list">
        <div style={{ textAlign: "center", padding: 30, color: "#777" }}>
          Ничего не найдено
        </div>
      </div>
    );
  }

  return (
    <div id="ach-list" className="ach-list">
      {filtered.map((ach) => {
        const realIndex = achList.findIndex((a) => a.id === ach.id);
        const prog = subProg[realIndex] || { completed: false, date: "" };

        let tierImgSrc = "icons/bronze.png";
        if (ach.tier === "silver") tierImgSrc = "icons/silver.png";
        else if (ach.tier === "gold") tierImgSrc = "icons/gold.png";

        return (
          <div
            key={ach.id}
            className={\`ach-item \${prog.completed ? "completed" : ""}\`}
            onClick={() => onToggle(realIndex)}
            role="button"
            tabIndex={0}
          >
            <div className="tier-icon">
              <div className="tier-badge">
                <img src={tierImgSrc} alt={ach.tier} />
              </div>
              <div className="version-tag" data-version={ach.version}>
                {ach.version}
              </div>
            </div>

            <div className="ach-info">
              <div className="ach-title">{ach.title}</div>
              {ach.desc ? <div className="ach-desc">{ach.desc}</div> : null}

              <div className="ach-footer">
                <div className="reward">
                  <img src="icons/poly.png" alt="✦" className="poly-icon" /> {ach.reward}
                </div>
                {prog.completed && prog.date ? (
                  <div className="completion-date">{prog.date}</div>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
