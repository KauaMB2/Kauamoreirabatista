import React, { useState } from 'react';
import { commentsData } from "./JSON/commentsData";

export const Comments = () => {
  const [open, setOpen] = useState(false);
  const initialComments = open ? commentsData : [commentsData[0]];
  return (
    <section id='feedbacks' className="comments">
      <div className='container'>
      <h2>Feedbacks</h2>
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
              
              <div className="comment-box">
                <div className="comment-head">
                  <a target='__blank' href={comment.link} className="comment-avatar">
                    <img src={comment.avatar} alt={comment.name} />
                  </a>
                  <h6 className="comment-name"><a target='__blank' href={comment.link}>{comment.name} - @{comment.arrouba}</a></h6>
                </div>
                <div className="comment-content">{comment.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
