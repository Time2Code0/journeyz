import DefaultLayout from "@components/Layouts/Default";
import AllCoursesSection from "@components/Sections/AllCourses";

export default function AllCourses(){
    return(
        <DefaultLayout>
            <main>
                <AllCoursesSection.Hero />
                <AllCoursesSection.StartLearingNowParallax />
                <AllCoursesSection.Courses />
            </main>
        </DefaultLayout>
    )
}