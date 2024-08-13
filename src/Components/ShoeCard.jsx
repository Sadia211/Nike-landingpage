import React from 'react'

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {

  // Check if the bigShoeImage is not the current imgURL and update it
 

  // Handle click event
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
        changeBigShoeImage(imgURL.bigShoe);
      }
  }

  return (
    <div 
      className={`border-2 rounded-xl 
      ${bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"} 
      cursor-pointer max-sm:flex-1`}
      onClick={handleClick}>
      {/* Content goes here */}
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img src={imgURL.thumbnail}
        width={127}
        height={103}
        className='object-contain'/>
      </div>
    </div>
  );
}

export default ShoeCard;
