"use client"
import Head from 'next/head'
import Layout from '../../components/Layout'
import ProjectsSection from '@/components/Projects'

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects - Vincent's Portfolio</title>
      </Head>
      {/* <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <p>Showcase your personal or academic projects here.</p> */}
      {/* Add your projects content here */}
      <ProjectsSection></ProjectsSection>
    </Layout>
  )
}