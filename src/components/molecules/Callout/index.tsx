import { H4 } from "@components/atoms";
import classNames from "classnames";
import { ReactNode } from "react";
import {
    Info as InfoIcon,
    AlertTriangle as WarningIcon,
    CheckCircle as SuccessIcon,
    AlertCircle as ErrorIcon
} from 'react-feather';

type CalloutTypes = 'info' | 'success' | 'warning' | 'error';

interface CalloutProps {
    type: CalloutTypes;
    title?: string;
    children: ReactNode;
}

export default function Callout({ type = "info", title, children }: CalloutProps) {
    const wrapperStyleClass = {
        info: "border-l-primary-500 bg-infoBackground",
        success: "border-l-success bg-successBackground",
        warning: "border-l-warning bg-warningBackground",
        error: "border-l-error bg-errorBackground"
    };

    const iconStyleClass = {
        info: "text-primary-500",
        success: "text-success",
        warning: "text-warning",
        error: "text-error"
    }

    const Icons = {
        info: InfoIcon,
        success: SuccessIcon,
        warning: WarningIcon,
        error: ErrorIcon
    };

    const Icon = Icons[type];

    return (
        <div className={classNames("relative py-6 px-8 mt-12 mb-16 xl:-ml-8 xl:-mr-8 border-l-[3px] rounded-r-md", wrapperStyleClass[type])}>
            <div
                className={classNames("absolute top-0 left-0 p-2 bg-gray-900 rounded-[50%] hidden md:block", iconStyleClass[type])}
                style={{ transform: 'translate(calc(-50% - 1.5px), -50%)' }}>
                <Icon size={32} />
            </div>

            {title && <H4>{title}</H4>}

            <div>
                {children}
            </div>
        </div>
    )
}

type ShortCalloutProps = Omit<CalloutProps, 'type'>;

export function InfoCallout(props: ShortCalloutProps) {
    return (
        <Callout {...props} type="info" />
    )
}

export function SuccessCallout(props: ShortCalloutProps) {
    return (
        <Callout {...props} type="success" />
    )
}

export function WarningCallout(props: ShortCalloutProps) {
    return (
        <Callout {...props} type="warning" />
    )
}

export function ErrorCallout(props: ShortCalloutProps) {
    return (
        <Callout {...props} type="error" />
    )
}