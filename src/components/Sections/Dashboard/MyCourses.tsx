import { H2 } from "@components/atoms";

export default function MyCourses() {
    return (
        <section className="mt-12">
            <H2>
                My Courses
            </H2>

            <div className="mt-6">
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th>Course name</th>
                            <th>Started</th>
                            <th>Progress</th>
                            <th>Diffeculity</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td>May 12</td>
                            <td>10%</td>
                            <td>Beginner</td>
                        </tr>
                        <tr>
                            <td>Witchy Woman</td>
                            <td>April 1</td>
                            <td>69%</td>
                            <td>Intermediate</td>
                        </tr>
                        <tr>
                            <td>Shining Star</td>
                            <td>December 6</td>
                            <td>75%</td>
                            <td>Advanced</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}