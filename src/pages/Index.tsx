import { useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { CategoryFilter } from '@/components/CategoryFilter';
import { products } from '@/data/products';
import heroImage from '@/assets/hero-shopping.jpg';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  const handleProductClick = (productId: string) => {
    // TODO: Navigate to product detail page
    console.log('Product clicked:', productId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={() => {}} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Discover Your{' '}
                  <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient">
                    Perfect Style
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Shop the latest trends with our curated collection of premium fashion, 
                  accessories, and lifestyle products.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-border/50">
                  View Collections
                </Button>
              </div>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">
                    4.8 (2.4k reviews)
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Free shipping on orders over $100
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-secondary rounded-3xl transform rotate-3"></div>
              <img
                src={heroImage}
                alt="Shopping Collection"
                className="relative rounded-3xl shadow-lg w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl lg:text-4xl font-bold">Featured Products</h2>
              <p className="text-muted-foreground">
                Handpicked items from our premium collection
              </p>
            </div>
            
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => handleProductClick(product.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Start Shopping?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of satisfied customers and discover your new favorite products today.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
              Browse All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;