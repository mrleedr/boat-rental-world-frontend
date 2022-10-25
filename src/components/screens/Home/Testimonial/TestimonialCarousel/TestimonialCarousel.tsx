import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';

import { TestimonialCard } from '../TestimonialCard';

export interface TestimonialCarouselProps {}

const testimonials = [
  {
    id: 1,
    image: '/assets/images/profile/charlie-green-3JmfENcL24M-unsplash.jpg',
    name: 'Christopher R.',
    location: 'Long Beach, California',
    review_title: 'Best Experience EVER!',
    review_content:
      'Eget arcu dictum varius duis at consectetur lorem donec. Id leo in vitae turpis massa sed. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec.',
  },
  {
    id: 2,
    image:
      '/assets/images/profile/christopher-campbell-rDEOVtE7vOs-unsplash.jpg',
    name: 'Elena E.',
    location: 'Miami, Florida',
    review_title: 'I highly recommend Boat Rental World  ',
    review_content:
      'In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Nullam non nisi est sit amet facilisis magna etiam. Scelerisque viverra mauris in aliquam sem fringilla. Et ligula ullamcorper... ',
  },
  {
    id: 3,
    image: '/assets/images/profile/laura-d-vargas-O5rYx60JZ68-unsplash.jpg',
    name: 'Jack E.',
    location: 'Clearwater, Florida',
    review_title: 'Love the customer service',
    review_content:
      'In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Nullam non nisi est sit amet facilisis magna etiam. Scelerisque viverra mauris in aliquam sem fringilla. Et ligula ullamcorper... ',
  },
  {
    id: 4,
    image: '/assets/images/profile/laura-d-vargas-O5rYx60JZ68-unsplash.jpg',
    name: 'Jack E.',
    location: 'Clearwater, Florida',
    review_title: 'Love the customer service',
    review_content:
      'In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Nullam non nisi est sit amet facilisis magna etiam. Scelerisque viverra mauris in aliquam sem fringilla. Et ligula ullamcorper... ',
  },
];

export const TestimonialCarousel = () => {
  // const SampleNextArrow = (props: any) => {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: 'block', background: 'red' }}
  //       onClick={onClick}
  //     />
  //   );
  // };

  // const SamplePrevArrow = (props: any) => {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: 'block', background: 'green' }}
  //       onClick={onClick}
  //     />
  //   );
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="px-4">
        <Slider {...settings}>
          {testimonials.map((testimonial: any) => (
            <div key={testimonial.id}>
              <TestimonialCard
                key={testimonial.id}
                image={testimonial.image}
                name={testimonial.name}
                location={testimonial.location}
                title={testimonial.review_title}
                content={testimonial.review_content}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
