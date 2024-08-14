"use client";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import avatarIMG from "./images/avatar.jpg"
import Layout from "@/components/Layout";
import ContactMe from "@/components/ContactMe";
import { keyframes } from "styled-components";


export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Vincent's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     

      <main className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 py-16 ">
        <div className="w-64 h-64 relative opacity-0 animate-fade-in">
          <Image
            src={avatarIMG}
            alt="Vincent's avatar"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            // width={1000}
            // height={500}
          />
        </div>

        <div className="text-center md:text-left opacity-0 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 relative w-[max-content] font-mono
before:absolute before:inset-0 before:animate-typewriter
before:bg-gray-900 
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
after:bg-white ">Hello, I'm Vincent</h1>
          <p className="mb-2 font-mono animate-fade-in">CS @ Stanford | SWE @ Tarsadia Capital | SWE @ King of the Curve</p>
          <p className="mb-4  font-mono animate-fade-in">I'm a rising freshman planning to study computer science <br></br> and electrical engineering at Stanford</p>
        
          <div className="space-x-4">
            <a href="https://www.linkedin.com/in/vincent-yip-b5b78a259" className="relative inline-block text-lg group">
<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-900 group-hover:-rotate-180 ease"></span>
<span className="relative">linkedin</span>
</span>
<span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
  
  <a href="https://github.com/vincent65" className="relative inline-block text-lg group">
<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-red-500 group-hover:-rotate-180 ease"></span>
<span className="relative">github</span>
</span>
<span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
         
          </div>
        </div>
      </main>

       <div>

      <ContactMe/>
    </div>

    </Layout>
  );
}
