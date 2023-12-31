// Feed.js
import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { firestore, storage } from "./../../firebase";
import { collection, addDoc, getDocs, onSnapshot } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './Feed.css';

const Post = ({ content, media }) => {
  return (
    <div className="post">
      <p>{content}</p>
      {media && media.startsWith('http') ? (
        <img className="media-preview" src={media} alt="Post image" />
      ) : null}
    </div>
  );
};

const FeedPost = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(firestore, 'posts');
      const postsSnapshot = await getDocs(postsCollection);
      const postsData = postsSnapshot.docs.map(doc => doc.data());
      setPosts(postsData);
    };

    const unsubscribe = onSnapshot(collection(firestore, 'posts'), (snapshot) => {
      const postsData = snapshot.docs.map(doc => doc.data());
      setPosts(postsData);
    });

    return () => unsubscribe();
  }, []);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: "image/*,video/*",
    multiple: false,
  });

  const handlePostClick = async () => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const storageRef = ref(storage, `images/${file.name}`);

      // Upload the file to Firebase Storage
      await uploadBytes(storageRef, file);

      // Get the download URL of the uploaded file
      const downloadURL = await getDownloadURL(storageRef);

      // Add a new post with the image URL to Firestore
      const postsCollection = collection(firestore, 'posts');
      await addDoc(postsCollection, { content, mediaUrl: downloadURL });

      setContent("");
    }
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
        {acceptedFiles.length > 0 && (
          <img className="media-preview" src={URL.createObjectURL(acceptedFiles[0])} alt="Post image" />
        )}
      </div>
      <button onClick={handlePostClick}>Post</button>
      <div className="feed-posts">
        {posts.map((post, index) => (
          <Post key={index} content={post.content} media={post.mediaUrl} />
        ))}
      </div>
    </div>
  );
};

export default FeedPost;
