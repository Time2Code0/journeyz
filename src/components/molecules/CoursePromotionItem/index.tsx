import { H3, Link } from "@components/atoms";
import { motion } from "framer-motion";
import { Course } from "../../../../.contentlayer/generated";

interface Props {
    course: Course;
    featured?: boolean;
}

export default function CoursePromotionItem({ course, featured = false }: Props) {
    const imageVariants = {
        hover: {
            scale: 1.1,
        }
    }

    if (featured) {
        return (
            <motion.div whileHover="hover" className="bg-gray-800">
                <Link className="flex flex-col lg:flex-row justify-between min-h-full group" href={`/${course.slug}`}>
                    <div className="overflow-hidden lg:max-w-2xl">
                        <motion.img
                            src={course.previewImageSrc}
                            variants={imageVariants}
                            transition={{ type: "linear", duration: 0.5 }}
                            className="object-cover min-h-full" />
                    </div>

                    <div className="flex flex-col flex-1 px-8 py-10 lg:px-14 lg:py-16 lg:max-w-xl lg:min-w-[576px]">
                        <H3 className="mb-4 group-hover:text-primary-500 transition-colors duration-300">
                            {course.title}
                        </H3>

                        <p className="mb-8">
                            {course.description}
                        </p>

                        <div className="mt-auto my-8 w-full h-[1px] bg-gray-50" />

                        <div className="flex justify-between items-center">
                            {/* <Button>
                                Featured
                            </Button> */}
                            <div>
                                Featured
                            </div>

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

    return (
        <motion.div whileHover="hover" className="bg-gray-800">
            <Link className="flex flex-col min-h-full group" href={`/${course.slug}`}>
                <div className="overflow-hidden">
                    <motion.img
                        src={course.previewImageSrc}
                        variants={imageVariants}
                        transition={{ type: "linear", duration: 0.5 }} />
                </div>

                <div className="flex flex-col flex-1 px-8 py-10">
                    <H3 className="mb-4 group-hover:text-primary-500 transition-colors duration-300">
                        {course.title}
                    </H3>

                    <p className="mb-8">
                        {course.description}
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