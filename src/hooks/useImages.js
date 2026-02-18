import { useState, useEffect } from 'react';
import { fetchImages } from '../api/cloudinary';

export const useImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState(['All']);

  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true);
        const data = await fetchImages();
        setImages(data);
        
        // Categories extract karo
        const cats = ['All', ...new Set(data.map(img => img.category))];
        setCategories(cats);
        
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadImages();
  }, []); // Empty array = sirf ek baar load hoga

  return { images, loading, error, categories };
};