import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>PETA MBG BANDUNG</div>
      <ul style={styles.navLinks}>
        <li><Link to="hero" smooth={true} duration={200} style={styles.link}>Beranda</Link></li>
        <li><Link to="stats" smooth={true} duration={200} style={styles.link}>Statistik</Link></li>
        <li><Link to="mapping" smooth={true} duration={200} style={styles.link}>Pemetaan</Link></li>
        <li><Link to="footer" smooth={true} duration={200} style={styles.link}>Kontak</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    padding: '1rem 5%', 
    background: 'transparent', 
    color: 'white', 
    position: 'fixed', 
    width: '100%', 
    top: 0, 
    zIndex: 1000 
},
  navLinks: { 
    display: 'flex', 
    listStyle: 'none', 
    gap: '20px' },
  link: { 
    cursor: 'pointer', 
    textDecoration: 'none', 
    color: '#fff' 
},
  logo: { fontWeight: 'bold', color: '#c5a059' }
};

export default Navbar;