import React, { useRef, useEffect } from 'react';

function SlidingImage(props) {
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
        }
      });
    });

    observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return <img ref={imageRef} src={props.src} alt={props.alt} className="sliding-image" />;
}

export default SlidingImage;
