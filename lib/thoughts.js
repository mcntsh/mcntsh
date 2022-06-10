import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { getFormattedDate } from "/lib/date";

const thoughtsDirectory = join(process.cwd(), "_thoughts");

export function getThoughtSlugs() {
  return fs.readdirSync(thoughtsDirectory);
}

export function getThoughtBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(thoughtsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const fileData = matter(fileContents);

  return {
    slug: realSlug,
    title: fileData.data.title,
    description: fileData.data.description,
    date: getFormattedDate(fileData.data.date),
    content: fileData.content,
  };
}

export function getAllThoughts() {
  return getThoughtSlugs()
    .map(getThoughtBySlug)
    .sort((thought1, thought2) => (thought1.date > thought2.date ? -1 : 1));
}
