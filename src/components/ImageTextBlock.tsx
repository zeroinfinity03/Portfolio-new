
import React from 'react';

interface ImageTextBlockProps {
  imageSrc: string;
  fallbackImageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  imageHeight?: string;
  children: React.ReactNode;
}

const ImageTextBlock: React.FC<ImageTextBlockProps> = ({
  imageSrc,
  fallbackImageSrc,
  imageAlt,
  imagePosition = 'right',
  imageHeight = 'h-full',
  children
}) => {
  const imageElement = (
    <div className="rounded-lg overflow-hidden shadow-md">
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        className={`w-full object-cover ${imageHeight}`}
        onError={(e) => {
          e.currentTarget.src = fallbackImageSrc;
        }}
      />
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-6 my-6">
      {imagePosition === 'left' ? (
        <>
          {imageElement}
          <div>{children}</div>
        </>
      ) : (
        <>
          <div>{children}</div>
          {imageElement}
        </>
      )}
    </div>
  );
};

export default ImageTextBlock;
