import { ContentLink } from "./ContentLink";

export default function BlogPostPreview(post) {
  // const { enabled, intersectionRef } = useEnabledOnFirstIntersection()

  return (
    <div>
      {/* <ContentLink key={post.slug} href={`/blog/${post.slug}`}> */}
      <ContentLink
        key={post.slug}
        href={post.link}
      >
        <ContentLink.Title>{post.title}</ContentLink.Title>

        <ContentLink.Meta>
          <div>{post.publishedAtFormatted}</div>
          {/* {enabled ? <Metrics slug={post.slug} /> : null} */}
        </ContentLink.Meta>

        {post.description ? (
          <ContentLink.Text>{post.description}</ContentLink.Text>
        ) : null}
      </ContentLink>
    </div>
  );
}
