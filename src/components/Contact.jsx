import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  

    const form = useRef();
       const sendEmail = (e) => {
          e.preventDefault();
          
      
          emailjs
            .sendForm('service_jlkuejb', 'template_1rk4p4b', form.current, {
              publicKey: 'MPX31EdrkoPREy2q0',
            })
            .then(
              (result) => {
                console.log(result.text);
                alert("Message sent..")
                e.target.reset()
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
        };

  return (
    <>
      <style>
        {`
          .contact-container {
            min-height: 100vh;
            padding: 1.5rem;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }

          .contact-wrapper {
            max-width: 32rem;
            margin: 0 auto;
          }

          .contact-header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .contact-title {
            font-size: 3rem;
            font-weight: bold;
            background: linear-gradient(to right, #22d3ee, #3b82f6, #14b8a6);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 1.5rem;
          }

          .contact-subtitle {
            color: #bfdbfe;
            font-size: 1.125rem;
          }

          .form-container {
            background: rgba(30, 41, 59, 0.6);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(96, 165, 250, 0.3);
            border-radius: 0.75rem;
            padding: 2rem;
            box-shadow: 0 25px 50px -12px rgba(30, 58, 138, 0.2);
          }

          .form-group {
            margin-bottom: 1.5rem;
            position: relative;
          }

          .form-group:hover .input-overlay {
            opacity: 1;
          }

          .form-label {
            display: block;
            color: #67e8f9;
            font-size: 0.875rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
          }

          .form-input {
            width: 100%;
            background: rgba(15, 23, 42, 0.5);
            border: 2px solid rgba(59, 130, 246, 0.4);
            border-radius: 0.5rem;
            padding: 0.75rem 1rem;
            color: #a5f3fc;
            font-size: 1rem;
            transition: all 0.3s ease;
            box-sizing: border-box;
          }

          .form-input::placeholder {
            color: rgba(147, 197, 253, 0.6);
          }

          .form-input:focus {
            outline: none;
            border-color: #22d3ee;
            box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.2);
          }

          .form-textarea {
            resize: none;
            min-height: 8rem;
          }

          .input-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to right, transparent, rgba(34, 211, 238, 0.05), transparent);
            border-radius: 0.5rem;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }

          .submit-button {
            width: 100%;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 600;
            font-size: 1.125rem;
            transition: all 0.3s ease;
            border: 2px solid rgba(34, 211, 238, 0.5);
            cursor: pointer;
            margin-top: 1rem;
          }

          .submit-button:not(:disabled) {
            background: linear-gradient(to right, #0891b2, #2563eb);
            color: white;
          }

          .submit-button:not(:disabled):hover {
            background: linear-gradient(to right, #06b6d4, #3b82f6);
            transform: scale(1.02);
            box-shadow: 0 10px 25px -5px rgba(34, 211, 238, 0.3);
            border-color: #22d3ee;
          }

          .submit-button:disabled {
            background: #475569;
            cursor: not-allowed;
            color: #94a3b8;
          }

          .loading-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
          }

          .loading-spinner {
            width: 1.25rem;
            height: 1.25rem;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-top-color: white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }

          .status-message {
            margin-top: 1.5rem;
            padding: 1rem;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .status-validation {
            background: rgba(133, 77, 14, 0.3);
            border: 1px solid rgba(245, 158, 11, 0.5);
            color: #fbbf24;
          }

          .status-success {
            background: rgba(20, 83, 45, 0.3);
            border: 1px solid rgba(34, 197, 94, 0.5);
            color: #4ade80;
          }

          .status-error {
            background: rgba(127, 29, 29, 0.3);
            border: 1px solid rgba(239, 68, 68, 0.5);
            color: #f87171;
          }

          .status-icon {
            font-size: 1.25rem;
          }

          .status-title {
            font-weight: 600;
          }

          .status-description {
            color: rgba(134, 239, 172, 1);
            font-size: 0.875rem;
            margin-top: 0.25rem;
          }

          .contact-footer {
            margin-top: 2rem;
            text-align: center;
          }

          .footer-text {
            color: rgba(147, 197, 253, 0.7);
            font-size: 0.875rem;
          }

          @media (max-width: 640px) {
            .contact-title {
              font-size: 2.5rem;
            }
            
            .contact-container {
              padding: 1rem;
            }
            
            .form-container {
              padding: 1.5rem;
            }
          }
        `}
      </style>

      <div className="contact-container">
        <div className="contact-wrapper">
          {/* Header Section */}
          <div className="contact-header">
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-subtitle">
              Please fill out the form below to discuss any work opportunities
            </p>
          </div>

          {/* Main Form Container */}
          <form ref={form} onSubmit={sendEmail}>
          <div className="form-container">
            <div>
              {/* Name Input */}
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Enter your name"
                    className="form-input"
                  />
                  <div className="input-overlay"></div>
                </div>
              </div>

              {/* Email Input */}
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="your.email@example.com"
                    className="form-input"
                  />
                  <div className="input-overlay"></div>
                </div>
              </div>

              {/* Message Textarea */}
              <div className="form-group">
                <label className="form-label">Message</label>
                <div style={{ position: 'relative' }}>
                  <textarea
                    name="message"
                    
                    placeholder="Your message here..."
                    className="form-input form-textarea"
                  ></textarea>
                  <div className="input-overlay"></div>
                </div>
              </div>


              <button
                type='submit'
                className="submit-button"
                value="send"
              >
                Submit
              </button>
            </div>
          </div>
          </form>
         


          <div className="contact-footer">
            <p className="footer-text">
              I'll respond to your message within 24 hours
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;