export default function Tabs({ items, activeKey, onChange }) {
  return (
    <div className="tabs">
      {items.map((it) => (
        <div
          key={it.key}
          className={\`tab \${activeKey === it.key ? "active" : ""}\`}
          onClick={() => onChange(it.key)}
          role="button"
          tabIndex={0}
        >
          {it.label}
        </div>
      ))}
    </div>
  );
}
