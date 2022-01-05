import React from 'react';
import { useRouter } from 'next/router';
import { PostDetail, Comments, CommentsForm, Loader } from '../../components';
import { getPosts, getPostDetails } from '../../services';

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <div>
        <PostDetail post={post} />
        <div className="page-separator wrapper" />
        <CommentsForm slug={post.slug} />
        <div className="page-separator wrapper" />
        <Comments slug={post.slug} />
      </div>
    </>
  );
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
