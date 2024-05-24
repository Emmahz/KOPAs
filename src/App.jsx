const App = () => {
  return (
    <div className='wait'>
      <div className='flex justify-center items-center w-full h-full'>
        <div className='opac m-auto flex flex-col justify-center items-center gap-[30px] lg:px-0 px-[30px]  lg:py-0 py-[70px]  lg:gap-[50px] lg:h-[70%] lg:w-[40%]'>
          <div className='flex justify-center  items-center flex-col '>
            <h1 className='lg:font-semibold font-bold text-green-950 lg:text-[4rem]'>
              KOPAs CONNECT
            </h1>
            <p className=' text-green-950 lg:text-[2rem] '>
              Your one-drop stop for everything NYSC
            </p>
          </div>

          <form className='flex flex-col justify-center items-center gap-2'>
            <input
              required
              type='email'
              className='lg:h-[50px] w-[300px]  text-black lg:text-[1.5rem] p-[5px] lg:p-[20px] lg:w-[500px]'
              placeholder='Email'
            />
            <div className='border-solid lg:h-[50px] lg:ml-[300px]  ml-[150px]  rounded-lg w-fit lg:text-[1.5rem] bg-green-950 text-white lg:py-2 px-4'>
              <button>Join our Waitlist</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
