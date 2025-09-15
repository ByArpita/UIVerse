import React from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';

interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <Card className="w-80">
      <img src={imageSrc} alt={imageAlt} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3" title={description}>{description}</p>
        <Button onClick={onButtonClick} className="w-full">
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
