import { H1, SectionContainer } from "@components/atoms";
import { CoursePromotionItem } from "@components/molecules";
import { Course } from "../../../../.contentlayer/generated/types";

interface Props {
    featuredCourse: Course;
}

export default function Hero({ featuredCourse }: Props) {
    return (
        <section>
            <SectionContainer>
                <div className="mx-auto mt-16 max-w-2xl text-center mb-12">
                    <H1 className="mb-6">
                        Courses
                    </H1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ac eu elit senectus mauris blandit tempor.
                        Egestas ut tincidunt a eget ultrices risus.
                        Et lorem ut quam turpis dictum habitant.
                    </p>
                </div>

                <CoursePromotionItem course={featuredCourse} featured />
            </SectionContainer>
        </section>
    )
}