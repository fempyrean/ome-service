import { homedir } from "node:os";
import { basename } from "node:path";
import chokidar from "chokidar";

const folder = `${homedir()}/Studies/ome-service/tmp`;
const watcher = chokidar.watch(folder, {
  ignored: (path) => basename(path).startsWith("tmp_"),
});

watcher.on("change", (path) => console.log(`File ${path} has been changed`));
