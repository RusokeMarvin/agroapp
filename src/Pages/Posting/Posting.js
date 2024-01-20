import React from 'react'

function Posting() {
    const Post = ({ content, media }) => {
        return (
          <div className="post" data-aos="zoom-in">
            <p>{content}</p>
            {media && media.startsWith('http') ? (
              <img className="media-preview" src={media} alt="Post image" />
            ) : null}
          </div>
        );
      };
      
  return (
    <div>Posting</div>
  )
}

export default Posting