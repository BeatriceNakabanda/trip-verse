type Props = {
    title: string;
    description: string;
    image: string;
    price: string;
}
import React from 'react'

function DestinationCard({title, description, image, price}: Props) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-primary">{price}</span>
          <button className="text-red-500 hover:text-red-600 text-xl">❤️</button>
        </div>
      </div>
    </div>
  )
}

export default DestinationCard

