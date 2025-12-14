const STORAGE_KEY = "zzz_ach_progress_v2";

export function loadProgress(achievements) {
  const saved = localStorage.getItem(STORAGE_KEY);
  const progress = saved ? JSON.parse(saved) : {};

  for (const mainKey of Object.keys(achievements)) {
    if (!progress[mainKey]) progress[mainKey] = {};
    const subfilters = achievements[mainKey].subfilters;
    for (const subKey of Object.keys(subfilters)) {
      if (!progress[mainKey][subKey]) {
        progress[mainKey][subKey] = achievements[mainKey].data[subKey].map(() => ({
          completed: false,
          date: "",
        }));
      }
    }
  }
  return progress;
}

export function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}
