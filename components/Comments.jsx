import React, { useEffect, useState } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

import { getComments } from '../services';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="comments">
          <div className="wrapper">
            {comments.map((comment, index) => (
              <div key={index} className="comment">
                <div className="comment-header">
                  <p> {moment(comment.createdAt).format('MMM DD, YYYY')}</p>
                  <h2>{comment.name}</h2>
                </div>
                <p className="comment_text">{parse(comment.comment)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Comments;
