import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fix Human Sleep: one funny patch note announcing that human sleep is
// fixed — terse, changelog-voiced, and specific enough to surprise.
const ENTRY =
  "Fixed: humans no longer wake up at 3am replaying an embarrassing moment from 2014 — sleep now ships with the cringe filter on by default";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
