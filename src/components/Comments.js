import { useState } from 'react';
import { commentsData } from "./JSON/commentsData";
import { useTranslation } from 'react-i18next';

export const Comments = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const initialComments = open ? commentsData : [commentsData[0], commentsData[1], commentsData[2]];
  return (
    <section id='feedbacks' className="comments">
      <div className='container'>
      <h2>{t('feedbacks.title')}</h2>
      <div className={`comments-container ${open ? 'slide-down' : 'slide-up'}`}>
        <div className="comments-grid">
          {initialComments.map((comment, index) => (
            <div key={index} className="comment-main-level">
              <div className="comment-box">
                <div className="comment-head">
                  <a target='_blank' href={comment.link} className="comment-avatar">
                    <img src={comment.avatar} alt={t(`feedbacks.comments.${comment.id}.name`)} />
                  </a>
                  <h6 className="comment-name">
                    <a target='_blank' href={comment.link}>
                      {t(`feedbacks.comments.${comment.id}.name`)} - @{comment.arrouba}
                    </a>
                  </h6>
                </div>
                <div className="comment-content">
                  {t(`feedbacks.comments.${comment.id}.content`)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="comments-collapse-div-button">
          <button
            className="gradient-button"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            {open ? t('feedbacks.showLess') : t('feedbacks.showMore')}
          </button>
        </div>
      </div>
      </div>
    </section>
  )
}
