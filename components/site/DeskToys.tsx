"use client";

import { useEffect, useState } from "react";
import Window from "./Window";

const timeFormat = new Intl.DateTimeFormat("en-US", { timeZone: "America/Chicago", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
const dateFormat = new Intl.DateTimeFormat("en-US", { timeZone: "America/Chicago", weekday: "long", month: "short", day: "numeric", year: "numeric" });

export function Clock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <Window title="Clock Tool 1.1" className="clock">
      <p>Austin, Texas</p>
      <p>{now ? dateFormat.format(now) : " "}</p>
      <p>{now ? timeFormat.format(now) : "--:--:--"}</p>
    </Window>
  );
}

const SIZE = 8;
const GLIDER = new Set(["1,0", "2,1", "0,2", "1,2", "2,2"]);

function step(cells: Set<string>): Set<string> {
  const counts = new Map<string, number>();
  cells.forEach(key => {
    const [x, y] = key.split(",").map(Number);
    for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) continue;
      const k = `${(x + dx + SIZE) % SIZE},${(y + dy + SIZE) % SIZE}`;
      counts.set(k, (counts.get(k) ?? 0) + 1);
    }
  });
  const next = new Set<string>();
  counts.forEach((n, k) => { if (n === 3 || (n === 2 && cells.has(k))) next.add(k); });
  return next;
}

export function Glider() {
  const [cells, setCells] = useState<Set<string>>(GLIDER);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setCells(step), 500);
    return () => clearInterval(id);
  }, []);
  return (
    <Window title="Glider 1.1">
      <div className="desk-foot">
        <div className="life" aria-hidden="true">
          {Array.from({ length: SIZE * SIZE }, (_, i) => <i key={i} className={cells.has(`${i % SIZE},${Math.floor(i / SIZE)}`) ? "on" : ""} />)}
        </div>
        <p>Game of Life</p>
      </div>
    </Window>
  );
}
