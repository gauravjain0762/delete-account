export function dateInfo(offset: number) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const weekday = d.toLocaleDateString("en-IN", { weekday: "long" });
  const dmy = `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
  const displayLabel = `${dmy} (${weekday})`;
  return { iso, weekday, dmy, displayLabel };
}

export function dateInfoFromIso(iso: string) {
  const [y, m, d] = iso.slice(0, 10).split("-").map(Number);
  const date = new Date(y, m - 1, d);
  const weekday = date.toLocaleDateString("en-IN", { weekday: "long" });
  const dmy = `${String(d).padStart(2, "0")}/${String(m).padStart(2, "0")}/${y}`;
  const displayLabel = `${dmy} (${weekday})`;
  return { iso, weekday, dmy, displayLabel };
}
