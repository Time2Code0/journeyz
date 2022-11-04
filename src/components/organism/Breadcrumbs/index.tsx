import { Link } from "@components/atoms";
import { useRouter } from "next/router"
import { Children, Fragment, ReactNode, useEffect, useState } from "react";
import { Home } from "react-feather";

type Breadcrump = {
    href: string;
    label: string;
    isCurrent: boolean;
}

export default function Breadcrumbs() {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState<Breadcrump[]>();

    useEffect(() => {
        const pathWithoutQuery = router.asPath.split("?")[0];
        let pathArray = pathWithoutQuery.split("/");
        pathArray.shift();

        pathArray = pathArray.filter((path) => path !== "");

        const breadcrumbs: Breadcrump[] = pathArray.map((path, index) => {
            const href = "/" + pathArray.slice(0, index + 1).join("/");

            return {
                href,
                label: path.charAt(0).toUpperCase() + path.slice(1),
                isCurrent: index === pathArray.length - 1,
            };
        });

        setBreadcrumbs(breadcrumbs);
    }, [router.asPath]);

    return (
        <Breadcrumb>
            {router.pathname !== "/" &&
                <BreadcrumbItem
                    isCurrent={router.pathname === "/"}
                    href="/">
                    <div className="flex items-center">
                        <Home size={18}/>
                        &nbsp;Home
                    </div>
                </BreadcrumbItem>
            }

            {breadcrumbs && breadcrumbs.map((breadcrumb) => (
                <BreadcrumbItem
                    key={breadcrumb.href}
                    href={breadcrumb.href}
                    isCurrent={breadcrumb.isCurrent}>
                    {breadcrumb.label}
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    )
}

function Breadcrumb({ children }: any) {
    const childrenArray = Children.toArray(children);

    const childrenWithSperator = childrenArray.map((child, index) => {
        if (index !== childrenArray.length - 1) {
            return (
                <Fragment key={index}>
                    {child}
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="10"
                            viewBox="0 0 6 10"
                            fill="none">
                            <path
                                d="M1 9L5 5L1 1"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="stroke-gray-50" />
                        </svg>
                    </span>
                </Fragment>
            )
        }

        return child;
    });

    return (
        <div className="mx-8 md:mx-16 lg:mx-32 mt-8" aria-label="breadcrumb">
            <ol className="flex items-center space-x-4">{childrenWithSperator}</ol>
        </div>
    )
}

interface BreadcrumbItemProps {
    children: ReactNode;
    href: string;
    isCurrent: boolean;
}

function BreadcrumbItem({ children, href, isCurrent, ...props }: BreadcrumbItemProps) {
    if (isCurrent) {
        return (
            <li {...props} className="py-[2px] px-[6px] bg-primaryTransparentBackground rounded">
                <div className="font-semibold cursor-default text-primary-500">
                    {children}
                </div>
            </li>
        )
    }

    return (
        <li {...props}>
            <Link href={href} className="hover:text-primary-500">
                {children}
            </Link>
        </li>
    )
}