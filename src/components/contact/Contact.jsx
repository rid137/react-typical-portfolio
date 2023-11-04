import './contact.css'
import { motion } from 'framer-motion';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cd4z053', 'template_gux3ubo', form.current, 'YS1pbtkI-Ru6eHeTr')
    
    e.target.reset()
  };


  return (
    <section id='contact'>
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
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </motion.div>

      <div className="container contact-container">

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className='contact-option-icon' />
            <h4>Email</h4>
            <h5>makinderidwan73@gmail.com</h5>
            <a href="mailto:makinderidwan137@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact-option">
            <RiMessengerLine className='contact-option-icon' />
            <h4>Messenger</h4>
            <h5>makinderidwan</h5>
            <a href="https://m.me/remi.ade.169" target='_blank'>Send a message</a>
          </article>

          <article className="contact-option">
            <BsWhatsapp className='contact-option-icon' />
            <h4>Whatsapp</h4>
            <h5>makinderidwan73@gmail.com</h5>
            <a href="https://api.whatsapp.com/send?phone=2348063804622" target='_blank'>Send a message</a>
          </article>
        </div>
      </motion.div>

        {/* END OF CONTACT OPTIONS */}

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
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message'></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
