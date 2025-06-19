import React from 'react';

const Nav = () => {
  function getScrollOffset(baseOffset) {
    return window.innerWidth < 568 ? baseOffset + 1400 : baseOffset;
  }
  
  function certificate() {
    window.scrollTo({
      top: getScrollOffset(2000),
      behavior: 'smooth'
    });
  }
  
  function contact() {
    window.scrollTo({
      top: getScrollOffset(2900),
      behavior: 'smooth'
    });
  }
  
  function portfolio() {
    window.scrollTo({
      top: getScrollOffset(1000),
      behavior: 'smooth'
    });
  }
  

  return (
    <>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          font-size: 1.25rem;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(45, 212, 191, 0.2);
          transition: all 0.3s ease;
        }

        .navbar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #2dd4bf, transparent);
          opacity: 0.5;
        }

        .container-fluid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand {
          font-size: 2rem;
          color: #2dd4bf !important;
          font-weight: 900;
          letter-spacing: 2px;
          text-decoration: none !important;
          position: relative;
          transition: all 0.3s ease;
        }

        .navbar-brand::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #2dd4bf, #3b82f6);
          transition: width 0.3s ease;
        }

        .navbar-brand:hover::after {
          width: 100%;
        }

        .navbar-brand:hover {
          text-shadow: 0 0 20px rgba(45, 212, 191, 0.5);
          transform: translateY(-1px);
        }

        .navbar-toggler {
          border: 1px solid rgba(45, 212, 191, 0.5);
          background: transparent;
          padding: 0.5rem;
          border-radius: 0.375rem;
          transition: all 0.3s ease;
        }

        .navbar-toggler:hover {
          border-color: #2dd4bf;
          box-shadow: 0 0 15px rgba(45, 212, 191, 0.3);
        }

        .navbar-toggler:focus {
          box-shadow: 0 0 0 0.2rem rgba(45, 212, 191, 0.25);
        }

        .navbar-toggler-icon {
          background-image: none;
          width: 1.5rem;
          height: 1.5rem;
          position: relative;
        }

        .navbar-toggler-icon::before,
        .navbar-toggler-icon::after,
        .navbar-toggler-icon {
          display: block;
          content: '';
          background-color: white;
          height: 2px;
          transition: all 0.3s ease;
        }

        .navbar-toggler-icon::before {
          position: absolute;
          top: -6px;
          left: 0;
          right: 0;
        }

        .navbar-toggler-icon::after {
          position: absolute;
          bottom: -6px;
          left: 0;
          right: 0;
        }

        .navbar-collapse {
          flex-grow: 0;
        }

        .navbar-nav {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-link {
          color: white !important;
          margin-right: 2rem;
          text-decoration: none !important;
          position: relative;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          transition: all 0.3s ease;
          font-weight: 500;
          cursor: pointer;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(45, 212, 191, 0.1), rgba(59, 130, 246, 0.1));
          border-radius: 0.375rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nav-link:hover::before {
          opacity: 1;
        }

        .nav-link:hover {
          color: #2dd4bf !important;
          transform: translateY(-2px);
          text-shadow: 0 0 10px rgba(45, 212, 191, 0.3);
        }

        .nav-link:active {
          transform: translateY(0);
        }

        .resume-btn {
          color: white !important;
          margin-right: 2rem;
          border: 2px solid rgba(45, 212, 191, 0.5) !important;
          border-radius: 0.375rem !important;
          text-decoration: none !important;
          padding: 0.5rem 1.5rem;
          transition: all 0.3s ease;
          font-weight: 600;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .resume-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(45, 212, 191, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .resume-btn:hover::before {
          left: 100%;
        }

        .resume-btn:hover {
          color: white !important;
          border-color: #2dd4bf !important;
          background: linear-gradient(135deg, rgba(45, 212, 191, 0.1), rgba(59, 130, 246, 0.1));
          box-shadow: 0 0 20px rgba(45, 212, 191, 0.3);
          transform: translateY(-2px);
        }


        @media (max-width: 991px) {
          .navbar-collapse {
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid rgba(45, 212, 191, 0.2);
            background: rgba(15, 23, 42, 0.98);
            border-radius: 0.5rem;
            margin-top: 0.5rem;
          }

          .navbar-nav {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .nav-link {
            margin-right: 0;
            width: 100%;
            text-align: left;
          }

          .resume-btn {
            margin-right: 0;
            width: 100%;
            text-align: center;
            margin-top: 0.5rem;
          }
        }

        @media (max-width: 768px) {
          .container-fluid {
            padding: 0 1rem;
          }

          .navbar-brand {
            font-size: 1.5rem;
          }
        }


        .navbar.scrolled {
          background: rgba(15, 23, 42, 0.98);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }


        .nav-link.active {
          color: #2dd4bf !important;
          background: rgba(45, 212, 191, 0.1);
        }

        .nav-link.active::before {
          opacity: 1;
        }
      `}</style>

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">DEVELOPER</a>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNavAltMarkup" 
            aria-controls="navbarNavAltMarkup" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#">About</a>
              <a className="nav-link" onClick={portfolio} href="#">Portfolio</a>
              <a className="nav-link" onClick={certificate} href="#">Certificates</a>
              <a className="nav-link" onClick={contact} href="#">Contact</a>
              <a className="nav-link resume-btn" href="https://www.linkedin.com/in/aryanpsingh/">Resume</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;