import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import NewProduct from "@/components/NewProduct";
import Premium from "@/components/Premium";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Categories />
      <NewProduct />
      <Premium />
      <Testimonials />
    </main>
  );
}
