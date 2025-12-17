import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <h3>Drivdiag Motors</h3>
          <p>Diagnostic et services automobiles.</p>
          <p>Email: contact@drivdiagmotors.com</p>
          <p>Tél: +33 1 23 45 67 89</p>
        </div>
        <div className="footer-col">
          <h4>Suivez-nous</h4>
          <ul>
            <li><a href="#" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="#" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="#" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Newsletter</h4>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email" className="sr-only">Email</label>
            <input id="email" type="email" placeholder="Votre email" required />
            <button type="submit">S'inscrire</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
