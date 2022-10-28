import { DropdownMenu } from '../Dropdown/DropdownMenu';
import { MenuLink } from '../Dropdown/MenuLink';
import { MenuSidebarLink } from '../Dropdown/MenuSidebarLink';
import { MenuColumn } from '../Dropdown/MenuColumn';
import {
    Paper,
    Flow,
    UIExtensions,
    Management,
    Stack,
    Showcase,
    Community,
    Hygraph,
} from './icons';

type TutorialsProps = {
    className?: string;
};

export default function Tutorials({ className }: TutorialsProps) {
    return (
        <DropdownMenu className={className}>
            <li>
                <MenuColumn title="Developer Resources">
                    <li>
                        <MenuLink
                            href="/docs"
                            title="Documentation"
                            subTitle="Hygraph API Reference"
                            icon={Paper}
                        />
                    </li>
                    <li>
                        <MenuLink
                            href="/docs/guides"
                            title="User Guides"
                            subTitle="For project managers and content editors"
                            icon={Flow}
                        />
                    </li>
                    <li>
                        <MenuLink
                            href="/marketplace"
                            title="Marketplace"
                            subTitle="Discover starters, apps, and more"
                            icon={UIExtensions}
                        />
                    </li>
                    <li>
                        <MenuLink
                            href="https://github.com/hygraph/management-sdk"
                            title="Management SDK"
                            subTitle="Programmatically manage Hygraph projects"
                            icon={Management}
                        />
                    </li>
                </MenuColumn>
            </li>

            <li>
                <MenuColumn>
                    <li>
                        <MenuLink
                            href="https://github.com/hygraph/hygraph-examples"
                            title="Code Examples"
                            subTitle="Quickstarts to get you going"
                            icon={Stack}
                        />
                    </li>
                    <li>
                        <MenuLink
                            href="/showcase"
                            title="Showcase"
                            subTitle="See what others are building"
                            icon={Showcase}
                        />
                    </li>
                    <li>
                        <MenuLink
                            href="/community"
                            title="Community"
                            subTitle="Come, join us!"
                            icon={Community}
                        />
                    </li>
                    <li>
                        <MenuLink
                            href="https://www.youtube.com/playlist?list=PL5SvzogSTpeFSjhoWcXLDjuN2EYli78xd"
                            title="How to Hygraph"
                            subTitle="Quick videos to get you up and running"
                            icon={Hygraph}
                        />
                    </li>
                </MenuColumn>
            </li>

            <li>
                <MenuColumn title={null} isSidebar={true}>
                    <li>
                        <MenuSidebarLink
                            href="https://app.hygraph.com/signup"
                            label="Get started"
                            image={{
                                src: `/images/signup.svg`,
                                blurDataURL: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVQImQEnANj/AAAAWGhhn3Fqpj47hgAAD2n9/f/////HxNwAAABdhX+wnZe/bGWhRpgSjBAxC0kAAAAASUVORK5CYII=`,
                            }}
                            title="Create a free-forever developer account"
                        />
                    </li>
                    <li>
                        <MenuSidebarLink
                            href="/blog/forms-and-submissions-with-nextjs-and-graphql"
                            label="Blog"
                            image={{
                                src: `/images/forms-nextjs.svg`,
                                blurDataURL: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVQImWMwZVCyY9AyZVAyZVBiyGII+n/1fwN/ehyDB4MPg0UMg2sMg6sPgwUAplcI4w2mDskAAAAASUVORK5CYII=`,
                            }}
                            title="Programmatic forms with Next.js and Hygraph"
                        />
                    </li>
                </MenuColumn>
            </li>
        </DropdownMenu>
    )
}