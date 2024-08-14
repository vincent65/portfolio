"use client";
// pages/honors.js
import Head from 'next/head'
import Layout from '../../components/Layout'
import HonorsComponent from '@/components/Honors'

export default function Honors() {
  return (
    <Layout>
      <Head>
        <title>Honors - Vincent's Portfolio</title>
      </Head>
      {/* <h1 className="text-3xl font-bold mb-4">Honors</h1> */}
      {/* <p>List your awards, scholarships, and other achievements here.</p> */}
      <HonorsComponent></HonorsComponent>
    </Layout>
  )
}