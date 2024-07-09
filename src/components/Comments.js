import React, { useState } from 'react';
import { commentsData } from "./JSON/commentsData";

export const Comments = () => {
  const [open, setOpen] = useState(false);
  const initialComments = open ? commentsData : [commentsData[0]];
  return (
    <div className="comments">
      <h2>Relatos</h2>
      <div className="comments-collapse-div-button">
        <button
          className="gradient-button"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          {open ? 'Mostrar menos' : 'Mostrar todos'}
        </button>
      </div>
      <div className={`comments-container ${open ? 'slide-down' : 'slide-up'}`}>
        <div className="comments-grid">
          {initialComments.map((comment, index) => (
            <div key={index} className="comment-main-level">
              <div className="comment-avatar">
                <img src={comment.avatar} alt={comment.name} />
              </div>
              <div className="comment-box">
                <div className="comment-head">
                  <h6 className="comment-name"><a href="#">{comment.name}</a></h6>
                </div>
                <div className="comment-content">{comment.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
