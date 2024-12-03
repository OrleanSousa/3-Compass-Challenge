import logoSite from '../../assets/logosite.svg';
import userVeto from '../../assets/userVetor.svg';
import CardVetor from '../../assets/cartVetor.svg';

const Header = () => {
  return (
    <div className="flex justify-center w-full min-h-[96px] py-[28px] border-b border-gray-500">
      <div className="flex justify-between items-center w-[1286px]">
        {/* Logo Container */}
        <div className="flex items-center gap-2">
          <img src={logoSite} alt="Logo" className="w-[34px] h-[34px]" />
          <h1 className="font-bold text-[34px]">Furniro</h1>
        </div>

        {/* Menu Header */}
        <div className="flex gap-8 text-[16px] font-medium">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Shop</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>

        {/* User and Cart Icons */}
        <div className="flex gap-[35px]">
          <a href=""><img src={userVeto} alt="User" className="w-[24px] h-[24px]" /></a>
          <a href=""><img src={CardVetor} alt="Cart" className="w-[24px] h-[24px]" /></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
