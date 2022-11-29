import { Course } from "./src/contentlayer/documents/Course"
import { Lesson } from "./src/contentlayer/documents/Lesson";
import { makeSource } from "contentlayer/source-files";
import { contentDirPath } from "./src/contentlayer/utils";
import slug from "rehype-slug";
import prettyCode from "./src/contentlayer/plugins/pretty-code";
import autolinkHeadings from "./src/contentlayer/plugins/autolink-headings";

export default makeSource({
    contentDirPath,
    documentTypes: [Course, Lesson],
    mdx: {
        rehypePlugins: [slug, autolinkHeadings, prettyCode],
    }
});