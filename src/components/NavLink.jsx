import React, { useState } from 'react';

const NavLink = ({ label, items, hasDropDown, additionalStyle }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleMouseEnter = () => {
      setIsOpen(true)
    }

    const handleMouseLeave = () => {
      setIsOpen(false)
    }

  return (
    <div
      className="flex flex-wrap ml-auto">
        <button
            onMouseEnter={handleMouseEnter}
            className="inline-flex items-center gap-[3px] hover:text-neutral-500"
        >
        {label}
        {hasDropDown && <img className='w-[11px] h-[11px] inline-flex ' src='./images/downarrow.png' />}
      </button>
      {isOpen && !additionalStyle && items.length > 0 && (
        <div                
        onMouseLeave={handleMouseLeave}
        className="flex right-[200px] transition-transform duration-1000 hover:translate-y-9 shadow-lg absolute justify-between w-[700px] h-[278px] py-3
               bg-zinc-100 border border-zinc-300 text-black text-sm font-normal font-['Segoe UI']">
          <div className='grid grid-cols-2' role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item, index) => (
              <button
                key={index}
                className={`${item.className}`}
                role="menuitem"
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
        
      )}

      {isOpen ? additionalStyle && (
              <div
              onMouseLeave={handleMouseLeave}
              className="flex shadow-lg w-[220px] h-[190px] py-3 bg-zinc-100 border
              border-zinc-300 absolute transition-transform duration-1000 hover:translate-y-9 text-black text-sm font-normal font-['Segoe UI']">
                <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {items.map((item, index) => (
                    <button
                      key={index}
                      className={`${item.className}`}
                      role="menuitem"
                      >
                      {item.text}
                    </button>
                  ))}
                </div>
              </div>
              ) : " "}
    </div>

  )
}

export default NavLink