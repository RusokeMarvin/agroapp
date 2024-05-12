import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { firestore, storage } from "./../../firebase";
import { collection, addDoc, getDocs, onSnapshot } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './Feed.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import irrigation from './../../Images/irrigation.jpg'
import maize from './../../Images/maize.jpg'
import goats from './../../Images/goats.jpg'


const generateTitle = (content) => {
  // Split content into words
  const words = content.split(' ');

  // Determine the number of words to include in the title
  const titleLength = Math.min(5, words.length);

  // Join the first few words to form the title
  const title = words.slice(0, titleLength).join(' ');

  return title;
};

const Post = ({ content, media }) => {
  const title = generateTitle(content);
  return (
    <div className="post" data-aos="slide-up">
      {media && media.startsWith('http') ? (
        <img className="media-preview" src={media} alt="Post image" />
      ) : null}
         <h3>{title + '.....'}</h3>
      <p>{content}</p>
    </div>
  );
};

const FeedPost = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollection = collection(firestore, 'posts');
        const postsSnapshot = await getDocs(postsCollection);
        const postsData = postsSnapshot.docs.map(doc => doc.data());
        setPosts(postsData);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    const unsubscribe = onSnapshot(collection(firestore, 'posts'), (snapshot) => {
      const postsData = snapshot.docs.map(doc => doc.data());
      setPosts(postsData);
      setLoading(false); // Set loading to false once data is fetched
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

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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
           className="none"/>
          <div className="preview-container">
            {acceptedFiles.length > 0 && (
              <img className="media-preview" src={URL.createObjectURL(acceptedFiles[0])} alt="Post image" />
            )}
          </div>
          <button onClick={handlePostClick} className="none">Post</button>
          <div className="post">
        <img className="media-preview" src={maize} alt="Post image" />
         <h3>Sustainable Farming</h3>
         <p>Rooted in Success: Cultivating Prosperity Through Sustainable Plantations. 🌱 Embrace the journey of growth and discover the best agricultural practices to elevate your small-scale farming business. #AgroSuccess #FarmersFirst #SustainableFarming</p>
        </div>
        <div className="post">
        <img className="media-preview" src={irrigation} alt="Post image" />
         <h3>Smart Irrigation</h3>
          <p>Nurturing Growth Drop by Drop: Mastering the Art of Efficient Irrigation. 💧 Dive into the world of smart watering practices and empower your small-scale farm with the key to bountiful harvests. #IrrigateSmart #FarmersGrowth #SustainableAgro</p>
        </div>
        <div className="post">
        <img className="media-preview" src={goats} alt="Post image" />
         <h3>Sustainable Livestock</h3>
          <p>Nurturing Excellence: Unveiling the Art of Successful Goat Farming. 🐐🌿 Explore the world of sustainable practices, expert care, and successful projects as we delve into the nuances of goat farming. Join us on this journey of growth, where every bleat leads to prosperity. #GoatFarmingMastery #SustainableLivestock #FarmersSuccess</p>
        </div>
          <div className="feed-posts">
            {posts.map((post, index) => (
              <Post key={index} content={post.content} media={post.mediaUrl} />
            ))}
          </div>
    </div>
  );
};

export default FeedPost;
