import { useRef, useEffect, useState } from "react";


function CatMemes ({ src, alt, onLazyLoad, ...imgProps}) {

  const [currentSrc, setCurrentSrc] = useState(
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );

  const imgRef = useRef(null);

  useEffect(() => {   

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src);
          onLazyLoad && onLazyLoad(entry.target);
          observer.disconnect();
        }
      });
    });

    if (imgRef.current) { observer.observe(imgRef.current); }

    return () => {
      observer.disconnect();
    }
  }, [src]);


  return <img 
    ref={imgRef}
    src={currentSrc}
    alt={alt}
    {...imgProps}
  />;
};

export { CatMemes };