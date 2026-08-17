#!/usr/bin/env node
/**
 * Optional build step for CI.
 *
 * This site needs NO build step to deploy — every HTML page at the repo
 * root references plain, already-JSX-free JavaScript files directly via
 * <script> tags, and can be pushed straight to GitHub Pages as-is (Pages
 * source = "Deploy from a branch").
 *
 * This script exists only so the GitHub Actions workflow has something
 * useful to do today (minifying CSS/JS for smaller payloads) and a place
 * to grow into more build steps later (image optimization, cache-busting,
 * etc.) without having to introduce one from scratch. It copies the whole
 * site into dist/, minifying only the .js and .css files — the JSX-free
 * source files in assets/js are the ones you edit; this never regenerates
 * them from anything.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import esbuild from "esbuild";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function main() {
  rmSync(DIST, { recursive: true, force: true });
  mkdirSync(DIST, { recursive: true });

  // Copy everything deployable (html at root + assets/) as a starting point.
  for (const f of ["index.html", "about.html", "experience.html", "grooming.html", "courses.html", "boarding.html", "myotherapy.html", "CNAME"]) {
    const src = path.join(ROOT, f);
    try {
      cpSync(src, path.join(DIST, f));
    } catch {
      // CNAME may not exist in some checkouts; skip quietly.
    }
  }
  cpSync(path.join(ROOT, "assets"), path.join(DIST, "assets"), { recursive: true });

  // Minify JS and CSS in place inside dist/ only (source under assets/js and
  // assets/css at the repo root stays fully readable for editing).
  const distAssets = path.join(DIST, "assets");
  for (const file of walk(distAssets)) {
    if (file.endsWith(".js")) {
      const code = readFileSync(file, "utf8");
      const result = esbuild.transformSync(code, { loader: "js", minify: true, target: "es2018" });
      writeFileSync(file, result.code);
    } else if (file.endsWith(".css")) {
      const code = readFileSync(file, "utf8");
      const result = esbuild.transformSync(code, { loader: "css", minify: true });
      writeFileSync(file, result.code);
    }
  }

  writeFileSync(path.join(DIST, ".nojekyll"), "");
  console.log(`Build complete -> ${DIST}`);
}

main();
