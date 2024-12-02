import logoSite from '../../assets/logosite.svg'
import userVeto from '../../assets/userVetor.svg'
import CardVetor from '../../assets/cartVetor.svg'

const Header = () => {
  return (
    <div className='flex flex-row w-[1440px] h-[96px] justify-center pt-[27px] pb-[28px] pr-[100px] pl-[50px] bg-white'>
      <div className='flex w-[1286px] h-[41px] items-center justify-between'>
        <div className='flex items-center gap-1'>
          <img src={logoSite} alt="" className='w-[50px] h-[32px]'/>
          <h1 className='font-bold text-[34px] font-mont'>Furniro</h1>
        </div>
        <div className='flex w-[430px] h-[23px] justify-around font-semibold '>
          <a href="" className='hover:underline text-[16px]'>Home</a>
          <a href="" className='hover:underline text-[16px]'>Shop</a>
          <a href="" className='hover:underline text-[16px]'>About</a>  
          <a href="" className='hover:underline text-[16px]'>Contact</a>
        </div>
        <div className='flex gap-[35px]'>
          <img src={userVeto} alt="" className=' '/>
          <img src={CardVetor} alt="" className=' '/>
        </div>
      </div>
    </div>
  )
}

export default Header