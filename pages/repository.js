import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSeo } from '@/components/SEO'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('repository')

  return { props: { posts } }
}

export default function Repository({ posts }) {
  return (
    <>
      <PageSeo
        title={`Repository - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/repository`}
      />
      <ListLayout posts={posts} title="All Posts" />
    </>
  )
}
