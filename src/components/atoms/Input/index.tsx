import classNames from "classnames";
import { useState } from "react";

type ValidationState = 'regular' | 'success' | 'error';

interface Props {
    inputLabelText?: string;
    placeholderText?: string;
}

export default function Input({ inputLabelText, placeholderText }: Props) {
    const [currentValidationState, setCurrentValidationState] = useState<ValidationState>("regular");

    const validationTextStyleClass = {
        regular: "test-[rgba(255,_255,_255,_0.4)]",
        success: "text-success",
        error: "text-error"
    };

    const validationInputStyleClass = {
        regular: "border border-[hsla(0,0%,100%,.4)] bg-gray-900",
        success: "border border-success bg-successBackground bg-[url('/images/icon_success.svg')] bg-auto bg-no-repeat bg-[left_calc(97%)_top_calc(50%)]",
        error: "border border-error bg-errorBackground bg-[url('/images/icon_error.svg')] bg-auto bg-no-repeat bg-[left_calc(97%)_top_calc(50%)]"
    }

    const labelClass = classNames("absolute left-[4%] -top-[14%] right-auto bottom-auto pb-[2px] px-2 bg-gray-900 text-sm", validationTextStyleClass[currentValidationState]);
    const inputClass = classNames("h-14 px-5 py-2 w-full placeholder-gray-50 outline-none", validationInputStyleClass[currentValidationState]);

    return (
        <div className="relative">
            <label className={labelClass}>{inputLabelText}</label>
            <input className={inputClass} placeholder={placeholderText} />
        </div>
    )
}