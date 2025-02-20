import React from "react";
import './stlye-components/layout.css'

const Layout = ({ children }) => {
  return (
    <div>

      <main className="section">
        <div className="container">{children}</div>
      </main>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>&copy; 2025 Mi Aplicación. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export { Layout };
