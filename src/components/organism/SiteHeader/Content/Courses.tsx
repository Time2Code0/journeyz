import { DropdownMenu } from '../Dropdown/DropdownMenu';
import { MenuLink } from '../Dropdown/MenuLink';
import { MenuSidebarLink } from '../Dropdown/MenuSidebarLink';
import { MenuColumn } from '../Dropdown/MenuColumn';
import { PlayCircle, BookOpen, ShoppingCart } from './icons';

type CoursesProps = {
    className?: string;
};

export default function Courses({ className }: CoursesProps) {
    return (
        <DropdownMenu className={className}>
            <li>
                <MenuColumn
                    className="nav:border-r nav:border-gray-50 nav:dark:border-gray-800"
                    title="Use Cases"
                    ctaLinkProps={{
                        href: `/use-cases`,
                        title: `View all use cases`,
                        className: `mb-4 nav:mb-0`,
                    }}
                >
                    <li>
                        <MenuLink
                            href="/use-cases/media-products-and-platforms"
                            title="Media Products &amp; Platforms"
                            subTitle="Build next gen media"
                            icon={PlayCircle}
                        />
                    </li>
                    <li>
                        <MenuLink
                            href="/use-cases/knowledge-management"
                            title="Knowledge Management"
                            subTitle="Build your knowledge layer"
                            icon={BookOpen}
                        />
                    </li>
                    <li>
                        <MenuLink
                            href="/use-cases/inventory-and-catalog-management"
                            title="Inventory &amp; Catalog Management"
                            subTitle="Reusable content, API-first"
                            icon={ShoppingCart}
                        />
                    </li>
                </MenuColumn>
            </li>

            <li>
                <MenuColumn
                    title="Case Studies"
                    ctaLinkProps={{
                        href: `/case-studies`,
                        title: `View all case studies`,
                    }}
                >
                    <li>
                        <MenuLink
                            href="/case-studies/telenor-case-study"
                            title="Telenor"
                            subTitle="Federation for streaming platform"
                        />
                    </li>
                    <li>
                        <MenuLink
                            href="/case-studies/2u-case-study"
                            title="2U"
                            subTitle="Content aggregation serving +300k students"
                        />
                    </li>
                    <li>
                        <MenuLink
                            href="/case-studies/statistics-finland"
                            title="Statistics Finland"
                            subTitle="Structured content with strict compliance"
                        />
                    </li>
                </MenuColumn>
            </li>

            <li>
                <MenuColumn
                    title={null}
                    isSidebar={true}
                    ctaLinkProps={{
                        href: `/marketplace`,
                        title: `Discover marketplace`,
                    }}
                >
                    <li>
                        <MenuSidebarLink
                            href="/marketplace/apps/hygraph-cloudinary-app"
                            label="Integration"
                            title="Cloudinary"
                            image={{
                                src: `/images/cloudinary.svg`,
                                blurDataURL: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAIAAAAUMWhjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB20lEQVRIiWNg4Ohk4Opi4O5k4AIj3i5KERfYHJCBXSCEMJ0bjCi3gBtiOpjkbGdAcKjvg04QSWXTeTHsQLCoZTovzA6oBcRr4MXNxYNIMJ2vG8qFMIi0g1jTuToZGFoQiHh/EDadr5uBs4OBo9Mhektj75m67lPKPmsZmNsQFpNvAcR0hlYGlvap86809p5msFrMYLts8tzLFW0nQeLE+INAyDC2MRjPX7vlXmTuXgaGegaWdpAIQ+OE2RcDMnYyMDQS9gdey1sZjBes336fwXwxg/hEBv4eUMiwdYCQ3JQN2+9Xd5yABiA5PgAFTlNL/1kGh+UMXJ3vP3y3jd7C4LBc2ms1yGJQnDeWtZ2ILdwHinN4AiPRgpauKecYDOczSE36//9/ZO7egyee7Tv82DBk455Dj0EOV5s9ce5lBoYmsiwAybWo+a6dMu8Kg/K0////eyVt23/k6dot97KrDv///59BalLXlHMeidvJ9QEEsbTrBK5n0Jqzbc9Dl4RtJU3H+2ZdlPNeu+vgYwarxY6xW0GlPZnJFF78MbQysHcyMLaDwoSlHWQieyeIAcl6BFMqPsvxaOMhThlROZmXMgW0L665aF3hcNO6yuRE4lC/0u8Atypo5wOuNgCfagCpWdxOGgAAAABJRU5ErkJggg==`,
                            }}
                        />
                    </li>
                    <li>
                        <MenuSidebarLink
                            href="/marketplace/apps/hygraph-bigcommerce-app"
                            label="Integration"
                            title="Bigcommerce"
                            image={{
                                src: `/images/bigcommerce.svg`,
                                blurDataURL: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAIAAAAUMWhjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABOklEQVRIie2UL6uDUBjGzyuKWmyDBZMYbKaZLQv7BPsEA7Nh32B9MMQg/sMgImeHjVW/hG1haWVxZW3wXph4uelymcdwYU884ffjPTw8hHzy3yMIwlhoABgLTXq6JEmu6/KXQY+rqooxRggRRZE/fbfbIWIcx/wFiqKUZYmvZFnGUyC8OmOa5uFweDwenAXCi75cLtfrNQB4nsfti+BHSYIgaNvWtm3f9xExSZKhAujpm81G13XDMGazmaZpTdNwEEBPz7Ls+Xyqqno6nRBxsVg4jjNU8E0PwxARr9frZDKZTqeWZSmKst1uETGKokEXyLLMGOsaiYi32+1yuZzP5/v93r3Udf2moOvMfD4/Ho9pmuZ5XhRFXdeU0v1+X1VVkiSU0tVq9f7k/XFhYMgQAYD4a0ac608Ip3wB3TqRDOjwiA4AAAAASUVORK5CYII=`,
                            }}
                        />
                    </li>
                </MenuColumn>
            </li>
        </DropdownMenu>
    )
}