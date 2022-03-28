import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

/*
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"

  - Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
*/

function Header() {
  return (
    <header>
      <nav className='navbar'>
        <img src="./logo512.png" alt='react-img' width="80px" className='image'></img>

        <ul className='ulStyle'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className='footer'>
      <small>© 2022 Kevin Shehu development. All rights reserved.</small>
    </footer>
  )
}

function BuildPage() {
  return (
    <div>
      {/* call react component */}
      <Header />

      <Footer />
    </div>
  )
}

// Render your list to the page
ReactDOM.render(<BuildPage />, document.querySelector('#root'));

reportWebVitals();