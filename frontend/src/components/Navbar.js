export default function Navbar() {
  return (
    <header className='bg-white tablet:bg-black relative py-10'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-row'>
          {/* Logo section */}
          <div className='basis-1/4 pt-2'>
            <div className='h-16 flex items-center'>
              <div className='h-5 w-5 bg-logo' />
              <div className='h-5 w-5 bg-white rounded-full mx-1' />
              <h1 className='font-bold text-white'>debonaire</h1>
            </div>
          </div>
          {/* Nav section */}
          <div className='basis-2/4 flex items-center justify-around'>
            <div className='h-[80px] w-[180px] flex items-center place-content-center rounded-3xl shadow-[2px_5px_10px_rgba(0,0,0,0.3)_inset]'>
              <h1 className='font-bold text-white'>VIVAPLUS</h1>
            </div>
            <div className='h-[80px] w-[180px] flex items-center place-content-center rounded-3xl shadow-[2px_5px_10px_rgba(0,0,0,0.3)]'>
              <h1 className='font-bold text-white'>Melio</h1>
            </div>
          </div>

          {/* Profile Badge section */}
          <div className='basis-1/4 flex items-center place-content-end'>
            <img
              className='h-16 w-16  rounded-full border-4 border-white'
              alt='Profile'
              src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80'
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
