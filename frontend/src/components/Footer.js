export default function Footer() {
  return (
    <div className='flex flex-row justify-between bg-beige p-20'>
      <div className='basis-1/2 flex flex-row'>
        <div className='basis-1/2'>
          <p className='text-white mb-8'>Terms of Service</p>
          <p className='text-white'>Privacy Policy</p>
        </div>
        <div className='basis-1/2'>
          <p className='text-white mb-8'>Instagram</p>
          <p className='text-white'>Facebook</p>
        </div>
      </div>
      <div className='basis-1/2 flex flex-col'>
        <p className='text-white text-2xl text-right mb-8'>
          We invite you to join our team.
        </p>
        <div className='flex flex-row justify-end'>
          <p className='text-white text-3xl text-right border-red-600 border-b-2 w-[150px] pb-2'>
            Apply Now
          </p>
        </div>
      </div>
    </div>
  );
}
