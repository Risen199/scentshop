import React from 'react';
import { Link } from 'react-router-dom';

const images = ["2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];

const containerStyle = {
  padding: '2rem',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: 'rgba(0, 0, 255, 0.3)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
  boxSizing: 'border-box',
};

const imagesContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1rem',
  marginTop: '2rem',
  width: '100%',
  maxWidth: '1200px',
  boxSizing: 'border-box',
  padding: '0 1rem',
};

const imageStyle = {
  width: '100%',
  height: '300px',
  borderRadius: '8px',
  objectFit: 'cover',
  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
};

function Fragrances() {
  const [modalImage, setModalImage] = React.useState(null);

  const openModal = (img) => {
    setModalImage(img);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div style={containerStyle}>
      {/* Navigation Buttons */}
      <Link to="/" style={{
        position: 'fixed',
        top: '10px',
        left: '10px',
        backgroundColor: '#f9f4f1',
        color: '#b8860b',
        padding: '10px 20px',
        borderRadius: '8px',
        fontWeight: 'bold',
        textDecoration: 'none',
        zIndex: 1100,
      }}>
        Home
      </Link>
      <Link to="/contact" style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        backgroundColor: '#f9f4f1',
        color: '#b8860b',
        padding: '10px 20px',
        borderRadius: '8px',
        fontWeight: 'bold',
        textDecoration: 'none',
        zIndex: 1100,
      }}>
        Contact
      </Link>

      {/* Heading */}
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center' }}>Fragrances</h1>
      <p style={{
        fontSize: '1.5rem',
        textAlign: 'center',
        maxWidth: '800px',
        lineHeight: '1.6',
        margin: '0 auto',
      }}>
        Here you will find a selection of our exquisite perfumes with their prices.
      </p>

      {/* Price Banner */}
      <div style={{
        fontSize: '2.5rem',
        color: 'red',
        fontStyle: 'italic',
        margin: '2rem 0 1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        width: '100%',
        padding: '1rem 2rem',
        userSelect: 'none',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        textAlign: 'center',
      }}>
        <p style={{ margin: 0 }}>As little as</p>
        <p style={{ margin: 0 }}>R95</p>
      </div>

      {/* Images */}
      <div style={imagesContainerStyle}>
        {images.map((img) => (
          <img
            key={img}
            src={`/images/${img}`}
            alt={`Fragrance ${img}`}
            style={imageStyle}
            onClick={() => openModal(img)}
          />
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.85)',
            zIndex: 2000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            padding: '1rem',
            boxSizing: 'border-box',
          }}
        >
          <img
            src={`/images/${modalImage}`}
            alt={`Fragrance ${modalImage}`}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              borderRadius: '12px',
              boxShadow: '0 0 30px white',
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Fragrances;
