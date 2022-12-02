import DashboardLayout from "@components/Layouts/Dashboard";
import { MyCourses, Overview, RecommendedCourses } from "@components/Sections/Dashboard";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <div className="flex flex-col xl:flex-row gap-8">
                <div className="xl:w-2/3">
                    <Overview />
                    <MyCourses />
                    <RecommendedCourses />
                </div>

                <div className="xl:w-1/3 flex justify-center items-center">
                    Right Sidebar (Challanges and Community Feed)
                </div>
            </div>
        </DashboardLayout>
    )
}