import { H1, H2 } from "@components/atoms";

export default function Overview() {
    return (
        <section>
            <H2>
                Overview
            </H2>

            <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                <OverviewItem
                    title="Courses in Progress"
                    count={18} />

                <OverviewItem
                    title="Courses Completed"
                    count={97} />

                <OverviewItem
                    title="Certificates Earned"
                    count={62} />

                <OverviewItem
                    title="Drank coffee"
                    count={69} />
            </div>
        </section>
    )
}

interface OverviewItemProps {
    title: string;
    count: number;
}

function OverviewItem({ title, count }: OverviewItemProps) {
    return (
        <div className="rounded-lg shadow-lg bg-gray-800 py-6 px-8 flex flex-col justify-between">
            <div>
                {title}
            </div>

            <div>
                <div className="inline-block">
                    <H1>
                        {count}
                    </H1>

                    <div className="mt-2 border-primary-500 border-2" />
                </div>
            </div>
        </div>
    )
}