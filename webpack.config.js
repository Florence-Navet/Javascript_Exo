// webpack.config.js
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Ces lignes permettent d'obtenir __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: "./src/index.js",
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
};
