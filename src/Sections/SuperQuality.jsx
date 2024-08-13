import React from 'react';
import Button from '../Components/Button';
import { arrowRight } from '../assets/icons';

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We Provide You
          <span className='xl:bg-white xl:relative z-10 pr-10'>
            Super
          </span>
          <br />
          <span className='text-coral-red'>
            Quality
          </span> 
          Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
Ensurinf the premium comfort and style,our meticulously crated
footware is designed to elevate your experience, providing youwith unmatched quality.
        </p>

        <Button label='View details' iconURL={arrowRight} />
      </div>
    </section>
  );
}

export default SuperQuality;
