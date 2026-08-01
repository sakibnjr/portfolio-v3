import About from "@/app/_pages/_sections/About";
import Achievements from "@/app/_pages/_sections/Achievements";
import Certifications from "@/app/_pages/_sections/Certifications";
import Education from "@/app/_pages/_sections/Education";
import Experience from "@/app/_pages/_sections/Experience";
import Hero from "@/app/_pages/_sections/Hero";
import Project from "@/app/_pages/_sections/Project";

export default function Home() {
  return <main className="space-y-20">

    <Hero/>

    <About/>

    <Education/>

    <Certifications/>

    <Achievements/>

    <Project/>

    <Experience/>

        <section id="skills" >

            <header className="mb-20">

                <p className="uppercase tracking-widest text-blue-600">
                    Skills
                </p>

                <h2 className="text-5xl font-bold mt-4">
                    What I Use
                </h2>

            </header>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                <div className="border rounded-3xl h-44"></div>

                <div className="border rounded-3xl h-44"></div>

                <div className="border rounded-3xl h-44"></div>

                <div className="border rounded-3xl h-44"></div>

            </div>

        </section>


        <section id="stack" >

            <header className="mb-20">

                <p className="uppercase tracking-widest text-blue-600">
                    Stack
                </p>

                <h2 className="text-5xl font-bold mt-4">
                    Favorite Technologies
                </h2>

            </header>

            <div className="border rounded-3xl h-48"></div>

        </section>

        <section id="blog" >

            <header className="mb-20">

                <p className="uppercase tracking-widest text-blue-600">
                    Writing
                </p>

                <h2 className="text-5xl font-bold mt-4">
                    Latest Articles
                </h2>

            </header>

            <div className="grid lg:grid-cols-3 gap-8">

                <article className="rounded-3xl border h-96"></article>

                <article className="rounded-3xl border h-96"></article>

                <article className="rounded-3xl border h-96"></article>

            </div>

        </section>


        <section id="contact" className="pb-20">

            <div className="max-w-4xl mx-auto text-center">

                <p className="uppercase tracking-widest text-blue-600">
                    Contact
                </p>

                <h2 className="text-6xl font-bold mt-6">
                    Let&apos;s Build Something Amazing.
                </h2>

                <p className="mt-8 text-xl text-gray-600">
                    Have a project in mind? I&apos;d love to hear about it.
                </p>

                <button
                    className="mt-12 bg-blue-600 text-white rounded-full px-10 py-5">

                    Get In Touch

                </button>

            </div>

        </section>

    </main>
}

