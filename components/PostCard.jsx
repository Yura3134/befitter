import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => (

  <div className="card">
    <div className="card__header">
      <time>{moment(post.createdAt).format('MMM DD, YYYY')}</time>
      <Link href={`/post/${post.slug}`}>{post.author.name}</Link>
    </div>
    <img className="card__image" width="365" height="197" src={post.featuredImage.url} />
    <h3 className="card__title"> <Link href={`/post/${post.slug}`}>{post.title}</Link></h3>
    <p className="card__text">
      {post.excerpt}
    </p>
    <div className="card__link button"><Link href={`/post/${post.slug}`}>More</Link></div>
  </div>

);

export default PostCard;
