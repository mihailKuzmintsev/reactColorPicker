import React from 'react';
import './Footer.css';

export default function Footer(props) {
  const { emoji, paletteName } = props;

  return (
    <footer className="Footer">
      <span className="palette-name">{paletteName}</span>
      <span className="emoji">{emoji}</span>
    </footer>
  );
}
