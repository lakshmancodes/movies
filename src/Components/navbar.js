import React from 'react';

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: '#e50914',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <div>
        <a
          href="#"
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          MovieFlix
        </a>
      </div>
      <ul
        style={{
          display: 'flex',
          listStyleType: 'none',
          margin: '0',
          padding: '0',
        }}
      >
        <li style={{ marginRight: '20px' }}>
          <a
            href="#"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '18px',
            }}
          >
            Search Movies
          </a>
        </li>
        <li style={{ marginRight: '20px' }}>
          <a
            href="#"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '18px',
            }}
          >
            Favorites
          </a>
        </li>
        <li>
          <a
            href="#"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '18px',
            }}
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;