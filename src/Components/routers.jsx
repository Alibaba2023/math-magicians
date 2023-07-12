import './style.css';

function Routers() {
  return (
    <div className="container-routers">
      <nav className="header-items">
        <a href="/" className="header-title">Math Magicians</a>
        <div className="navigation-items-box">
          <a href="/" className="navigation-items">Home</a>
          <a href="/calculator" className="navigation-items">Calculator</a>
          <a href="/Quotes" className="navigation-items">Quotes</a>
        </div>
      </nav>
    </div>
  );
}

export default Routers;
