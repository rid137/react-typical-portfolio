import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about-container">

        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="about me image" />
          </div>
        </div>
        
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className='about-icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about-card">
              <FiUsers className='about-icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className='about-icon' />
              <h5>Projects</h5>
              <small>80+ Completed  </small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Numquam laudantium magnam quia corrupti eum enim aliquam 
            quos ea aspernatur ut necessitatibus voluptate illo ab 
            eligendi explicabo labore, deserunt voluptates reiciendis!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
