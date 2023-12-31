// Gallery.js
import React, { useState, useEffect } from 'react';
import { firestore } from './../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import './Gallery.css';
import Header from '../../Components/Header/Header';

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const postsCollection = collection(firestore, 'posts');
      const postsSnapshot = await getDocs(postsCollection);
      const postsData = postsSnapshot.docs.map(doc => doc.data());
      setImages(postsData.map(post => post.mediaUrl));
    };

    fetchImages();
  }, []);

  return (
    <div >
        <Header/>
        <div className="gallery">
        {images.map((imageUrl, index) => (
        <div key={index} className="gallery-item">
          <img src={imageUrl} alt={`Image ${index}`} />
        </div>
      ))}
        </div>

    </div>
  );
}

export default Gallery;
