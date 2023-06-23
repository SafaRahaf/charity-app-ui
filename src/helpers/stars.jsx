import React from 'react';

const RenderStars = ({ star }) => {
  const roundedStar = Math.round(star); // Round the star value
  const fullStars = Math.floor(roundedStar); // Get the integer part of the rounded star value
  const hasHalfStar = roundedStar % 1 !== 0; // Check if there is a half star

  const stars = [];

  // Render full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <svg
        key={i}
        aria-hidden="true"
        className="w-5 h-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }

  // Render half star if available
  if (hasHalfStar) {
    stars.push(
      <svg
        key="half"
        aria-hidden="true"
        className="w-5 h-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Half Star</title>
        <path d="M10 14.121l-3.536 2.778 1.321-4.815-3.494-2.692 4.815-.353L10 5l1.394 4.027 4.815.353-3.494 2.692 1.32 4.815z" />
      </svg>
    );
  }

  return stars;
};

export default RenderStars;