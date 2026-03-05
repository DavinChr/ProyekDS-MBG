import React from 'react';

const Statistic = () => {
  const data = [
    { label: "Jumlah Sekolah", value: "2074" },
    { label: "Jumlah SPPG", value: "234" },
    { label: "Buruan SAE", value: "500+" },
    { label: "Indeks Ketahanan", value: "0.92" }
  ];

  return (
    <section id="stats" style={styles.section}>
      <div style={styles.grid}>
        {data.map((item, index) => (
          <div key={index} style={styles.card}>
            <h2 style={{color: '#c5a059'}}>{item.value}</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: { 
    padding: '100px 5%', 
    background: 'transparent', 
    textAlign: 'center', 
    color: 'white' 
},
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
    gap: '20px' 
},
  card: { 
    background: '#0f3460', 
    padding: '30px', 
    borderRadius: '10px', 
    border: '1px solid #1a1a2e' 
}
};

export default Statistic;