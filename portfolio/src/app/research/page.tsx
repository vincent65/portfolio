"use client";
import Head from 'next/head'
import Layout from '../../components/Layout'
import ExperiencesComponent from '@/components/Experiences';

export default function Research() {
  return (
    <Layout>
      <Head>
        <title>Experiences - Vincent's Portfolio</title>
      </Head>
      {/* <h1 className="text-3xl font-bold mb-4">Experiences</h1> */}
      {/* <p>Here you can list your research projects, publications, or areas of interest.</p> */}
      <ExperiencesComponent></ExperiencesComponent>
    </Layout>
  )
}
