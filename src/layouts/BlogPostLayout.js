import { Widont } from '@/components/home/common'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '@/utils/mdxComponents'
import clsx from 'clsx'
import { NewsletterForm } from '@/components/NewsletterForm'
import { Button } from '@/components/Button'
import { formatDate } from '@/utils/formatDate'
import { ReactComponent as LinkedinShare } from '@/img/share/linkedin.svg'
import { ReactComponent as RedditShare } from '@/img/share/reddit.svg'
import { ReactComponent as TwitterShare } from '@/img/share/twitter.svg'
import { useEffect, useState } from 'react'

export function BlogPostLayout({ children, meta, slug, latestPosts }) {
  const title = encodeURIComponent(meta.title)
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  return (
    <div className="overflow-hidden relative">
      <div className="max-w-8xl mx-auto">
        <div className="flex px-4 pt-8 pb-10 lg:px-8">
          <Link href="/blog">
            <a className="group flex font-semibold text-sm leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">
              <svg
                viewBox="0 -9 3 24"
                className="overflow-visible mr-3 text-slate-400 w-auto h-6 group-hover:text-slate-600 dark:group-hover:text-slate-300"
              >
                <path
                  d="M3 0L0 3L3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Go back
            </a>
          </Link>
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-8">
        <div className="relative max-w-3xl mx-auto pb-28">
          <aside
            className="fixed top-1/3 hidden lg:block z-50"
            style={{ left: 'calc(50% - 472px)' }}
            id="share"
            aria-label="Share this article."
          >
            <ul>
              <li className="cursor-pointer">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="text-grayBlue-02 hover:text-[#1DA1F2] transition duration-200 ease-in-out"
                  href={`https://twitter.com/share?url=${url}&text=${title}&via=illafamily`}
                >
                  <TwitterShare />
                </a>
              </li>
              <li className="cursor-pointer my-5">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="text-grayBlue-02 hover:text-[#FF4500] transition duration-200 ease-in-out"
                  href={`http://www.reddit.com/submit?url=${url}&title=${title}`}
                >
                  <RedditShare />
                </a>
              </li>
              <li className="cursor-pointer my-5">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="text-grayBlue-02 hover:text-[#0077B5] transition duration-200 ease-in-out"
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`}
                >
                  <LinkedinShare />
                </a>
              </li>
            </ul>
          </aside>
          <main>
            <article className="relative pt-10">
              <Metadata meta={meta} />
              <h1
                className={clsx(
                  'text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl',
                )}
              >
                <Widont>{meta.title}</Widont>
              </h1>
              <div className="text-sm leading-6">
                <dl>
                  <dt className="sr-only">Date</dt>
                  <dd
                    className={clsx(
                      'absolute top-0 inset-x-0 text-slate-700 dark:text-slate-400',
                    )}
                  >
                    <time dateTime={meta.date}>
                      {formatDate(meta.date, '{dddd}, {MMMM} {DD}, {YYYY}')}
                    </time>
                  </dd>
                </dl>
              </div>
              <div className="mt-6">
                <ul
                  className={clsx(
                    'flex flex-wrap text-sm leading-6 -mt-6 -mx-5',
                  )}
                >
                  {meta.authors.map((author) => (
                    <li
                      key={author.twitter}
                      className="flex items-center font-medium whitespace-nowrap px-5 mt-6"
                    >
                      <img
                        src={author.avatar}
                        alt=""
                        className="mr-3 w-9 h-9 rounded-full bg-slate-50 dark:bg-slate-800"
                      />
                      <div className="text-sm leading-4">
                        <div className="text-slate-900 dark:text-slate-200">
                          {author.name}
                        </div>
                        <div className="mt-1">
                          <a
                            href={`https://twitter.com/${author.twitter}`}
                            className="text-sky-500 hover:text-sky-600 dark:text-sky-400"
                          >
                            @{author.twitter}
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <aside
                className="flex flex-row mt-6 lg:hidden mb-5"
                id="share"
                aria-label="Share this article."
              >
                <ul className="flex flex-row">
                  <li className="cursor-pointer">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="cursor-pointer text-[#1DA1F2]"
                      href={`https://twitter.com/share?url=${url}&text=${title}&via=illafamily`}
                    >
                      <TwitterShare />
                    </a>
                  </li>
                  <li className="cursor-pointer ml-5">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="text-[#FF4500]"
                      href={`http://www.reddit.com/submit?url=${url}&title=${title}`}
                    >
                      <RedditShare />
                    </a>
                  </li>
                  <li className="cursor-pointer ml-5">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="text-[#0077B5]"
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`}
                    >
                      <LinkedinShare />
                    </a>
                  </li>
                </ul>
              </aside>
              <div
                className={clsx('md:mt-12 prose prose-slate dark:prose-dark')}
              >
                <MDXProvider components={mdxComponents}>{children}</MDXProvider>
              </div>
            </article>
          </main>
          <footer className="mt-16">
            <div className="relative">
              <img
                src={require('@/img/beams/blog-post-form@80.jpg').default}
                alt=""
                className="absolute top-px sm:left-auto sm:right-0 left-1/4 dark:hidden max-w-none"
                width="476"
              />
              <img
                src={require('@/img/beams/blog-post-form-dark@90.jpg').default}
                alt=""
                className="absolute top-px -left-1/4 sm:left-0 hidden dark:block max-w-none"
                width="1429"
              />
              {/*<section className="relative py-16 border-t border-slate-200 dark:border-slate-200/5">*/}
              {/*  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">*/}
              {/*    Get all of our updates directly to your&nbsp;inbox.*/}
              {/*    <br />*/}
              {/*    Sign up for our newsletter.*/}
              {/*  </h2>*/}
              {/*  <div className="mt-5 max-w-md">*/}
              {/*    <NewsletterForm action="https://app.convertkit.com/forms/3286143/subscriptions" />*/}
              {/*  </div>*/}
              {/*</section>*/}
              {latestPosts && (
                <section className="relative pt-16 border-t border-slate-200 dark:border-slate-200/5">
                  <h2 className="mb-6 font-semibold text-slate-900 dark:text-slate-200">
                    Latest articles
                  </h2>
                  <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
                    {latestPosts
                      .filter((post) => post.slug !== slug)
                      .slice(0, 2)
                      .map((post) => (
                        <article
                          key={post.slug}
                          className="flex flex-col items-start"
                        >
                          <h3 className="order-1 text-lg text-slate-900 font-semibold dark:text-slate-200">
                            <Link href={`/blog/${post.slug}`}>
                              <a>{post.title}</a>
                            </Link>
                          </h3>
                          <time
                            dateTime={post.date}
                            className="text-sm leading-7 dark:text-slate-400"
                          >
                            {formatDate(post.date, '{MMMM} {DD}, {YYYY}')}
                          </time>
                          <Button
                            href={`/blog/${post.slug}`}
                            className="order-1 mt-6"
                          >
                            Read more
                            <span className="sr-only">, {post.title}</span>
                          </Button>
                        </article>
                      ))}
                  </div>
                </section>
              )}
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

function Metadata({ meta }) {
  let router = useRouter()
  return (
    <Head>
      <title>{meta.title} – ILLA</title>
      <meta
        key="og:url"
        property="og:url"
        content={`https://illa.cloud.com${router.pathname}`}
      />
      <meta key="og:type" property="og:type" content="article" />
      <meta
        key="og:title"
        property="og:title"
        content={`${meta.title} – ILLA`}
      />
      <meta
        key="og:image"
        name="image"
        property="og:image"
        content={`https://illa.cloud${meta.image}`}
      />

      <meta
        key="og:description"
        name="description"
        property="og:description"
        content={meta.description}
      />

      <meta name="description" content={meta.description}></meta>
      {meta.keywords ? (
        <meta name="keywords" content={meta.keywords?.toString()}></meta>
      ) : null}

      <meta name="twitter:site" content="@illaCloud" />
      <meta name="twitter:creator" content="@illaCloud" />
      <meta name="twitter:title" content={`${meta.title} – ILLA`} />
      <meta name="twitter:description" content={meta.description} />
      {meta.image ? (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content={`https://illa.cloud${meta.image}`}
          />
        </>
      ) : (
        <>
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:image"
            content={`https://illa.cloud${
              require('@/img/social-square.jpg').default
            }`}
          />
        </>
      )}
    </Head>
  )
}
