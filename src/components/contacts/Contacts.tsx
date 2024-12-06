import { IoLocationSharp } from "react-icons/io5";
import { BsFillClockFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";



const Contacts = () => {
  return (
    <>
      <div className="w-full h-[1144px] flex flex-col items-center mt-[98px]">
          <h2 className="text-[36px] font-semibold mb-[7px]">Get In Touch With Us</h2>
          <p className="text-gray50 mb-[14px] w-[644px] text-center">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. 
            Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
          <div className="w-[1058px] h-[923px] bg-slate-400 flex justify-between">
            <div className="bg-green-500 w-[393px] h-[537px] flex flex-col justify-center items-center gap-y-[45px] mt-[68px]">
              <div className="w-[254px] h-[120px]  flex justify-between ">
                <IoLocationSharp className="w-[22px] h-[27.59px] "/>
                <div>
                  <h2 className="text-[24px] font-medium mt-[11.88px]">Address</h2>
                  <p className="w-[212px] text-[16px]">236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
              <div className="w-[254px] h-[120px]  flex justify-between">
                <FaPhoneAlt className="w-[22px] h-[27.59px] "/>
                <div>
                  <h2 className="text-[24px] font-medium mt-[11.88px]">Phone</h2>
                  <p className="w-[212px] text-[16px]">Mobile: +(84) 546-6789
                  Hotline: +(84) 456-6789</p>
                </div>
              </div>
              <div className="w-[254px] h-[120px]  flex justify-between">
                <BsFillClockFill className="w-[22px] h-[27.59px] "/>
                <div>
                  <h2 className="text-[24px] font-medium mt-[11.88px]">Working Time</h2>
                  <p className="w-[212px] text-[16px]">Monday-Friday: 9:00 - 22:00
                  Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
              
            </div>
            <div></div>
          <div className="bg-red-300 w-[635px] h-[923px]">

            <button className="bg-textOrange w-[237px] h-[55px] text-white"> Submit</button> 
          </div>  
          </div>
      </div>
    </>
  )
}

export default Contacts