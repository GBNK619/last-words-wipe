import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Saving my personality to the cloud… oh. The cloud is also being wiped.";

// Gate validation: the entry must be 1–200 characters, a single line,
// and not only whitespace — otherwise the sealed scorer rejects it.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(`wrote entry.txt (${LINE.length} characters): ${LINE}`);
