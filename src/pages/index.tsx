import DefaultLayout from "@components/Layouts/Default";
import { Features, Hero, StudentsWork } from "@components/Sections/Home";

export default function Home() {
  return (
    <DefaultLayout showStartLearningBanner>
      <main>
        <Hero />
        <Features />
        <StudentsWork />
      </main>
    </DefaultLayout>
  )
}