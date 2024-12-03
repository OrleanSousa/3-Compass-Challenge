import FacebookVector from '../../assets/FacebookVector.svg'
import InstaVector from '../../assets/instaVector.svg'
import LinkedinVector from '../../assets/linkedinVector.svg'
import TwitterVector from '../../assets/twitterVector.svg'


const Footer = () => {
  return (
    <div className="w-[1440px] h-[505px] flex justify-center border-t-gray-500">
      <div className="w-[1240px] h-[419px] mt-[48px]">
        <div className='flex flex-row justify-between '>
          <div className='w-[285px] flex flex-col '>
            <h2 className='font-bold text-2xl'>Funiro.</h2>
            <p className='mt-[50px] text-gray50'>400 University Drive Suite 200 Coral Gables,<br/>
            FL 33134 USA</p>
            <div className='flex w-[184px] mt-[55px]'>
              <ul className='flex justify-between  w-[184px]'>
                <li className='flex items-center justify-center shadow-lg w-[34px] h-[34px] rounded-full'>
                  <img src={FacebookVector} alt="" className='w-4 h-4'/>
                </li>
                <li className='flex items-center justify-center shadow-lg w-[34px] h-[34px] rounded-full'>
                  <img src={InstaVector} alt="" className='w-4 h-4'/>
                </li>
                <li className='flex items-center justify-center shadow-lg w-[34px] h-[34px] rounded-full'>
                  <img src={TwitterVector} alt="" className='w-4 h-4'/>
                </li>
                <li className='flex items-center justify-center shadow-lg w-[34px] h-[34px] rounded-full'>
                  <img src={LinkedinVector} alt="" className='w-4 h-4'/>
                </li>
              </ul>
            </div>
            </div>
          <div className='w-[710px] flex justify-between mb-[48px]'>
            <div className='flex justify-between w-[353px] h-[312px]'>
              <div className='w-[68px] h-[312px]'>
                <p className='mb-[55px] text-gray50'>Links</p>
                <ul className='h-[233px] flex flex-col justify-between'>
                  <li>
                    <a href="" className='font-bold'>Home</a>
                  </li>
                  <li>
                  <a href="" className='font-bold'>Shop</a>
                  </li>
                  <li>
                  <a href="" className='font-bold'>About</a>
                  </li>
                  <li>
                  <a href="" className='font-bold'>Contact</a>
                  </li>
                </ul>
              </div>
              <div className='w-[140px] h-[242px]'>
                  <p className='mb-[55px] text-gray50'>Help</p>
                <ul className='h-[163px] flex flex-col justify-between'>
                  <li>
                    <a href="" className='font-bold'>Payment Options</a>
                  </li>
                  <li>
                    <a href="" className='font-bold'>Returns</a>
                  </li>
                  <li>
                    <a href="" className='font-bold'>Privacy Policies</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex flex-col justify-between w-[286px] h-[101px]'>
              <p className='text-gray50'>Newsletter</p>
              <div className="flex  items-center gap-4">
                <div className="flex-1 border-b border-gray-400">
                  <input 
                    type="text" 
                    placeholder="Enter Your Email Address" 
                    className="w-full bg-transparent outline-none placeholder-gray-500"
                  />
                </div>
                <button className=" font-semibold border-b border-gray-400 text-right text-black1 uppercase">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div className="border-t border-gray-300 mb-[35px]"></div>
          <p>2023 furino. All rights reverved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer