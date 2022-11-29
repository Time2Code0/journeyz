import { defineDocumentType } from "contentlayer/source-files";
import { getUrl, getHeadings, getPathSegments } from "../utils";

export const Lesson = defineDocumentType(() => ({
    name: 'Lesson',
    filePathPattern: `courses/**/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the lesson',
            required: true,
        },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (_) => getUrl(_),
        },
        headings: {
            type: "json",
            resolve: (_) => getHeadings(_),
        },
        pathSegments: {
            type: "json",
            resolve: (_) => getPathSegments(_),
        },
    },
}))