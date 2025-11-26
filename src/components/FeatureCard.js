import React from 'react';

export default function FeatureCard({ image, title, description, variant = 'default' }) {
  if (variant === 'elevated') {
    return (
      <div className="flex">
        <div className="rounded border-2 h-[300px] w-[250px] mt-3 border-black"></div>
        <div className="rounded border-2 str1 p-4 h-[300px] pt-[50px] border-black w-[250px] bg-white mb-[10px]">
          <img src={image} alt={title} />
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded border-2 w-[15%] border-black p-10">
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
