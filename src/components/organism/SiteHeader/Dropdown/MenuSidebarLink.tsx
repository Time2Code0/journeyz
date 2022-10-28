import Image from 'next/image';
import { Link } from '@components/atoms';

interface MenuSidebarLinkProps {
    href: string;
    label: string;
    title: string;
    image: {
        src: string;
        alt?: string;
        height?: number;
        width?: number;
        blurDataURL?: string;
    };
}

export function MenuSidebarLink({
    href,
    label,
    title,
    image,
}: MenuSidebarLinkProps) {
    return (
        <Link
            href={href}
            className="main-nav-link flex rounded-md p-1 leading-none text-gray-900 dark:text-white transition-colors hover:text-primary-500"
        >
            <div className="relative mr-4">
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={142}
                    height={106}
                    quality={100}
                    {...(image.blurDataURL && {
                        blurDataURL: image.blurDataURL,
                        placeholder: `blur`,
                    })}
                    layout="fixed"
                    className="max-h-[106px] max-w-[142px] rounded-lg"
                />
            </div>
            <div className="mt-2">
                <div className="text-xs font-medium uppercase leading-none tracking-wider text-gray-900 dark:text-white">
                    {label}
                </div>
                {title && (
                    <span className="mt-2 block text-[15px] font-medium leading-[22px]">
                        {title}
                    </span>
                )}
            </div>
        </Link>
    );
}
