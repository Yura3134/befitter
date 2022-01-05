import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      {categories.map((title) => (
        <span>{title.name}</span>
      ))}
    </div>
  );
};

export default Categories;
