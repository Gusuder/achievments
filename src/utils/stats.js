export function getStats(achievements, progress, mainKey = null, subKey = null) {
  let total = 0, completed = 0, maxPoly = 0, earnedPoly = 0;
  let bronze = 0, silver = 0, gold = 0;

  const mains = mainKey ? [mainKey] : Object.keys(achievements);
  for (const main of mains) {
    const subs = subKey ? [subKey] : Object.keys(achievements[main].data);
    for (const sub of subs) {
      const achs = achievements[main].data[sub];
      const prog = progress?.[main]?.[sub] || [];
      achs.forEach((a, i) => {
        total++;
        maxPoly += a.reward;
        if (prog[i]?.completed) {
          completed++;
          earnedPoly += a.reward;
          if (a.tier === "bronze") bronze++;
          else if (a.tier === "silver") silver++;
          else if (a.tier === "gold") gold++;
        }
      });
    }
  }
  return { total, completed, maxPoly, earnedPoly, bronze, silver, gold };
}
