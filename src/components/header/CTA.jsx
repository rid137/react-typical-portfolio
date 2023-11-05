import Ridwan_Makinde_Resume from '../../assets/Ridwan_Makinde_Resume.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Ridwan_Makinde_Resume} className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Lets Talk</a>
    </div>
  );
}

export default CTA;
