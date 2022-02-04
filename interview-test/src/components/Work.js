import image_11 from "../assets/images/image-11.png";

export default function Work() {
  return (
    <div>
      <img src={image_11} alt='Work' />
      <h1 className='relative text-white font-semibold text-5xl text-center top-[-220px] z-20'>
        We work with passion.
      </h1>
      <p className='relative top-[-190px] w-[400px] text-white text-center mx-auto'>
        Our specialists are waiting to give you the treatments and services that
        you deserve
      </p>
    </div>
  );
}
