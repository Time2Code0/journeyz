// contentlayer.config.ts
import { Course } from "contentlayer/documents/Course";
import { makeSource } from "contentlayer/source-files";

// src/contentlayer/utils.ts
import GithubSlugger from "github-slugger";
var contentDirPath = "content/courses";

// contentlayer.config.ts
import slug from "rehype-slug";

// src/contentlayer/plugins/pretty-code.ts
import rehypePrettyCode from "rehype-pretty-code";
var prettyCode = [
  rehypePrettyCode,
  {
    theme: "github-light",
    onVisitLine(node) {
      if (node.children.length === 0) {
        node.children = [{ type: "text", value: " " }];
      }
    },
    onVisitHighlightedLine(node) {
      node.properties.className.push("highlighted");
    },
    onVisitHighlightedWord(node) {
      node.properties.className = ["word"];
    }
  }
];
var pretty_code_default = prettyCode;

// src/contentlayer/plugins/autolink-headings.ts
import rehypeAutolinkHeadings from "rehype-autolink-headings";
var autolinkHeadings = [
  rehypeAutolinkHeadings,
  {
    behavior: "append",
    properties: {
      className: [
        "no-underline after:content-['#'] ml-1 after:text-gray-200 hover:after:text-brand-500 hover:after:bg-brand-50 after:rounded-md after:p-1"
      ]
    }
  }
];
var autolink_headings_default = autolinkHeadings;

// contentlayer.config.ts
var contentlayer_config_default = makeSource({
  contentDirPath,
  documentTypes: [Course],
  mdx: {
    rehypePlugins: [slug, autolink_headings_default, pretty_code_default]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-ET4PNHZK.mjs.map
