import About from "@/components/About";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Project from "@/components/Project";

export default function Home() {
  return (
    <Layout>
      <main className="w-full mx-auto px-40 overflow-y-auto">
        <Hero />
        <About />
        <Project />
      </main>
    </Layout>
  );
}
