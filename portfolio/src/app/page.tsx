"use client";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import avatarIMG from "./avatar.jpg"
import Layout from "@/components/Layout";
import ContactMe from "@/components/ContactMe";

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Vincent's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     

      <main className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 py-16">
        <div className="w-64 h-64 relative">
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
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Hello, I'm Vincent</h1>
          <p className="mb-2">CS @ Stanford | SWE @ Tarsadia Capital | SWE @ King of the Curve</p>
          <p className="mb-4">I'm a rising freshman planning to study computer science and electrical engineering at Stanford</p>

          <div className="space-x-4">
            <a href="https://www.linkedin.com/in/vincent-yip-b5b78a259/" className="px-4 py-2 border border-white rounded">linkedin</a>
            <a href="https://github.com/vincent65" className="px-4 py-2 bg-white text-gray-900 rounded">github</a>
          </div>
        </div>
      </main>

       <div>

      <ContactMe />
    </div>

    </Layout>
  );
}
