import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ContactUs() {
  const [statusMessage, setStatusMessage] = useState('');
  const [showStatus, setShowStatus] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mzzvrgyl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setStatusMessage('Your message has been successfully sent');
        form.reset();
      } else {
        setStatusMessage('Your message was not successfully sent');
      }
    } catch (error) {
      setStatusMessage('Your message was not successfully sent');
    }

    setShowStatus(true);
    setTimeout(() => {
      setShowStatus(false);
    }, 3000);
  };

  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'black',
      minHeight: '100vh',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <Link
        to="/"
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          padding: '10px 20px',
          backgroundColor: 'rgba(0, 0, 255, 0.5)',
          backdropFilter: 'blur(8px)',
          borderRadius: '8px',
          color: 'gold',
          fontWeight: 'bold',
          textDecoration: 'none',
          zIndex: 1000,
        }}
      >
        Home
      </Link>
      <h1>Contact Us</h1>
      <p>If you have any questions or want to get in touch, please contact us!</p>
      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ color: '#b8860b' }}>Telephone</h2>
        <p>+27 61 449 4985</p>
        <h2 style={{ color: '#b8860b', marginTop: '1.5rem' }}>Working Hours</h2>
        <p>MON-FRI : 08:00 - 16:00</p>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{ marginTop: '3rem' }}
      >
        <h2 style={{ color: '#b8860b' }}>FILL YOUR DETAILS</h2>
        <table
          style={{
            width: '100%',
            marginTop: '1rem',
            color: 'white',
            borderCollapse: 'collapse',
            tableLayout: 'fixed',
          }}
        >
          <colgroup>
            <col style={{ width: '120px' }} />
            <col style={{ width: 'calc(100% - 120px)' }} />
          </colgroup>
          <tbody>
            <tr>
              <td style={{ padding: '8px', borderBottom: '1px solid #b8860b' }}>
                NAME
              </td>
              <td style={{ padding: '8px', borderBottom: '1px solid #b8860b' }}>
                <input
                  type="text"
                  name="name"
                  style={{
                    width: '100%',
                    padding: '6px',
                    borderRadius: '4px',
                    border: '1px solid #b8860b',
                    backgroundColor: 'black',
                    color: 'white',
                  }}
                  required
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px', borderBottom: '1px solid #b8860b' }}>
                SURNAME
              </td>
              <td style={{ padding: '8px', borderBottom: '1px solid #b8860b' }}>
                <input
                  type="text"
                  name="surname"
                  style={{
                    width: '100%',
                    padding: '6px',
                    borderRadius: '4px',
                    border: '1px solid #b8860b',
                    backgroundColor: 'black',
                    color: 'white',
                  }}
                  required
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px', borderBottom: '1px solid #b8860b' }}>
                EMAIL
              </td>
              <td style={{ padding: '8px', borderBottom: '1px solid #b8860b' }}>
                <input
                  type="email"
                  name="email"
                  style={{
                    width: '100%',
                    padding: '6px',
                    borderRadius: '4px',
                    border: '1px solid #b8860b',
                    backgroundColor: 'black',
                    color: 'white',
                  }}
                  required
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>PHONE</td>
              <td style={{ padding: '8px' }}>
                <input
                  type="tel"
                  name="phone"
                  style={{
                    width: '100%',
                    padding: '6px',
                    borderRadius: '4px',
                    border: '1px solid #b8860b',
                    backgroundColor: 'black',
                    color: 'white',
                  }}
                />
              </td>
            </tr>
            <tr>
              <td
                style={{ padding: '8px', color: '#b8860b', verticalAlign: 'top' }}
              >
                HOW CAN WE HELP YOU
              </td>
              <td style={{ padding: '8px' }}>
                <textarea
                  name="helpMessage"
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '6px',
                    borderRadius: '4px',
                    border: '1px solid #b8860b',
                    backgroundColor: 'black',
                    color: 'white',
                    resize: 'vertical',
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          type="submit"
          style={{
            marginTop: '1.5rem',
            padding: '10px 20px',
            backgroundColor: '#b8860b',
            color: 'black',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
      {showStatus && (
        <div
          style={{
            marginTop: '1rem',
            color: 'gold',
            fontWeight: 'bold',
            fontSize: '1.2rem',
          }}
        >
          {statusMessage}
        </div>
      )}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: '2px',
              height: '2px',
              backgroundColor: 'white',
              borderRadius: '50%',
              opacity: Math.random(),
              animation: `twinkle 2s infinite alternate`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      <style>
        {`
        @keyframes twinkle {
          from { opacity: 0.2; }
          to { opacity: 1; }
        }
      `}
      </style>
    </div>
  );
}

export default ContactUs;