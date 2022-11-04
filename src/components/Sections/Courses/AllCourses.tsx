import { H3, Link, SectionContainer } from "@components/atoms"
import { SectionTitle } from "@components/molecules";
import { motion } from "framer-motion"
import { Course } from "types/Course"

const courses: Course[] = [
    {
        previewImage: "images/CoursePlaceholderImage.png",
        title: "Example Title 1",
        shortDescription: "Posuere urna nec tincidunt praesent semper feugiat. Quam lacus suspendisse faucibus interdum posuere lorem ipsum",
        difficulty: "Beginner"
    },
    {
        previewImage: "images/CoursePlaceholderImage.png",
        title: "Some longer example title lol",
        shortDescription: "Posuere urna nec tincidunt praesent semper feugiat. Quam lacus suspendisse faucibus interdum posuere lorem ipsum Posuere urna nec tincidunt praesent semper feugiat. Quam lacus suspendisse faucibus interdum posuere lorem ipsum",
        difficulty: "Intermediate"
    },
    {
        previewImage: "images/CoursePlaceholderImage.png",
        title: "Example Title 2",
        shortDescription: "Posuere urna nec tincidunt praesent semper feugiat. Quam lacus suspendisse faucibus interdum posuere lorem ipsum",
        difficulty: "Advanced"
    },
    {
        previewImage: "images/CoursePlaceholderImage.png",
        title: "Example Title 3",
        shortDescription: "Posuere urna nec tincidunt praesent semper feugiat. Quam lacus suspendisse faucibus interdum posuere lorem ipsum",
        difficulty: "Intermediate"
    },
];

export default function AllCourses() {
    return (
        <section className="mt-16 pt-12" id="all-courses">
            <SectionContainer>
                <SectionTitle>
                    All Courses
                </SectionTitle>

                <div className="mt-16 grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
                    {courses.map(course => {
                        return (
                            <CourseItem course={course} />
                        );
                    })}
                </div>
            </SectionContainer>
        </section>
    )
}

const imageVariants = {
    hover: {
        scale: 1.1,
    }
}

interface CourseItemProps {
    course: Course
}

function CourseItem({ course }: CourseItemProps) {
    return (
        <motion.div whileHover="hover" className="bg-gray-800">
            <Link className="flex flex-col min-h-full group" href="courses/test">
                <div className="overflow-hidden">
                    <motion.img
                        src={course.previewImage}
                        variants={imageVariants}
                        transition={{ type: "linear", duration: 0.5 }} />
                </div>

                <div className="flex flex-col flex-1 px-8 py-10">
                    <H3 className="mb-4 group-hover:text-primary-500 transition-colors duration-300">
                        {course.title}
                    </H3>

                    <p className="mb-8">
                        {course.shortDescription}
                    </p>

                    <div className="mt-auto my-8 w-full h-[1px] bg-gray-50" />

                    <div className="flex justify-between items-center">
                        <div className="overflow-hidden">
                            <div className="text-primary-500 font-bold">
                                Learn more
                            </div>

                            <div className="h-[2px] min-h-[2px] w-0 group-hover:w-full mt-1 bg-primary-500 transition-all duration-500" />
                        </div>

                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                className="mr-2">
                                <rect
                                    y="9.42859"
                                    width="4"
                                    height="8.57143"
                                    rx="2"
                                    className="fill-primary-500" />
                                <rect
                                    x="7" y="6"
                                    width="4"
                                    height="12"
                                    rx="2"
                                    className={(course.difficulty == "Intermediate" || course.difficulty == "Advanced") ? "fill-primary-500" : "fill-white"} />
                                <rect
                                    x="14"
                                    width="4"
                                    height="18"
                                    rx="2"
                                    className={course.difficulty == "Advanced" ? "fill-primary-500" : "fill-white"} />
                            </svg>

                            <span>{course.difficulty}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}