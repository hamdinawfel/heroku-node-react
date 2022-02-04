import image_1 from "../assets/images/image-1.png";
import image_2 from "../assets/images/image-2.png";
import image_3 from "../assets/images/image-3.png";
import image_4 from "../assets/images/image-4.png";
import image_5 from "../assets/images/image-5.png";
import image_6 from "../assets/images/image-6.png";
import image_7 from "../assets/images/image-7.png";

import vector_1 from "../assets/shapes/vector-1.png";
import vector_2 from "../assets/shapes/vector-2.png";
import vector_3 from "../assets/shapes/vector-3.png";
import vector_4 from "../assets/shapes/vector-4.png";

import abstract_1 from "../assets/shapes/abstract-1.png";
import abstract_2 from "../assets/shapes/abstract-2.png";
import abstract_3 from "../assets/shapes/abstract-3.png";
export default function Hero() {
  return (
    <div className='bg-blue pt-10 pb-20'>
      <div className='w-[800px] h-[144px] ml-[200px] mt-[50px]'>
        <p className='font-extrabold text-white text-6xl font-sans'>
          Hi, we are Debonaire. Ready to create an art form on your body.
        </p>
      </div>
      <div className='mt-36'>
        <img className='mx-auto z-20 relative' src={image_1} alt='Hero' />
        <img
          className='mx-auto z-10 absolute left-[820px] top-[543px] z-30'
          src={image_2}
          alt='Hero'
        />
        <img
          className='mx-auto absolute left-[780px] top-[460px]'
          src={abstract_1}
          alt='Hero'
        />
        <img
          className='mx-auto mt-[-150px] ml-[400px] relative z-0'
          src={vector_1}
          alt='Hero'
        />
        <img
          className='mx-auto mt-[-180px] ml-[720px] relative z-0'
          src={abstract_2}
          alt='Hero'
        />
        <p className='w-[180px] z-10 absolute left-[920px] top-[800px] z-30 color-grey'>
          Debonaire is natural product-based, hair design & boutique
        </p>
      </div>
      <div className='relative z-10'>
        <img className='relative top-[140px]' src={vector_2} alt='Hero' />
        <img
          className='absolute top-[-10px] left-[100px]'
          src={image_3}
          alt='Hero'
        />
        <img
          className='absolute top-[150px] right-[80px] z-10'
          src={image_4}
          alt='Hero'
        />
        <img
          className='absolute top-[310px] right-[300px] z-0'
          src={vector_3}
          alt='Hero'
        />
      </div>
      <div className='absolute top-[1300px] left-[480px]'>
        <h1 className='text-white text-bold text-3xl'>We’re focused.</h1>
        <p className='w-[380px] color-grey mt-6'>
          We provide an exceptional service by only focusing on hair designing.
          Our goal is to provide a different type of experience by using
          responsible products.
        </p>
      </div>
      <div className='relative mt-0 bg-green clip-path h-96' />
      <div className='bg-green'>
        <img
          className='relative ml-1 top-[0px] h-[600px] z-10'
          src={image_5}
          alt='Hero'
        />
        <h1 className='relative text-white font-semibold text-5xl w-[350px] top-[-500px] left-[420px] z-20'>
          We love what we do. We are up to the task.
        </h1>
        <p className='relative w-[320px] top-[-450px] left-[550px] color-grey'>
          Cuts tailor made for your hair, making it easy for you to recreate
          your look every day. Debonaire team, makes you feel happy at ease and
          work with you to make you your most lovely
        </p>
        <img
          className='absolute top-[2310px] left-[350px] z-0'
          src={abstract_3}
          alt='Hero'
        />
        <img
          className='absolute top-[2100px] right-[0px] z-0'
          src={vector_4}
          alt='Hero'
        />
        <img
          className='absolute top-[2100px] right-[0px] z-0'
          src={image_6}
          alt='Hero'
        />
        <img
          className='absolute top-[2400px] right-[80px] z-10'
          src={image_7}
          alt='Hero'
        />
      </div>
    </div>
  );
}
