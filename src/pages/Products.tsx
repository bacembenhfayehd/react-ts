import React, { useEffect, useState } from "react";
import { Category, Size, type Product } from "../types/products";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | "">("");
  const [selectedSize, setSelectedSize] = useState<Size | "">("");

  useEffect(() => {
    fetch("/src/data/products.json")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data));
  }, []);

  const filtred = products.filter((p) => {
    const categoryMatch = selectedCategory
      ? p.category === selectedCategory
      : true;
    const sizeMatch = selectedSize
      ? p.availableSizes.includes(selectedSize)
      : true;
    return categoryMatch && sizeMatch;
  });

  return (
    <div>
      <Filter
        selectedCategory={selectedCategory}
        selectedSize={selectedSize}
        onCategoryChange={setSelectedCategory}
        onSizeChange={setSelectedSize}
      />

      <div className="grid">
        {filtred.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Products;
