import { motion } from 'framer-motion';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/porfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Printify',
    body: 'A website built for printing company to improve customer’s satisfaction.',
    github: 'https://github.com/rid137/printify',
    demo: 'https://printify-3ai.pages.dev/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Vendors Hub',
    body: 'A platform that connects event vendors with potential customers.',
    github: 'https://github.com/rid137/VendorsHub',
    demo: 'https://www.vendorshub.com.ng/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Shop Remote',
    body: 'An E-commerce website with stripe payment gateway integration.',
    github: 'https://github.com/rid137/react-ecommerce',
    demo: 'https://react-ecommerce-c3u.pages.dev/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'The Insight',
    body: 'A react blog website that consumes mock API using axios library',
    github: 'https://github.com/rid137/The-Insight',
    demo: 'https://the-insight.pages.dev/',
  },
  {
    id: 5,
    image: IMG5,
    title: "Hair Service",
    body: 'A fully responsive landing page',
    github: 'https://github.com/rid137/hair-service-landing-page',
    demo: 'https://react-hair.pages.dev/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Note App',
    body: 'A note app with dark/light mode where users perform CRUD operations',
    github: 'https://github.com/rid137/Note-App',
    demo: 'https://note-app-9bt.pages.dev/',
  }
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Portfolio = () => {
  return (
    <section id='portfolio'>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h5>My Recent Work</h5>
        <h2>Projects</h2>
      </motion.div>

        <motion.div
          className="container portfolio-container"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {
            data.map(({id, title, image, github, demo, body}) => {
              return (
                  // <motion.div variants={projectVariant} key={id}>
                  <motion.div key={id}>
                    <article className="portfolio-item">
                      <div className="portfolio-item-image">
                        <img src={image} alt="blog-project" />
                      </div>
                      <h3>{title}</h3>
                      <p style={{height: '7rem'}}>{body}</p>
                      <div className="portfolio-item-cta">
                        <a href={github} className='btn'>Github</a>
                        <a href={demo} className='btn btn-primary' target='_blank' >Live Demo</a>
                      </div>
                    </article>
                </motion.div>
              )
            })
          }
        </motion.div>

    </section>
  );
}

export default Portfolio;
