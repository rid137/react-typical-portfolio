import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Lorem, ipsum dolor',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Lorem, ipsum dolor',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Lorem, ipsum dolor',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Lorem, ipsum dolor',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Lorem, ipsum dolor',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Lorem, ipsum dolor',
    github: 'https://github.com',
    demo: 'https://github.com',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">

      {
        data.map(({id, title, image, github, demo}) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-image">
                <img src={image} alt="blog-project" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' >Live Demo</a>
              </div>
            </article>
          )
        })
      }
        
      </div>
    </section>
  );
}

export default Portfolio;
