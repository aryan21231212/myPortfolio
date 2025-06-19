import React from 'react';

const About = () => {
  const [eyePosition, setEyePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const avatar = e.currentTarget;
    const rect = avatar.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const maxMove = 8;
    const x = Math.max(-maxMove, Math.min(maxMove, mouseX / 20));
    const y = Math.max(-maxMove, Math.min(maxMove, mouseY / 20));
    
    setEyePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setEyePosition({ x: 0, y: 0 });
  };
  return (
    <>
      <style jsx>{`
        .about-container {
          margin-top: 10rem;
          min-height: 50vh;
          position: relative;
          overflow: hidden;
          padding: 4rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          margin-bottom: 3rem;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          min-height: 50vh;
        }

        .content-col {
          flex: 0 0 50%;
          max-width: 50%;
          margin-left: 5%;
          padding: 3rem;
          position: relative;
          z-index: 2;
        }

        .avatar-col {
          flex: 0 0 35%;
          max-width: 35%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .avatar-container {
          width: 300px;
          height: 300px;
          position: relative;
          cursor: pointer;
        }

        .avatar-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle, rgba(45, 212, 191, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(20px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .avatar-container:hover .avatar-glow {
          opacity: 1;
        }

        .intro-text {
          color: #2dd4bf;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .name-title {
          font-weight: 900;
          letter-spacing: 1.2px;
          font-size: 3rem;
          margin-bottom: 0.5rem;
          color: white;
          text-shadow: 0 0 20px rgba(45, 212, 191, 0.1);
        }

        .name-highlight {
          color: #fbbf24;
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: none;
        }

        .subtitle {
          font-weight: 900;
          letter-spacing: 1.2px;
          opacity: 0.6;
          font-size: 2.6rem;
          margin-bottom: 1.5rem;
          color: #cbd5e1;
        }

        .description {
          margin-top: 1rem;
          opacity: 0.8;
          color: #e2e8f0;
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .work-btn {
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #2dd4bf 0%, #3b82f6 100%);
          border: 2px solid transparent;
          color: white;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .work-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .work-btn:hover::before {
          left: 100%;
        }

        .work-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(45, 212, 191, 0.3);
          border-color: #2dd4bf;
        }

        .work-btn:active {
          transform: translateY(0);
        }

        /* Robotic grid pattern */
        .grid-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: 
            linear-gradient(rgba(45, 212, 191, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45, 212, 191, 0.3) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: 1;
        }

        /* Decorative elements */
        .bg-decoration-1 {
          position: absolute;
          top: 10%;
          left: 5%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(45, 212, 191, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(40px);
        }

        .bg-decoration-2 {
          position: absolute;
          bottom: 10%;
          right: 5%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(60px);
        }

        .bg-decoration-3 {
          position: absolute;
          top: 50%;
          right: 10%;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(30px);
        }

        /* Glowing accent lines */
        .accent-line-1 {
          position: absolute;
          top: 20%;
          left: 0;
          width: 200px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #2dd4bf, transparent);
          opacity: 0.3;
        }

        .accent-line-2 {
          position: absolute;
          bottom: 30%;
          right: 0;
          width: 150px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #fbbf24, transparent);
          opacity: 0.3;
        }

        /* Responsive design */
        @media (max-width: 992px) {
          .content-col {
            flex: 0 0 100%;
            max-width: 100%;
            margin-left: 0;
            padding: 2rem;
            order: 2;
          }

          .avatar-col {
            flex: 0 0 100%;
            max-width: 100%;
            order: 1;
            margin-bottom: 2rem;
          }

          .avatar-container {
            width: 250px;
            height: 250px;
          }

          .name-title {
            font-size: 2.5rem;
          }

          .subtitle {
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .about-container {
            margin-top: 5rem;
            padding: 2rem 0;
          }

          .content-col {
            flex: 0 0 95%;
            max-width: 95%;
            margin-left: 2.5%;
            padding: 1.5rem;
            order: 2;
          }

          .avatar-col {
            flex: 0 0 100%;
            max-width: 100%;
            order: 1;
          }

          .avatar-container {
            width: 200px;
            height: 200px;
          }

          .name-title {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1.6rem;
          }

          .description {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .name-title {
            font-size: 1.8rem;
          }

          .subtitle {
            font-size: 1.4rem;
          }

          .work-btn {
            width: 100%;
            padding: 0.8rem 1.5rem;
          }
        }
      `}</style>

      <div className="about-container">
        <div className="grid-overlay"></div>
        <div className="bg-decoration-1"></div>
        <div className="bg-decoration-2"></div>
        <div className="bg-decoration-3"></div>
        <div className="accent-line-1"></div>
        <div className="accent-line-2"></div>
        
        <div className="container">
          <div className="row">
            <div className="content-col">
              <p className="intro-text">Hi, my name is</p>
              <h1 className="name-title">
                <span className="name-highlight">Aryan</span> Pratap Singh
              </h1>
              <h1 className="subtitle">I build things for the Web.</h1>
              <p className="description">
                I'm a software engineer specializing in building &#40;and occasionally designing&#41; <br />
                exceptional digital experiences. Currently, I'm focused on building <br />
                accessible, human-centered products.
              </p>
              <button className="work-btn"><a style={{textDecoration:"none",color:"white"}} href="https://github.com/aryan21231212">Check out my work!</a></button>
            </div>
            
            <div className="avatar-col">
              <div 
                className="avatar-container"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="avatar-glow"></div>
                
                <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                  {/* Background circle with tech pattern */}
                  <defs>
                    <radialGradient id="avatarBg" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(45, 212, 191, 0.1)" />
                      <stop offset="100%" stopColor="rgba(15, 23, 42, 0.8)" />
                    </radialGradient>
                    <pattern id="techPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <rect width="10" height="10" fill="none" stroke="rgba(45, 212, 191, 0.1)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  
                  {/* Background */}
                  <circle cx="150" cy="150" r="140" fill="url(#avatarBg)" stroke="rgba(45, 212, 191, 0.3)" strokeWidth="2" />
                  <circle cx="150" cy="150" r="135" fill="url(#techPattern)" opacity="0.3" />
                  
                  {/* Head */}
                  <ellipse cx="150" cy="130" rx="55" ry="65" fill="#fbbf24" stroke="rgba(45, 212, 191, 0.2)" strokeWidth="1" />
                  
                  {/* Hair */}
                  <path d="M95 100 Q150 80 205 100 Q200 85 150 75 Q100 85 95 100 Z" fill="#1e293b" />
                  <path d="M100 95 Q150 85 200 95 L200 110 Q150 100 100 110 Z" fill="#0f172a" />
                  
                  {/* Glasses frame */}
                  <rect x="110" y="115" width="35" height="25" rx="12" fill="none" stroke="#2dd4bf" strokeWidth="3" />
                  <rect x="155" y="115" width="35" height="25" rx="12" fill="none" stroke="#2dd4bf" strokeWidth="3" />
                  <line x1="145" y1="127" x2="155" y2="127" stroke="#2dd4bf" strokeWidth="3" />
                  
                  {/* Glasses lenses with tech glow */}
                  <rect x="112" y="117" width="31" height="21" rx="10" fill="rgba(45, 212, 191, 0.1)" stroke="rgba(45, 212, 191, 0.3)" strokeWidth="1" />
                  <rect x="157" y="117" width="31" height="21" rx="10" fill="rgba(45, 212, 191, 0.1)" stroke="rgba(45, 212, 191, 0.3)" strokeWidth="1" />
                  
                  {/* Eyes (with dynamic movement) */}
                  <g>
                    <circle cx={118 + eyePosition.x} cy={125 + eyePosition.y} r="3" fill="#0f172a" />
                    <circle cx={116 + eyePosition.x} cy={123 + eyePosition.y} r="1" fill="white" />
                  </g>
                  <g>
                    <circle cx={163 + eyePosition.x} cy={125 + eyePosition.y} r="3" fill="#0f172a" />
                    <circle cx={161 + eyePosition.x} cy={123 + eyePosition.y} r="1" fill="white" />
                  </g>
                  
                  {/* Nose */}
                  <path d="M148 135 L152 145 L148 148 Z" fill="rgba(0, 0, 0, 0.2)" />
                  
                  {/* Mouth */}
                  <path d="M140 155 Q150 165 160 155" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Body/Shirt */}
                  <path d="M95 195 Q150 180 205 195 L205 280 Q150 290 95 280 Z" fill="#1e293b" stroke="rgba(45, 212, 191, 0.3)" strokeWidth="1" />
                  

                  <g opacity="0.4">
                    <line x1="130" y1="210" x2="170" y2="210" stroke="#2dd4bf" strokeWidth="1" />
                    <circle cx="135" cy="210" r="2" fill="#2dd4bf" />
                    <circle cx="165" cy="210" r="2" fill="#2dd4bf" />
                    <line x1="135" y1="210" x2="135" y2="230" stroke="#2dd4bf" strokeWidth="1" />
                    <line x1="165" y1="210" x2="165" y2="230" stroke="#2dd4bf" strokeWidth="1" />
                    <line x1="125" y1="230" x2="175" y2="230" stroke="#2dd4bf" strokeWidth="1" />
                  </g>
                  

                  <g opacity="0.6">
                    <rect x="120" y="250" width="20" height="4" rx="2" fill="#2dd4bf" />
                    <rect x="160" y="250" width="20" height="4" rx="2" fill="#2dd4bf" />
                    <circle cx="150" cy="265" r="3" fill="none" stroke="#2dd4bf" strokeWidth="1" />
                    <circle cx="150" cy="265" r="1" fill="#2dd4bf" />
                  </g>
                  

                  <g opacity="0.3">
                    <rect x="80" y="120" width="8" height="8" fill="none" stroke="#2dd4bf" strokeWidth="1" transform="rotate(45 84 124)" />
                    <rect x="212" y="140" width="6" height="6" fill="none" stroke="#fbbf24" strokeWidth="1" transform="rotate(45 215 143)" />
                    <circle cx="220" cy="180" r="3" fill="none" stroke="#2dd4bf" strokeWidth="1" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;