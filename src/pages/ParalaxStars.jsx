import React, { useEffect, useState } from "react";

const ParallaxStars = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const numCircles = 100;
    const newCircles = Array.from({ length: numCircles }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 2, 
      x: Math.random() * 100, 
      y: Math.random() * 100, 
      duration: Math.random() * 8 + 5, 
      delay: Math.random() * 5, 
    }));

    setCircles(newCircles);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Moving Particles */}
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="absolute bg-blue-300 rounded-full mix-blend-screen"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            left: `${circle.x}vw`,
            top: `${circle.y}vh`,
            animation: `move-up ${circle.duration}s linear infinite`,
            animationDelay: `${circle.delay}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default ParallaxStars;
