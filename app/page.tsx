import About from "@/components/About";
import Contact from "@/components/Contact";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <main className="w-full mx-auto px-6 lg:px-40 overflow-x-hidden">
        <Hero />
        <About />
        <Featured />
        <Contact />
      </main>
    </Layout>
  );
}
