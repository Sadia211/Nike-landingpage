import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from '../Components/Button';
import { arrowRight } from '../assets/icons';
import { shoe8 } from '../assets/images';

// Define animation styles for text and image
const TextContainer = styled.div`
  opacity: ${({ animate }) => (animate ? 1 : 0)};
  transform: ${({ animate }) => (animate ? 'translateX(0)' : 'translateX(-100px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const ImageContainer = styled.div`
  opacity: ${({ animate }) => (animate ? 1 : 0)};
  transform: ${({ animate }) => (animate ? 'translateX(0)' : 'translateX(100px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const SuperQuality = () => {
  const [animate, setAnimate] = useState(false);
  const superQualityRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (superQualityRef.current) {
        const top = superQualityRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
      ref={superQualityRef}
    >
      <TextContainer className='flex flex-1 flex-col' animate={animate}>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We Provide You
          <span className='text-coral-red'> Super Quality </span>
          Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted
          footwear is designed to elevate your experience, providing you with unmatched quality.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className='mt-11'>
          <Button label='Shopnow' iconURL={arrowRight} />
        </div>
      </TextContainer>

      <ImageContainer className='flex-1 flex justify-center items-center' animate={animate}>
        <img
          src={shoe8}
          width={570}
          height={522}
          className='object-contain'
          alt='Super Quality Shoes'
        />
      </ImageContainer>
    </section>
  );
};

export default SuperQuality;
