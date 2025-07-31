import React from 'react';
import { Link } from 'react-router-dom';

const images = ["2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];

const containerStyle = {
  padding: '2rem',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: 'rgba(0, 0, 255, 0.3)', // semi-transparent blue
  backdropFilter: 'blur(8px)', // blurry effect
  WebkitBackdropFilter: 'blur(8px)', // for Safari
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
};

const imagesContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  marginTop: '2rem',
  width: '100%',
};

const imageStyle = {
  width: '40vw',
  height: '60vh',
  borderRadius: '8px',
  objectFit: 'cover',
  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
};

function Fragrances() {
  const [modalImage, setModalImage] = React.useState(null);
  const [modalPosition, setModalPosition] = React.useState({ x: 0, y: 0 });

  const openModal = (img, event) => {
    setModalImage(img);
    setModalPosition({ x: event.clientX, y: event.clientY });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div style={containerStyle}>
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
      <h1>Fragrances</h1>
      <p style={{ fontSize: '300%' }}>Here you will find a selection of our exquisite perfumes with their prices.</p>
      <div style={{
        fontSize: '7em',
        color: 'red',
        fontStyle: 'italic',
        margin: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        width: '100%',
        padding: '0 2rem',
        userSelect: 'none',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        textAlign: 'center',
      }}>
        <p style={{ margin: 0 }}>As little as</p>
        <p style={{ margin: 0 }}>R95</p>
      </div>
      <div style={imagesContainerStyle}>
        {images.map((img) => (
          <img
            key={img}
            src={`/images/${img}`}
            alt={`Fragrance ${img}`}
            style={imageStyle}
            onClick={(e) => openModal(img, e)}
          />
        ))}
      </div>

      {modalImage && (
        <div
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: 1000,
            cursor: 'pointer',
          }}
        >
          <img
            src={`/images/${modalImage}`}
            alt={`Fragrance ${modalImage}`}
            style={{
              position: 'absolute',
              top: modalPosition.y,
              left: modalPosition.x,
              transform: 'translate(-50%, -50%)',
              maxWidth: '100vw',
              maxHeight: '100vh',
              borderRadius: '10px',
              boxShadow: '0 0 20px white',
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Fragrances;