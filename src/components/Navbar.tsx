import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Logo from '../assets/logo.svg';

const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 64) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return (
    <nav className={`navbar${hidden ? ' navbar--hidden' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" height={64} />
        </div>
        <ul className="navbar-links">
          <li><a href="/">Início</a></li>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;