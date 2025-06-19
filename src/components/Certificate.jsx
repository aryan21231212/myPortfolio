import React, { useState } from 'react';

const Certificate = () => {
  const [certificates] = useState([
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Tech Academy",
      date: "2025",
      description: "Comprehensive certification covering modern web technologies including React, Node.js, databases, and deployment strategies.",
      skills: ["React", "Node.js", "MongoDB", "REST APIs"]
    },
    {
      id: 2,
      title: "SQL for Data Management",
      issuer: "HackerRank",
      date: "2024",
      description: "Certification demonstrating proficiency in SQL queries, data manipulation, and database management using MySQL and PostgreSQL.",
      skills: ["SQL", "MySQL", "Data Manipulation"]
    }
    ,
    {
      id: 3,
      title: "Problem Solving",
      issuer: "HackerRank",
      date: "2024",
      description: "Certification showcasing strong analytical and algorithmic thinking through solving data structures and algorithm challenges.",
      skills: ["Algorithms", "Data Structures", "Problem Solving"]
    }
    
  ]);

  const [certImages, setCertImages] = useState({
    1:"/images/mern.jpg",
    2:"/images/sql.jpg",
    3:"/images/problemS.jpg"
  });

  // const handleImageUpload = (certId, event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setCertImages(prev => ({
  //         ...prev,
  //         [certId]: e.target.result
  //       }));
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <>
      <style jsx>{`
        .certificate-container {
          min-height: 100vh;
          padding: 4rem 1rem;
          position: relative;
          overflow: hidden;
        }

        .title {
          margin-top: 2rem;
          text-align: center;
          font-size: 3rem;
          font-weight: bold;
          color: white;
          margin-bottom: 4rem;
          letter-spacing: 0.1em;
        }

        .title-accent {
          color: #2dd4bf;
        }

        .cards-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .certificate-card {
          position: relative;
          overflow: hidden;
          border-radius: 0.5rem;
          border: 1px solid #475569;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .certificate-card:hover {
          border-color: #2dd4bf;
          transform: scale(1.05);
          box-shadow: 0 25px 50px rgba(45, 212, 191, 0.2);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.5) 100%);
          opacity: 0.9;
        }

        .grid-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.1;
          background-image: 
            linear-gradient(rgba(45, 212, 191, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45, 212, 191, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .card-content {
          position: relative;
          padding: 1.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .certificate-icon {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .icon-badge {
          width: 4rem;
          height: 4rem;
          background: linear-gradient(135deg, #2dd4bf 0%, #3b82f6 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        .icon-svg {
          width: 2rem;
          height: 2rem;
          color: white;
        }

        .certificate-image-container {
          width: 100%;
          height: 150px;
          border: 2px dashed #475569;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .certificate-image-container:hover {
          border-color: #2dd4bf;
        }

        .certificate-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0.25rem;
        }

        .image-placeholder {
          color: #94a3b8;
          text-align: center;
          font-size: 0.875rem;
        }

        .file-input {
          position: absolute;
          inset: 0;
          opacity: 0;
          cursor: pointer;
        }

        .cert-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: white;
          margin-bottom: 0.5rem;
          text-align: center;
          transition: color 0.3s ease;
        }

        .certificate-card:hover .cert-title {
          color: #2dd4bf;
        }

        .cert-meta {
          text-align: center;
          margin-bottom: 1rem;
        }

        .cert-issuer {
          color: #2dd4bf;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .cert-date {
          color: #94a3b8;
          font-size: 0.875rem;
        }

        .cert-description {
          color: #cbd5e1;
          font-size: 0.875rem;
          line-height: 1.6;
          margin-bottom: 1rem;
          flex-grow: 1;
        }

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .skill-tag {
          padding: 0.25rem 0.5rem;
          background-color: #374151;
          color: #2dd4bf;
          font-size: 0.75rem;
          border-radius: 9999px;
          border: 1px solid #475569;
          transition: border-color 0.2s ease;
        }

        .skill-tag:hover {
          border-color: #2dd4bf;
        }

        .accent-line {
          height: 0.25rem;
          background: linear-gradient(90deg, transparent 0%, #2dd4bf 50%, transparent 100%);
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }

        .certificate-card:hover .accent-line {
          opacity: 1;
        }

        .hover-glow {
          position: absolute;
          inset: 0;
          border-radius: 0.5rem;
          background: linear-gradient(90deg, rgba(45, 212, 191, 0) 0%, rgba(45, 212, 191, 0.05) 50%, rgba(59, 130, 246, 0) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .certificate-card:hover .hover-glow {
          opacity: 1;
        }

        .bg-decoration-1 {
          position: absolute;
          top: 5rem;
          left: 2.5rem;
          width: 8rem;
          height: 8rem;
          background-color: rgba(45, 212, 191, 0.05);
          border-radius: 50%;
          filter: blur(3rem);
        }

        .bg-decoration-2 {
          position: absolute;
          bottom: 5rem;
          right: 2.5rem;
          width: 10rem;
          height: 10rem;
          background-color: rgba(59, 130, 246, 0.05);
          border-radius: 50%;
          filter: blur(3rem);
        }

        @media (max-width: 768px) {
          .title {
            font-size: 2rem;
          }
          
          .cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="certificate-container">
        <h1 className="title">
          MY <span className="title-accent">CREDENTIALS</span>
        </h1>
        
        <div className="cards-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="card-overlay"></div>
              <div className="grid-pattern"></div>
              
              <div className="card-content">
                <div className="certificate-icon">
                  {/* <div className="icon-badge">
                    <svg className="icon-svg" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div> */}
                </div>

                <div className="certificate-image-container">
                  {certImages[cert.id] ? (
                    <img src={certImages[cert.id]} alt="Certificate" className="certificate-image" />
                  ) : (
                    <div className="image-placeholder">
                      Click to upload certificate image
                    </div>
                  )}
                  {/* <input 
                    type="file" 
                    accept="image/*" 
                    className="file-input"
                    onChange={(e) => handleImageUpload(cert.id, e)}
                  /> */}
                </div>

                <h3 className="cert-title">{cert.title}</h3>

                <div className="cert-meta">
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                </div>

                <p className="cert-description">{cert.description}</p>

                <div className="skills-container">
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="accent-line"></div>
              </div>

              <div className="hover-glow"></div>
            </div>
          ))}
        </div>

        <div className="bg-decoration-1"></div>
        <div className="bg-decoration-2"></div>
      </div>
    </>
  );
};

export default Certificate;