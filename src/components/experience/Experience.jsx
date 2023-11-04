import { BsPatchCheckFill } from 'react-icons/bs';
import './experience.css';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id='experience'>
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
        <h5>What Skills I Have</h5>
        <h2 style={{textAlign: 'center'}}>My Skills</h2>
      </motion.div>

      <div className="container experience-container">

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
          <div className="experience-frontend">
            <h3>Frontend Development</h3>
            <div className="experience-content">
              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Tailwindcss</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Firebase</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Styled-component</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>


              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Javascript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Typescript</h4>
                  <small className="text-light">Basics</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>reactjs</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>nextjs</h4>
                  <small className="text-light">Basics</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Git/GitHub</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              
            </div>
          </div>
        </motion.div>

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
          <div className="experience-backend">

            <h3>Office Software Skills</h3>
            <div className="experience-content">
              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Ms word</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Ms powerpoint</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Ms excel</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Coreldraw</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Photoshop</h4>
                  <small className="text-light">Basics</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Google workspace</h4>
                  <small className="text-light">Basics</small>
                </div>
              </article>

              
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;
