import './testimonial.css';
import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.jpg';
import avatar4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: avatar1,
    name: 'Dare Seyi',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro voluptatem natus, laboriosam earum ipsum voluptate, et repudiandae aliquam maiores saepe dicta. Corporis odio distinctio officia placeat nostrum voluptatibus facilis minus?',
  },
  {
    avatar: avatar2,
    name: 'Dare Seyi',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro voluptatem natus, laboriosam earum ipsum voluptate, et repudiandae aliquam maiores saepe dicta. Corporis odio distinctio officia placeat nostrum voluptatibus facilis minus?',
  },
  {
    avatar: avatar3,
    name: 'Dare Seyi',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro voluptatem natus, laboriosam earum ipsum voluptate, et repudiandae aliquam maiores saepe dicta. Corporis odio distinctio officia placeat nostrum voluptatibus facilis minus?',
  },
  {
    avatar: avatar4,
    name: 'Dare Seyi',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro voluptatem natus, laboriosam earum ipsum voluptate, et repudiandae aliquam maiores saepe dicta. Corporis odio distinctio officia placeat nostrum voluptatibus facilis minus?',
  }
]

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial-container"

       // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
         
        {
          data.map(({avatar, name, review}, index) => {
            return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client-avatar">
                <img src={avatar} alt="" />
              </div>

              <h5>{name}</h5>
              <small className='client-review'>{review}</small>
            </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  );
}

export default Testimonial;
