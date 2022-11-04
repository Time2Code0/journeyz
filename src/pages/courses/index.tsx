import DefaultLayout from "@components/Layouts/Default";
import { AllCourses, Hero, StartLearingNowParallax } from "@components/Sections/Courses";

export default function Courses() {
    return (
        <DefaultLayout>
            <main>
                <Hero />
                <StartLearingNowParallax />
                <AllCourses />
            </main>
        </DefaultLayout>
    )
}