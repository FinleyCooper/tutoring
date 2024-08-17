import React from 'react';

import './index.css';

class Header extends React.Component<{},{}> {
  render() {
    return (
      <header className="header">
        <h1 className="title">A-Level and GCSE Maths Tutoring</h1>
        <a href="#about">About me</a>
        <a href="#subjects">Subjects</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact" className="contact">Contact</a>
      </header>
    )
  }
}

export default Header