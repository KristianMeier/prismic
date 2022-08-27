import Head from 'next/head'
import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient, linkResolver } from '../prismicio'
import { components } from '../slices'
import MinNavbar from '../Compenents/Navbar'

const Page = ({ page }) => {
  return (
    <main>
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
      </Head>
      <MinNavbar />
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  )
}

export default Page

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const uid = params.path?.[params.path.length - 1] || 'home'
  const page = await client.getByUID('page', uid)

  return {
    props: {
      page,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('page')

  return {
    paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
    fallback: false,
  }
}
