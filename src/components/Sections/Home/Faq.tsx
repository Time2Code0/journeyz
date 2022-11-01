import { H4, SectionContainer } from "@components/atoms"
import { SectionTitle } from "@components/molecules";
import { SectionTitleVariants } from "@components/molecules/SectionTitle";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { X } from "react-feather"

const faqData = [
    {
        question: "What are your Tech Stacks?",
        answer: `My main Stacks are C# and .NET but I am constantly trying to expand my skills.
        
            Programming languages:
            - C#
            - Java
            - HTML/CSS
            - JavaScript/TypeScript

            Frameworks:
            - .NET (Core and Framework)
            - React (Next.JS)`
    },
    {
        question: "Why are there only a few blog articles?",
        answer: "I am not an active blogger. First and foremost, I implemented the blogging feature just to teach myself something (and I found the idea pretty cool). However, I don't want to exclude that in the future articles about my work or similar will appear depending on whether there is something interesting or helpful to report."
    },
    {
        question: "Do you have any book recommendations?",
        answer: `Yes! I am a big fan of Faatsy literature. A selection of more or less known book series would be the following:
        
        - The Witcher (by Andrzej Sapkowski)
        - The Riyria Revelations (by Michael J. Sullivan)
        - The Legends of the First Empire (by Michael J. Sullivan)`
    },
]

export default function Faq() {
    return (
        <section id="faq" className="mt-16 pt-12">
            <SectionContainer>
                <SectionTitle>
                    <span className="text-primary-500">F</span>requently <span className="text-primary-500">A</span>sked <span className="text-primary-500">Q</span>uestions
                </SectionTitle>

                <div className="mt-16 grid justify-items-stretch items-start gap-4">
                    {faqData.map(item => {
                        return (
                            <FaqItem
                                answer={item.answer}
                                question={item.question} />
                        )
                    })}
                </div>
            </SectionContainer>

        </section>
    )
}

interface FaqItemProps {
    question: string;
    answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col justify-start items-stretch border-2 border-white hover:border-primary-500">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center px-6 py-5 cursor-pointer">
                <H4>
                    {question}
                </H4>

                <X className={classNames("ml-6 transition-transform duration-300", isOpen ? "" : "rotate-45")} />
            </div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto", scale: 1 },
                            collapsed: { opacity: 0, height: 0, scale: 0.9 }
                        }}
                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <p className="whitespace-pre-line px-6 pb-6">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}