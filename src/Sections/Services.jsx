import React, { useState, useEffect, useRef } from 'react';
import { services } from '../Constants';
import ServiceCard from '../Components/ServiceCard';
import styled from 'styled-components';

// Define the animation styles for the service container
const ServicesContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  opacity: ${({ animate }) => (animate ? 1 : 0)};
  transform: ${({ animate }) => (animate ? 'translateY(0)' : 'translateY(100px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  @media (max-width: 768px) {
    flex-direction: column; 
    gap: 10px; 
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: row; /* Row direction for tablets */
    justify-content: space-between; /* Adjust spacing for tablets */
  }

 
`;


const Services = () => {
  const [animate, setAnimate] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (servicesRef.current) {
        const top = servicesRef.current.getBoundingClientRect().top;
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
    <section className='max-container flex justify-center flex-wrap gap-9'>
  
      <ServicesContent ref={servicesRef} animate={animate}>
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </ServicesContent>
    </section>
  );
};

export default Services;
