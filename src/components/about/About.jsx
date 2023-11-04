import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { motion } from 'framer-motion';


{/* <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="me">
            <img src={ME} alt="" />
          </div>
        </motion.div> */}
const About = () => {
  return (
    <section id='about'>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </motion.div>
      
      
      <div className="container about-container">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="about-me">
            <div className="about-me-image">
              <img src={ME} alt="about me image" />
            </div>
          </div>
        </motion.div>

        
        <div className="about-content">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="about-cards">
              <article className="about-card">
                <FaAward className='about-icon' />
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>

              <article className="about-card">
                <FiUsers className='about-icon' />
                <h5>Clients</h5>
                <small>3</small>
              </article>

              <article className="about-card">
                <VscFolderLibrary className='about-icon' />
                <h5>Projects</h5>
                <small>8 Completed  </small>
              </article>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p style={{textAlign: 'justify'}}>
              I'm a dedicated frontend developer with a passion for transforming the web into a more beautiful and user-friendly digital place. My journey started with a Bachelor's degree in Biochemistry, where I graduated with first-class honors, a testament to my commitment to excellence.
              My work is a blend of creativity and functionality. I thrive on crafting elegant, responsive websites 
              that not only look great but also deliver exceptional performance. I'm committed to staying up-to-date 
              with the latest industry trends to ensure each project meets the highest standards.  Let's collaborate and bring your
              digital vision to life.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
