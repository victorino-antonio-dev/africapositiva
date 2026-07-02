import { rmSync } from "node:fs";
import { resolve, sep } from "node:path";

const root = resolve(process.cwd());

for (const directory of [".next", "out"]) {
  const target = resolve(root, directory);

  if (!target.startsWith(`${root}${sep}`)) {
    throw new Error(`Diretório de build inseguro: ${target}`);
  }

  rmSync(target, { recursive: true, force: true });
}
