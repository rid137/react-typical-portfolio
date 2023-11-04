import { motion } from 'framer-motion';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    // <motion.div
    //   className='header-socials'
    //   initial="hidden"
    //   whileInView="visible"
    //   viewport={{ once: true, amount: 0.5 }}
    //   transition={{ delay: 0.4, duration: 0.5 }}
    //   variants={{
    //       hidden: { opacity: 0, y: -50 },
    //       visible: { opacity: 1, y: 0 },
    //   }}
    // >
    <div className="header-socials">
      <a href="www.linkedin.com/in/ridwan-makinde-947570255" target='_blank'> <BsLinkedin /> </a>
      <a href="https://github.com/roycoMedia" target='_blank'> <FaGithub /> </a>
      <a href="#" target='_blank'> <FiDribbble /> </a>
    </div>
    // </motion.div>
  );
}

export default HeaderSocials;
