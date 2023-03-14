import fs from 'fs'
import ReactDOMServer from 'react-dom/server'
import { MDXProvider } from '@mdx-js/react'
import { Feed } from 'feed'
import { getAllPosts } from '@/utils/getAllPosts'
import { mdxComponents } from '@/utils/mdxComponents'

const baseUrl = 'https://illa.cloud'
const blogUrl = `${baseUrl}/blog`

const feed = new Feed({
  title: 'ILLA Blog',
  description: 'All the latest ILLA news, straight from the team.',
  id: blogUrl,
  link: blogUrl,
  language: 'en',
  image: `${baseUrl}/favicons/favicon-32x32.png?v=3`,
  favicon: `${baseUrl}/favicons/favicon.ico?v=3`,
  copyright: `All rights reserved ${new Date().getFullYear()}, Tailwind Labs`,
  feedLinks: {
    rss: `${baseUrl}/feeds/feed.xml`,
    json: `${baseUrl}/feeds/feed.json`,
    atom: `${baseUrl}/feeds/atom.xml`,
  },
  author: {
    name: 'Adam Wathan',
    link: 'https://twitter.com/@adamwathan',
  },
})

fs.mkdirSync('./public/feeds', { recursive: true })
fs.writeFileSync('./public/feeds/feed.xml', feed.rss2())
fs.writeFileSync('./public/feeds/atom.xml', feed.atom1())
fs.writeFileSync('./public/feeds/feed.json', feed.json1())
