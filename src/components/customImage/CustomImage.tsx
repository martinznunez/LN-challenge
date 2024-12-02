'use client';

import { useState } from 'react';
import Image from 'next/image';

const CustomImage = ({ src, alt }: { src: string; alt: string }) => {
  const [imageSrc, setImageSrc] = useState<string>(src);

  return (
    <Image
      aria-label={alt}
      role="img"
      src={imageSrc}
      alt={alt}
      fill
      className="content-img custom-card-img"
      onError={ ()=> setImageSrc('/assets/LN.png') }
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority
    />
  );
};

export default CustomImage;
