import React, { useRef } from "react";
import styles from "./ToggleMenu.module.css";

interface HamburgerProps {
  className?: string;
  onClick?: () => void;
  isOpen: boolean; // Pass isOpen prop to determine the state of the navigation
}

const Hamburger: React.FC<HamburgerProps> = ({ className, onClick, isOpen }) => {
  const toggleRef = useRef<HTMLDivElement>(null);

  const handleHamburgerMenu = () => {
    if (onClick) {
      onClick(); // Call onClick function to toggle navigation state
    }
    if (toggleRef.current) {
      toggleRef.current.classList.toggle(styles.active);
    }
  };

  return (
    <>
      <div
        className={`${styles.hamburger} ${className}`}
        onClick={handleHamburgerMenu}
        ref={toggleRef}
        
      ></div>

      <div className={styles.slider}></div>
    </>
  );
};

export default Hamburger;