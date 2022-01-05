import { PostCard } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <div>
      <section className="hero">
        <div className="wrapper">
          <h1>BEFITTER</h1>
          <h2 className="subtitle">cosmetic & skin care product reviews</h2>
        </div>
        <a href="#article" className="hero__scroll-down">scroll down</a>
      </section>
      <section className="articles" id="article">
        <div className="wrapper">
          <h2 className="articles__header underline-center">Articles</h2>
          <div className="post-grid">
            {posts.map((post, index) => (<PostCard key={index} post={post.node} />))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

