import About from "@/components/About";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <main className="w-full mx-auto px-40">
        <Hero />
        <About />
        <Featured />
      </main>
    </Layout>
  );
}
