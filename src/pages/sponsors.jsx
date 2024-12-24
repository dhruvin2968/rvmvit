import React from 'react';

export const Sponsors = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading} className='text-white text-4xl font-black'>Our Proud Collaborations</h2>
      <p style={styles.subheading} className='text-3xl'>
        We are honored to be supported by industry-leading software platforms that help bring our vision to life.
      </p>
      <div style={styles.logoContainer}>
        <div style={styles.logoItem} className='pt-5    '>
          <img
            src="/solidwork_logo.png"
            alt="SolidWorks Logo"
            style={styles.logo}
          />
         
        </div>
        <div style={styles.logoItem} className='pt-8'>
          <img
            src="/fusion.png"
            alt="Autodesk Fusion 360 Logo"
            style={styles.logo}
          />
         
        </div>
        <div style={styles.logoItem} >
          <img
            src="/lgoipg.png"
            alt="IPG Motorcycle Maker Logo"
            style={styles.logo}
          />
          
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '40px',
    backgroundColor: 'black',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '10px',
    color: 'white',
  },
  subheading: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    color: 'white',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    
  },
  logoItem: {
    textAlign: 'center',
    maxWidth: '150px',
  },
  logo: {
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
  },
  logoName: {
    fontSize: '1rem',
    color: '#333',
  },
};

