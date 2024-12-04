import React from 'react';
import { SlArrowRight } from "react-icons/sl";


type SubHeaderProps = {
  title?: string; 
  breadcrumb?: string[]; 
  logo?: string; 
};

const SubHeader: React.FC<SubHeaderProps> = ({ 
  title = "Shop", 
  breadcrumb = ["Home", "Shop"], 
  logo 
}) => {
  return (
    <div className='bg-backSubHeader w-[1440px] h-[316px] flex flex-col justify-center items-center'>
      {logo && (
        <img 
          src={logo} 
          alt="Logo" 
          className="w-[50px] h-[50px] -mb-2"
        />
      )}
      <h1 className='text-[48px] font-medium'>{title}</h1>
      
      
      <div className='flex items-center gap-[6px]'>
        {breadcrumb.map((crumb, index) => (
          <React.Fragment key={index}>
            <p className={`text-[16px] font-${index === breadcrumb.length - 1 ? "light" : "medium"}`}>
              {crumb}
            </p>
            {index < breadcrumb.length - 1 && <SlArrowRight />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SubHeader;
