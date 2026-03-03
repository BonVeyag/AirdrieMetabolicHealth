import fs from "node:fs/promises";
import path from "node:path";

const DATA_DIR = path.join(process.cwd(), "data");

export async function appendJsonLine(fileName: string, payload: object) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const target = path.join(DATA_DIR, fileName);
  await fs.appendFile(target, `${JSON.stringify(payload)}\n`, "utf8");
}

export async function readJsonLines<T>(fileName: string): Promise<T[]> {
  const target = path.join(DATA_DIR, fileName);

  try {
    const raw = await fs.readFile(target, "utf8");
    return raw
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => JSON.parse(line) as T);
  } catch (error) {
    const nodeError = error as NodeJS.ErrnoException;

    if (nodeError.code === "ENOENT") {
      return [];
    }

    throw error;
  }
}
