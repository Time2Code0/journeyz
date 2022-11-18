import { H1, H3, Link, SectionContainer } from "@components/atoms";
import { Button } from "@components/molecules";
import { motion } from "framer-motion";
import { Course } from "types/Course";

export default function Hero() {
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

                <FeaturedCourseItem course={{
                    previewImage: "images/CoursePlaceholderImage.png",
                    title: "Example Title 1",
                    shortDescription: "Posuere urna nec tincidunt praesent semper feugiat. Quam lacus suspendisse faucibus interdum posuere lorem ipsum",
                    difficulty: "Beginner"
                }} />
            </SectionContainer>
        </section>
    )
}

const imageVariants = {
    hover: {
        scale: 1.1,
    }
}

interface FeaturedCourseItemProps {
    course: Course
}

function FeaturedCourseItem({ course }: FeaturedCourseItemProps) {
    return (
        <motion.div whileHover="hover" className="bg-gray-800">
            <Link className="flex flex-col lg:flex-row justify-between min-h-full group" href="/courses/test">
                <div className="overflow-hidden lg:max-w-2xl">
                    <motion.img
                        src={course.previewImage}
                        variants={imageVariants}
                        transition={{ type: "linear", duration: 0.5 }} 
                        className="object-cover min-h-full"/>
                </div>

                <div className="flex flex-col flex-1 px-8 py-10 lg:px-14 lg:py-16 lg:max-w-xl lg:min-w-[576px]">
                    <H3 className="mb-4 group-hover:text-primary-500 transition-colors duration-300">
                        {course.title}
                    </H3>

                    <p className="mb-8">
                        {course.shortDescription}
                    </p>

                    <div className="mt-auto my-8 w-full h-[1px] bg-gray-50" />

                    <div className="flex justify-between items-center">
                        <Button>
                            Featured
                        </Button>

                        <div className="overflow-hidden">
                            <div className="text-primary-500 font-bold">
                                Learn more
                            </div>

                            <div className="h-[2px] min-h-[2px] w-0 group-hover:w-full mt-1 bg-primary-500 transition-all duration-500" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}