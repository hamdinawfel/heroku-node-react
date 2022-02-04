import image_8 from "../assets/images/image-8.png";
import image_9 from "../assets/images/image-9.png";
import image_10 from "../assets/images/image-10.png";

import abstract_4 from "../assets/shapes/abstract-4.png";
import vector_5 from "../assets/shapes/vector-5.png";

export default function Services() {
  return (
    <div className='bg-pink mt-[-80px]'>
      <div className='py-36'>
        <h1 className='text-white text-extrabold text-4xl text-center'>
          Our Services
        </h1>
      </div>
      <div className='flex flex-row px-60'>
        <div className='basis-1/3'>
          <img src={image_8} alt='Cut' />
          <p className='text-white text-bold text-3xl text-start mt-6'>Cut.</p>
        </div>
        <div className='basis-1/3 pt-24'>
          <p className='text-white text-bold text-3xl text-start mb-6'>
            Color.
          </p>
          <img className='relative z-10' src={image_9} alt='Color' />
          <img
            className='relative top-[-120px] left-[60px] z-0'
            src={vector_5}
            alt='Color'
          />
          <p className='relative top-[-290px] left-[-240px] text-white text-extrabold text-4xl text-right w-[270px] z-30'>
            We create a customized new look for you.
          </p>
          <span className='relative top-[-250px] left-[-70px] text-white pb-2 border-link'>
            See Our Menu
          </span>
        </div>
        <div class='basis-1/3'>
          <img
            className='absolute top-[3180px] ml-[140px] z-0'
            src={abstract_4}
            alt='Design'
          />
          <img className='relative z-10' src={image_10} alt='Design' />
          <p className='text-white text-bold text-3xl text-start mt-6'>
            Design.
          </p>
        </div>
      </div>
      <div className='relative rotate-90 w-96 ml-[1000px]'>
        <p className='text-white text-center'>AND THE MOST IMPORTANT PART</p>
      </div>
    </div>
  );
}
