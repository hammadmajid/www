import { promises as fs } from "fs";
import path from "path";

async function getPostSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  });
  return entries
    .filter((entry) => entry.isFile() && entry.name === "page.mdx")
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.parentPath, entry.name),
      );
      return path.dirname(relativePath);
    })
    .map((slug) => slug.replace(/\\/g, "/"));
}

export default async function sitemap() {
  const notesDirectory = path.join(process.cwd(), "app", "post");
  const slugs = await getPostSlugs(notesDirectory);

  const notes = slugs.map((slug) => ({
    url: `https://bine.codes/me/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ["", "/links", "/projects", "/contact", "/meta", "/about"].map(
    (route) => ({
      url: `https://bine.codes${route}`,
      lastModified: new Date().toISOString(),
    }),
  );

  return [...routes, ...notes];
}
