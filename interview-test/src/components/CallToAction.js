import image_12 from "../assets/images/image-12.png";
import image_13 from "../assets/images/image-13.png";
import image_14 from "../assets/images/image-14.png";

import abstract_5 from "../assets/shapes/abstract-5.png";
import vector_6 from "../assets/shapes/vector-6.png";

export default function CallToAction() {
  return (
    <div className='flex flex-row bg-purple mt-[-100px] px-56 pt-[200px]'>
      <div className='basis-1/4 mt-[150px]'>
        <img
          className='relative z-0 top-[60px] left-[40px]'
          src={abstract_5}
          alt='Call to action'
        />
        <img
          className='relative left-[60px] z-20'
          src={image_13}
          alt='Call to action'
        />
      </div>
      <div className='basis-1/2'>
        <img className='relative z-10' src={image_12} alt='Call to action' />
      </div>
      <div className='basis-1/4'>
        <img
          className='relative top-[-70px] left-[-60px] z-20'
          src={image_14}
          alt='Call to action'
        />
        <img
          className='relative top-[-170px] left-[-150px] z-0'
          src={vector_6}
          alt='Call to action'
        />
        <h1 className='relative text-white font-semibold text-4xl text-start top-[-270px] left-[-60px] z-20 w-[250px]'>
          Let’s make you your best self.
        </h1>
        <span className='relative top-[-220px] left-[-60px] text-white pb-2 border-link z-20'>
          Book an Appoitment
        </span>
      </div>
    </div>
  );
}
