import About from "@/components/About";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <main className="w-full mx-auto px-40 overflow-y-auto">
        <Hero />
        <About />
      </main>
    </Layout>
  );
}
