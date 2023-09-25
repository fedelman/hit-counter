import { readFile, writeFile } from "../../helpers/file-helpers";

const DATABASE_PATH = "/src/database.json";

export function HitCounter() {
  let { hits } = JSON.parse(readFile(DATABASE_PATH));

  console.log("HitCounter");

  hits += 1;

  writeFile(DATABASE_PATH, JSON.stringify({ hits }));

  return hits;
}
