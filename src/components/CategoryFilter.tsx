import { Button } from '@/components/ui/button';
import { categories } from '@/data/products';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <Button
        variant={selectedCategory === null ? "default" : "secondary"}
        size="sm"
        onClick={() => onCategoryChange(null)}
        className="whitespace-nowrap"
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "secondary"}
          size="sm"
          onClick={() => onCategoryChange(category.id)}
          className="whitespace-nowrap"
        >
          <span className="mr-2">{category.icon}</span>
          {category.name}
        </Button>
      ))}
    </div>
  );
};