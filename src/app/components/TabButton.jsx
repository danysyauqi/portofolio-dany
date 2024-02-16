import React from 'react'
import{motion} from 'framer-motion';

const variants = {
  default: { width: 0, originX: 0 },
  active: { width: "calc(100% - 0.75rem)", originX: 0 },
};

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? "text-white border-b border-[#00A0DC]" : "text-[#ADB7BE] ";
  
    return (
      <motion.button 
        onClick={selectTab}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}</p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 absolute bottom-0 left-0"
      ></motion.div>
    </motion.button>
  );
};
  
  export default TabButton;