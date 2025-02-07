import { useEffect } from "react";

const Face = () => {
  useEffect(() => {
    const eyeball = (event) => {
      document.querySelectorAll(".pupil").forEach((pupil) => {
        const eye = pupil.parentElement;
        const rect = eye.getBoundingClientRect();

        // Get the center of the eye
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        // Get distance from cursor to eye center
        const dx = event.clientX - eyeCenterX;
        const dy = event.clientY - eyeCenterY;

        // Limit pupil movement to stay inside the eye
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 12; // Max movement range

        let moveX = dx;
        let moveY = dy;

        if (distance > maxDistance) {
          const ratio = maxDistance / distance;
          moveX *= ratio;
          moveY *= ratio;
        }

        pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    document.addEventListener("mousemove", eyeball);
    return () => document.removeEventListener("mousemove", eyeball);
  }, []);

  return (
    <div className="relative w-52 h-52 rounded-full  flex justify-center items-center">
      {/* Eyes */}
      <div className="absolute top-[40px] flex space-x-8">
        <div className="eye w-16 h-16 bg-white rounded-full flex justify-center items-center">
          <div className="pupil w-6 h-6 bg-black rounded-full"></div>
        </div>
        <div className="eye w-16 h-16 bg-white rounded-full flex justify-center items-center">
          <div className="pupil w-6 h-6 bg-black rounded-full"></div>
        </div>
      </div>

      {/* Mouth */}
      {/* <div className="absolute top-[120px] w-[150px] h-[70px] bg-yellow-500 rounded-b-full transition-all duration-500 hover:h-5 hover:rounded-none"></div> */}
    </div>
  );
};

const FaceApp = () => {
  return (
    <div className="flex justify-center items-center ">
      <Face />
    </div>
  );
};

export default FaceApp;
