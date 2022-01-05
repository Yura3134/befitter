import React from 'react';
import moment from 'moment';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div>
        <div className="article-wrapper">
          <div className="article" id="article">
            <div className="wrapper">
              <div className="article_header">
                <time className="article_header__time">{moment(post.createdAt).format('MMM DD, YYYY')}</time>
                <p className="article_header__tag">{post.author.name}</p>
              </div>
              <h1>{post.title}</h1>
              <img className="article__hero-image" width="1189" height="643" src={post.featuredImage.url} alt="article" />
              <div className="aricle-splitter">
                <div className="article-splitter_line" />
              </div>
              {post.content.raw.children.map((typeObj, index) => {
                const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));
                return getContentFragment(index, children, typeObj, typeObj.type);
              })}
              <a href="#article" aria-label="to top of the page" className="footer_up">
                <img width="64" height="64" src="../../img/footer_up.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
