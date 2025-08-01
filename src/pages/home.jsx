import { Link } from 'react-router-dom';

function Home() {
  const backgroundStyle = {
    position: 'relative',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '2rem',
    color: '#4a4a4a',
    minHeight: '100vh',
    overflow: 'hidden',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const backgroundImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: "url('/images/1.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(5px)',
    zIndex: -1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'rgba(249, 244, 241, 0.85)',
    padding: '2rem',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    boxSizing: 'border-box',
  };

  const navBoxStyle = {
    padding: '10px 20px',
    backgroundColor: '#ccc',
    borderRadius: '5px',
    textDecoration: 'none',
    color: '#000',
    fontWeight: 'bold',
  };

  return (
    <div style={backgroundStyle}>
      <div style={backgroundImageStyle}></div>

      <div style={contentStyle}>
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            color: '#b76e79',
          }}
        >
          THE SCENT STUDIO
        </h1>
        <h2
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            marginBottom: '1.5rem',
          }}
        >
          Experience the Essence of Elegance
        </h2>
        <p style={{ fontSize: '1.125rem' }}>
          Welcome to THE SCENT STUDIO, your premier destination for exquisite
          perfumes crafted to captivate your senses and elevate your presence.
          Discover our unique blends that embody sophistication, passion, and
          timeless beauty.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '2rem',
          zIndex: 1,
        }}
      >
        <p
          style={{
            marginBottom: '8px',
            fontStyle: 'italic',
            maxWidth: '600px',
            color: 'pink',
            fontWeight: '600',
            fontSize: '1.25rem',
            textAlign: 'center',
            fontFamily: 'cursive',
          }}
        >
          Discover our exquisite collection of perfumes, each crafted to
          captivate your senses and elevate your presence.
        </p>
        <Link
          to="/fragrances"
          style={{
            ...navBoxStyle,
            marginBottom: '40px',
            width: '150px',
            fontSize: '1.2rem',
            textAlign: 'center',
          }}
        >
          Fragrances
        </Link>
      </div>

      {/* Fixed Contact Button at Bottom */}
      <div
        className="fixed-contact-button"
        style={{
          left: 0,
          right: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 1000,
        }}
      >
        <Link
          to="/contact"
          style={{
            ...navBoxStyle,
            width: '195px',
            fontSize: '1.56rem',
            textAlign: 'center',
          }}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Home;

