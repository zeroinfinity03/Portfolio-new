
import React from 'react';

interface FullWidthImageProps {
  imageSrc: string;
  fallbackImageSrc: string;
  imageAlt: string;
  height?: string;
}

const FullWidthImage: React.FC<FullWidthImageProps> = ({
  imageSrc,
  fallbackImageSrc,
  imageAlt,
  height = 'h-[300px]'
}) => {
  return (
    <div className="rounded-lg overflow-hidden my-6 shadow-md">
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        className={`w-full object-cover ${height}`}
        onError={(e) => {
          e.currentTarget.src = fallbackImageSrc;
        }}
      />
    </div>
  );
};

export default FullWidthImage;
