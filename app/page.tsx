import About from "@/components/About";
import Contact from "@/components/Contact";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <main className="w-full mx-auto px-6 md:px-24 lg:px-40 overflow-x-hidden min-h-screen overflow-y-hidden">
        <Hero />
        <About />
        <Featured />
        <Contact />
      </main>
    </Layout>
  );
}
