import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import fs from "node:fs";

function figmaAssetPlugin() {
  const prefix = "figma:asset/";

  return {
    name: "figma-asset-resolver",
    resolveId(source: string) {
      if (!source.startsWith(prefix)) return null;

      const fileName = source.slice(prefix.length); // e.g. 5535....png

      // Try common locations:
      const candidates = [
        path.resolve(process.cwd(), "assets", fileName),
        path.resolve(process.cwd(), "public", "assets", fileName),
        path.resolve(process.cwd(), "src", "assets", fileName),
      ];

      const found = candidates.find((p) => fs.existsSync(p));
      if (!found) {
        // Let the build error clearly tell you what file is missing and where it looked
        throw new Error(
          `Missing Figma asset: ${fileName}. Looked in:\n` + candidates.join("\n")
        );
      }

      return found;
    },
  };
}

export default defineConfig({
  plugins: [react(), figmaAssetPlugin()],
});
