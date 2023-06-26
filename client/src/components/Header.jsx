import { PiSignInLight, PiSignOutLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className='border w-full py-2'>
        <div className='flex flex-box justify-around'>
          <div>
            <Link to='/'>
              <img src='/logo.svg' className='inline w-8 mb-2 mx-1' alt='' />
              <h1 className='text-xl inline'>Library</h1>
            </Link>
          </div>
          <div>
            <Link to='/signin'>
              <button className='border px-6 mx-2 inline-flex'>
                <PiSignInLight className=' my-1 mx-1' /> Sign IN
              </button>
            </Link>
            <Link to='/signup'>
              <button className='border px-6 mx-2 inline-flex'>
                <PiSignOutLight className=' my-1 mx-1' /> Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
