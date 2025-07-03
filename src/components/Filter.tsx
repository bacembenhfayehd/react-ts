import { Category, Size } from "../types/products";

type FilterProps = {
  selectedCategory: Category | "";
  selectedSize: Size | "";
  onCategoryChange: (c: Category | "") => void;
  onSizeChange: (s: Size | "") => void;
};

const Filter = ({
  selectedCategory,
  selectedSize,
  onCategoryChange,
  onSizeChange,
}: FilterProps) => {
  return (
    <div>
      <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value as Category)}>
        <option value="">Toutes catégories</option>
        {Object.values(Category).map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <select value={selectedSize} onChange={(e) => onSizeChange(e.target.value as Size)}>
        <option value="">Toutes tailles</option>
        {Object.values(Size).map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
