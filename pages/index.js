import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import ProjectPostCard from '../components/ProjectPostCard';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Container from '../components/Container';
import BlogPostPreview from '../components/BlogPostPreview';

const name = "Tanner Oakes"

export default function Home({ posts }) {
  return (
    // <Layout home>
      /* <Head>
        <title>{siteTitle}</title>
      </Head> */
      /* <section className={utilStyles.headingMd}>
        <p>Hi, I'm Tanner. I'm a Backend Software Engineer.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
               <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
            </li>
          ))}
        </ul>
        <h2 className={utilStyles.headingLg}>Projects</h2>
      </section> */
    // </Layout>
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row mt-16 items-start">   
            <div className="flex flex-col pr-8">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">{name}</h1>
                <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                    Senior Backend Engineer @ LTK
                </h2>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                    Building out distributed systems so you don't have to.
                </p>
            </div>
            <div className="w-[80px] sm:w-[150px] relative mb-8 sm:mb-0 mr-auto">
                <Image
                alt={name}
                height={175}
                width={175}
                src="/images/profile2.png"
                sizes="30vw"
                priority
                className="rounded-full filter"
                />
            </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 mt-16 text-black dark:text-white">
            Featured Posts
        </h3>
        <div className="flex gap-6 flex-col md:flex-row">
            <ProjectPostCard
              title="A Beginner's Guide to Strings in Go"
              slug="beginners-guide-to-go"
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            <ProjectPostCard
              title="TBD"
              slug="rust"
              gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
            <ProjectPostCard
              title="Also TBD"
              slug="react-state-management"
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            />
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 mt-16 text-black dark:text-white">
            Projects
        </h3>
        <div className="flex gap-6 flex-col md:flex-row">
            {/* <ProjectPostCard
              title="A Beginner's Guide to Strings in Go"
              slug="/"
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            <ProjectPostCard
              title="TBD"
              slug="/"
              gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
            <ProjectPostCard
              title="Also TBD"
              slug="/"
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            /> */}
            {posts.map((post) => {
              return <BlogPostPreview key={post.slug} {...post} />
            })}
        </div>
        {/* <main>{children}</main> */}
        {/* {!home && (
            <div className={styles.backToHome}>
            <Link href="/">
                <a>← Back to home</a>
            </Link>
            </div>
        )} */}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}