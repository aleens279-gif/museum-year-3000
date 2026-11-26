// Museum of the Year 3000 — a year-3000 label for an ordinary object from today (rev 2)
// 132 of 200 chars max; one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

// The label first, then the ritual: wand, glowing box, shouting.
const PARTS = [
  "Remote control, 2024.",
  "Humans pointed this",
  "sacred wand at a glowing",
  "box and shouted at it",
  "nightly, believing the box could hear them.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
