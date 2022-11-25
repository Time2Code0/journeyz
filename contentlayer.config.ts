import { Course } from "contentlayer/documents/Course";
import { makeSource } from "contentlayer/source-files";
import { contentDirPath } from "./src/contentlayer/utils";
import slug from "rehype-slug";
import prettyCode from "./src/contentlayer/plugins/pretty-code";
import autolinkHeadings from "./src/contentlayer/plugins/autolink-headings";

export default makeSource({
    contentDirPath,
    documentTypes: [Course],
    mdx: {
        rehypePlugins: [slug, autolinkHeadings, prettyCode],
    }
});