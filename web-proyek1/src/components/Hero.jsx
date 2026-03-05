import React from 'react';

const Hero = () => {
  return (
    <section id="hero" style={styles.container}>
      {/* Bagian Teks (Kiri) */}
      <div style={styles.textContent}>
        <h1 style={styles.title}>
          MBG <br /> 
          <span style={styles.highlight}>Kota Bandung</span>
        </h1>
        <div style={styles.divider}></div>
        <p style={styles.description}>
          Makan Bergizi Gratis (MBG) adalah program pemerintah Indonesia sebagai bentuk kepedulian terhadap rakyat Indonesia, terutama kalangan anak-anak, ibu hamil, ibu menyusui. Guna memastikan terpenuhinya kebutuhan gizi masyarakat Indonesia
        </p>
        <div style={styles.buttonGroup}>
          <button style={styles.btnPrimary}>Pelajari Lebih Lanjut</button>
          <button style={styles.btnSecondary}>Lihat Data</button>
        </div>
      </div>

      {/* Bagian Foto (Kanan) */}
      <div style={styles.imageContainer}>
        <div style={styles.imageFrame}>
          {/* buat foto */}
          <img 
            src="https://via.placeholder.com/400x500" 
            alt="Profile" 
            style={styles.image} 
          />
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10%',
    background: 'tran', 
    color: 'white',
    paddingTop: '80px', 
  },
  textContent: { 
    flex: 1, 
    maxWidth: '500px' 
},
  title: { 
    fontSize: '4rem', 
    margin: 0, 
    lineHeight: '1.1', 
    fontWeight: 'bold' 
},
  highlight: { 
    color: '#c5a059', 
    fontStyle: 'italic',
    fontFamily: 'Playfair_Display' 
  },
  divider: { 
    width: '60px', 
    height: '4px', 
    background: '#c5a059', 
    margin: '20px 0' 
},
  description: { 
    fontSize: '1rem', 
    lineHeight: '1.6', 
    color: '#ccc',
    marginBottom: '30px' 
    },
  buttonGroup: { 
    display: 'flex', 
    gap: '15px' 
},
  btnPrimary: { 
    padding: '12px 24px', 
    background: '#c5a059', 
    border: 'none', 
    cursor: 'pointer', 
    fontWeight: 'bold',
    fontFamily: 'Playfair_Display'
},
  btnSecondary: { 
    padding: '12px 24px', 
    background: 'transparent', 
    border: '1px solid #ffffff', 
    color: 'white', 
    cursor: 'pointer' 
},
  imageContainer: { 
    flex: 1, 
    display: 'flex', 
    justifyContent: 'flex-end' 
},
  imageFrame: { 
    border: '1px solid #444', 
    padding: '15px', 
    borderRadius: '10px'
},
  image: { 
    width: '350px', 
    height: '450px', 
    objectFit: 'cover',
    filter: 'grayscale(100%)' 
}
};

export default Hero;