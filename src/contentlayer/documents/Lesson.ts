import { defineDocumentType } from "contentlayer/source-files";
import { getUrl, getHeadings, getPathSegments } from "contentlayer/utils";

export const Lesson = defineDocumentType(() => ({
    name: 'Lesson',
    filePathPattern: `courses/**/**/*.mdx`,
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