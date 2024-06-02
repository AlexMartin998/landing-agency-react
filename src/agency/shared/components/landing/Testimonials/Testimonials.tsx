import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './Testimonials.css';

import { TestimoniesType, testimonies } from '@/agency/shared/constants';

export interface TestimonialsInterface {}

const Testimonials: React.FC<TestimonialsInterface> = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <h1 className="main__title">
          <span className="gradient__text">Testimonios</span>
        </h1>

        <h3 className="sub__title">
          Lo que dicen nuestros <span className="gradient__text">clientes</span>
        </h3>

        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            700: {
              slidesPerView: 2,
            },
          }}
          className="testimonials__container"
        >
          {testimonies.map(
            ({ content, name, profile }: TestimoniesType, index) => (
              <SwiperSlide key={index} className="testimonial__card">
                <div className="profile__container">
                  <img src={profile} alt={name} />
                </div>

                <h3 className="name">{name}</h3>
                <p className="text__muted content">{content}</p>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
