import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" style={styles.footerContainer}>
      <div style={styles.topSection}>
        {/* Sisi Kiri: Logo dan Nama */}
        <div style={styles.brand}>
          <div style={styles.logoCircle}>MBG</div>
          <h2 style={styles.brandName}>MBG BANDUNG</h2>
        </div>

        {/* Sisi Kanan: Link Navigasi Tambahan */}
        <div style={styles.linksGroup}>
          <a href="#privacy" style={styles.footerLink}>PRIVACY</a>
          <a href="#docs" style={styles.footerLink}>DOCUMENTATION</a>
          <a href="#api" style={styles.footerLink}>API ACCESS</a>
        </div>
      </div>

      <div style={styles.divider}></div>

      <div style={styles.bottomSection}>
        <p style={styles.copyright}>
          © 2024 Dinas Ketahanan Pangan dan Pertanian Kota Bandung.
        </p>
        
        {/* Ikon Sosial Media (Placeholder) */}
        <div style={styles.socialIcons}>
          <span style={styles.icon}>𝕏</span> {/* Twitter/X */}
          <span style={styles.icon}></span> {/* Instagram */}
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    background: '#0f0f1b', // Warna biru yang sangat gelap (hampir hitam)
    padding: '60px 10% 30px 10%',
    color: '#888', // Warna teks abu-abu agar tidak terlalu mencolok
    fontFamily: 'Arial, sans-serif',
  },
  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  logoCircle: {
    border: '1px solid #f0a500',
    borderRadius: '50%',
    padding: '8px',
    color: '#f0a500',
    fontSize: '0.8rem',
    fontWeight: 'bold',
  },
  brandName: {
    color: '#fff',
    fontSize: '1.2rem',
    letterSpacing: '2px',
    margin: 0,
  },
  linksGroup: {
    display: 'flex',
    gap: '25px',
  },
  footerLink: {
    color: '#888',
    textDecoration: 'none',
    fontSize: '0.8rem',
    letterSpacing: '1px',
    transition: 'color 0.3s',
    cursor: 'pointer',
  },
  divider: {
    height: '1px',
    background: '#222',
    margin: '40px 0 20px 0',
  },
  bottomSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.8rem',
  },
  copyright: {
    margin: 0,
  },
  socialIcons: {
    display: 'flex',
    gap: '20px',
    fontSize: '1.2rem',
    color: '#fff',
  },
  icon: {
    cursor: 'pointer',
  }
};

export default Footer;