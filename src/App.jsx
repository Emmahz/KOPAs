const App = () => {
  return (
    <div className='wait'>
      <div className='flex justify-center items-center w-full h-full '>
        <div className='opac m-auto flex flex-col justify-center items-center gap-[30px] lg:px-0 px-[30px]  lg:py-10 py-[70px]  lg:gap-[50px] lg:h-[70%] lg:w-[40%]'>
          <div className='flex justify-center  items-center flex-col '>
            <h1 className='lg:font-semibold font-bold text-green-950 lg:text-[3rem]'>
              KOPAs CONNECT
            </h1>
            <p className=' text-green-950 lg:text-[1.5rem] '>
              Your one-drop stop for everything NYSC
            </p>
          </div>

          <form className='flex flex-col justify-center items-center gap-2'>
            <input
              required
              type='email'
              className='lg:h-[50px] w-[300px] bg-gray-300 rounded-lg placeholder-xs text-black lg:text-[1.5rem] p-[5px] placeholder-sm lg:p-[20px] lg:w-[500px] placeholder'
              placeholder='Your Email'
            />
            <div className='border-solid   rounded-lg w-fit lg:text-[1rem] bg-green-950 text-white lg:py-1 px-3'>
              <button>Join our Waitlist</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
