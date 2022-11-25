import type { DocumentGen } from "contentlayer/core";
import GithubSlugger from "github-slugger";

export const contentDirPath = "content/courses";

export type DocHeading = {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    text?: string;
    slug?: string;
};

// props to https://youssefbouzekri.vercel.app/posts/contentlayer-table-of-contents
export const getHeadings = async (doc: DocumentGen): Promise<DocHeading[]> => {
    const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
    const slugger = new GithubSlugger();
    // TODO: instead of map, use reduce and only return object if **not undefined**
    const headings: DocHeading[] = Array.from(doc.body.raw.matchAll(regXHeader)).map(({ groups }: any) => {
        const flag = groups?.flag;
        const content = groups?.content;
        return {
            level: flag?.length as keyof DocHeading["level"], // DISCUSS: better ts support
            text: content,
            slug: content ? slugger.slug(content) : undefined,
        };
    });

    return headings;
};

export type PathSegments = {
    order: number;
    pathName: string;
}[];

// props to https://github.com/contentlayerdev/website/blob/main/src/contentlayer/document/Doc.ts
export const getPathSegments = async (doc: DocumentGen): Promise<PathSegments> => {
    return doc._raw.flattenedPath.split("/").map((dirName: string) => {
        const re = /^((\d+)-)?(.*)$/;
        const [, , orderStr, pathName] = dirName.match(re) ?? [];
        const order = orderStr ? parseInt(orderStr) : 0;

        return { order, pathName };
    });
};

export const getUrl = async (doc: DocumentGen) => {
    return doc._raw.flattenedPath.split("/").reduce((prev: any, curr: any) => {
        const re = /^((\d+)-)?(.*)$/;
        const [, , orderStr, pathName] = curr.match(re) ?? [];
        
        return `${prev}/${pathName}`;
    }, "");
};