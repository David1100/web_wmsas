"use client"
import Link from "next/link";
import { RiArrowDownWideFill } from "react-icons/ri";
import Categories from "@/components/categories"
import { useEffect, useState } from "react";
export default function Home() {

  const [categories,setCategories] = useState([])

  const getCategories = async () => {
    try {
      const response = await fetch('http://192.168.0.55:8080/categories', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const responseData = await response.json();
      console.log(responseData)
      setCategories(responseData)

    } catch (error) {
      // toast.error(`Error al enviar la solicitud:${error}`, {
      //   theme: "dark"
      // });
    }
  }

  useEffect(() => {
    getCategories();
}, []);

  return (
    <main className="">
      <section className="relative w-full h-screen" id="s_1">
        <video
          src="/videos/video_principal.mp4"
          alt="Video principal"
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
        />
        <div className="absolute lg:bottom-1/3 bottom-40 lg:left-36 left-5 lg:max-w-[50rem] max-w-[28rem]">
          <h1 className="lg:text-7xl text-5xl opacity-0 mb-2 animate-show-content  animation-delay-75">Signage &
            Fitouts Contractors</h1>
        </div>

        <Link href="#s_2"><RiArrowDownWideFill className="text-6xl absolute bottom-10 left-1/2 transform -translate-x-1/2 mb-4 cursor-pointer hover:scale-150 transition-all" /></Link>
      </section>
      <section className="py-40 px-2 lg:px-[200px] text-center h-screen" id="s_2">
        <h1 className="text-4xl lg:text-5xl mb-14 font-semibold">About Us</h1>
        <p className="text-base lg:text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error voluptate ea tempora blanditiis similique optio est amet neque? Cum quam id sed ea provident eius porro quia impedit mollitia adipisci.
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, vitae? Nulla mollitia magni eligendi! Rerum ad molestiae, ex facere quam asperiores! Amet voluptate enim modi repellendus accusantium dolore voluptates tempora?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure aliquid maxime officiis totam odit reprehenderit voluptate possimus expedita! Libero reprehenderit nostrum porro eaque amet error recusandae quasi aliquid ullam exercitationem?
        </p>
      </section>
      <section className="py-40 px-2 lg:px-8 text-center" id="s_3">
        <h1 className="text-4xl lg:text-5xl mb-14 font-semibold">Services</h1>
        <div className="grid lg:grid-cols-2 gap-4">
          {categories.map((category) => ( 
            <Categories key={category.idCategory} category={category}></Categories>
          )) }
        </div>
      </section>
    </main>
  );
}
