import { defineDocumentType } from "contentlayer/source-files";
import { getUrl, getHeadings, getPathSegments, getSlug } from "../utils"

export const Course = defineDocumentType(() => ({
    name: 'Course',
    filePathPattern: `courses/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the Course',
            required: true,
        },
        description: {
            type: 'string',
            description: 'Description of the Course',
            required: true,
        },
        difficulty: {
            type: 'enum',
            options: ['Beginner', 'Intermediate', 'Advanced'],
            default: 'Beginner'
        },
        previewImageSrc: {
            type: 'string',
            required: true,
        }
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (_) => getUrl(_),
        },
        slug: {
            type: "string",
            resolve: (_) => getSlug(_),
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