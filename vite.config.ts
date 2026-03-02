import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import fs from "node:fs";

function figmaAssetPlugin() {
  const prefix = "figma:asset/";

  return {
    name: "figma-asset-resolver",
    resolveId(source: string) {
      if (!source.startsWith(prefix)) return null;

      const fileName = source.slice(prefix.length);

      const candidates = [
        path.resolve(process.cwd(), "assets", fileName),
        path.resolve(process.cwd(), "public", "assets", fileName),
        path.resolve(process.cwd(), "src", "assets", fileName),
      ];

      const found = candidates.find((p) => fs.existsSync(p));
      if (!found) {
        throw new Error(
          `Missing Figma asset: ${fileName}. Looked in:\n` + candidates.join("\n")
        );
      }

      return found;
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), figmaAssetPlugin()],
});
