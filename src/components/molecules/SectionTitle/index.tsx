import { H1 } from "@components/atoms";
import classNames from "classnames";
import { ReactNode } from "react";

export enum SectionTitleVariants {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right"
}

interface Props {
    children: ReactNode;
    variant?: SectionTitleVariants;
}

export default function SectionTitle({ children, variant = SectionTitleVariants.CENTER }: Props) {
    return (
        <div className={classNames("flex flex-col items-center", {"lg:flex-row" : variant === SectionTitleVariants.LEFT}, {"lg:flex-row-reverse" : variant === SectionTitleVariants.RIGHT})}>
            <H1>
                {children}
            </H1>
        </div>
    )
}