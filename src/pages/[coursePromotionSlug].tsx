import DefaultLayout from "@components/Layouts/Default";
import { allCourses } from "../../.contentlayer/generated/index.mjs";
import { Course } from "../../.contentlayer/generated/types.js";
import { useLiveReload } from 'next-contentlayer/hooks'

interface Props {
    course: Course;
}

export default function CoursePromotionSlug({ course }: Props) {
    useLiveReload();

    return (
        <DefaultLayout>
        </DefaultLayout>
    )
}

export async function getStaticProps(context: any) {
    const course = allCourses.find((courese) => courese.slug === context.params.coursePromotionSlug)!;

    return { props: { course } };
}

export async function getStaticPaths() {
    const paths = allCourses.map((course) => ({
        params: { coursePromotionSlug: course.slug },
    }))

    return { paths, fallback: false }
}