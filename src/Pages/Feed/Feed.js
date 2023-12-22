import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import './Feed.css';

const Post = ({ content, media }) => {
  return (
    <div className="post">
      <p>{content}</p>
      {media}
    </div>
  );
};

const FeedPost = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: "image/*,video/*",
    multiple: false,
  });

  const handlePostClick = () => {
    const newPost = {
      content,
      media: renderMedia(),
    };
    setPosts([newPost, ...posts]);
    setContent("");
  };

  const renderMedia = () => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const contentType = file.type;
      const contentUrl = URL.createObjectURL(file);

      if (contentType.startsWith("image")) {
        // Inline styles for the image preview
        return <img className="media-preview" src={contentUrl} alt="Post image" />;
      } else if (contentType.startsWith("video")) {
        // Inline styles for the video preview
        return (
          <video className="media-preview" controls>
            <source src={contentUrl} type={contentType} />
          </video>
        );
      }
    }
    return null;
  };

  return (
    <div className="feed">
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Drag and drop your image or video here, or click to browse</p>
      </div>
      <textarea
        placeholder="Write your post..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="preview-container">
        {renderMedia()}
      </div>
      <button onClick={handlePostClick}>Post</button>
      <div className="feed-posts">
        {posts.map((post, index) => (
          <Post key={index} content={post.content} media={post.media} />
        ))}
      </div>
    </div>
  );
};

export default FeedPost;