import { SectionContainer } from "@components/atoms"
import { CoursePromotionItem, SectionTitle } from "@components/molecules";
import { Course } from "../../../../.contentlayer/generated/types";

interface Props {
    courses: Course[];
}

export default function Courses({ courses }: Props) {
    return (
        <section className="mt-16 pt-12" id="all-courses">
            <SectionContainer>
                <SectionTitle>
                    All Courses
                </SectionTitle>

                <div className="mt-16 grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
                    {courses.map((course, index) => {
                        return (
                            <CoursePromotionItem key={index} course={course} />
                        );
                    })}
                </div>
            </SectionContainer>
        </section>
    )
}