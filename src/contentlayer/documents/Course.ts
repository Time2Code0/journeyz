import { defineDocumentType } from "contentlayer/source-files";
import { getUrl, getHeadings, getPathSegments } from "contentlayer/utils";

export const Course = defineDocumentType(() => ({
    name: 'Course',
    filePathPattern: `**/*.mdx`,
    fields: {
        title: {
            type: 'string',
            description: 'The title of the course',
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