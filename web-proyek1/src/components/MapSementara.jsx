import React from 'react';

const MapSementara = () => {
  return (
    <section id="mapping" style={styles.section}>
      <h2>Pemetaan Geografis</h2>
      <p>Distribusi SPPG dan Sekolah Penerima bantuan Kota Bandung</p>
      <div style={styles.mapBox}>
        <p style={{color: '#aaa'}}>nanti petanya disini ya</p>
      </div>
    </section>
  );
};

const styles = {
  section: { 
    padding: '100px 5%', 
    background: 'transparent', 
    color: 'white' 
},
  mapBox: { 
    width: '100%', 
    height: '400px', 
    background: '#222',
    borderRadius: '15px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    border: '2px dashed #444', 
    marginTop: '20px' 
    }
};

export default MapSementara;