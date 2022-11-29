import DefaultLayout from "@components/Layouts/Default";
import AllCoursesSection from "@components/Sections/AllCourses";
import { allCourses, Course } from "../../.contentlayer/generated";

interface Props {
    courses: Course[];
}

export default function AllCourses({ courses }: Props) {
    return (
        <DefaultLayout>
            <main>
                <AllCoursesSection.Hero featuredCourse={courses[0]}/>
                <AllCoursesSection.StartLearingNowParallax />
                <AllCoursesSection.Courses courses={courses}/>
            </main>
        </DefaultLayout>
    )
}

export async function getStaticProps() {
    const courses = allCourses;

    return { props: { courses} };
}