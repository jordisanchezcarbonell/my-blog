import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import { getDictionary } from 'get-dictionary'
import { Locale, i18n } from 'i18n-config'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function Page({ params }: { params: { lang: Locale } }) {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return (
    <Main
      posts={posts}
      params={{
        lang: params.lang,
      }}
    />
  )
}
