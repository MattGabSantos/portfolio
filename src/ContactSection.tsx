import React, { useEffect, useState, type FormEvent } from "react";

const ContactSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const contactEmail = "";

  const closeContact = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeContact();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!contactEmail) {
      setSubmissionMessage("Add your email address in ContactSection.tsx to enable sending.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const senderName = String(formData.get("name"));
    const senderEmail = String(formData.get("email"));
    const subject = String(formData.get("subject"));
    const message = String(formData.get("message"));
    const body = `From: ${senderName} (${senderEmail})\n\n${message}`;

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmissionMessage("Your email app is opening with your message.");
  };

  return (
    <section className="contact-section">
      <style>{`
        .contact-section {
          position: relative;
          display: grid;
          min-height: 240px;
          place-items: center;
          overflow: hidden;
          padding: 3.5rem 1.5rem;
          background: #183b36;
          color: #fff;
          text-align: center;
        }

        .contact-section::before,
        .contact-section::after {
          position: absolute;
          width: 260px;
          height: 260px;
          border: 1px solid rgba(237, 243, 240, 0.16);
          border-radius: 50%;
          content: "";
          pointer-events: none;
        }

        .contact-section::before {
          top: -180px;
          left: -70px;
        }

        .contact-section::after {
          right: -90px;
          bottom: -200px;
          width: 320px;
          height: 320px;
        }

        .contact-section-content {
          position: relative;
          z-index: 1;
          display: grid;
          justify-items: center;
          gap: 1rem;
          max-width: 620px;
        }

        .contact-section-content h2 {
          margin: 0;
          color: #fff;
          font-size: 2.25rem;
          font-weight: 750;
        }

        .contact-section-content p {
          margin: 0;
          color: #d2e0da;
          font-size: 1rem;
          line-height: 1.6;
        }

        .contact-open-button {
          margin-top: 0.35rem;
          border: 1px solid #f0a17f;
          border-radius: 4px;
          padding: 0.75rem 1.4rem;
          background: #f0a17f;
          color: #183b36;
          font: inherit;
          font-weight: 700;
          cursor: pointer;
          transition: background 160ms ease, transform 160ms ease;
        }

        .contact-open-button:hover {
          transform: translateY(-2px);
          background: #f6b398;
        }

        .contact-open-button:focus-visible,
        .contact-close:focus-visible,
        .contact-submit:focus-visible {
          outline: 3px solid #bf573d;
          outline-offset: 3px;
        }

        .contact-overlay {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: grid;
          place-items: center;
          overflow-y: auto;
          overscroll-behavior: contain;
          padding: 1rem;
          background: rgba(12, 24, 22, 0.72);
        }

        .contact-content {
          position: relative;
          width: min(100%, 680px);
          max-height: calc(100vh - 2rem);
          max-height: calc(100dvh - 2rem);
          overflow-y: auto;
          overscroll-behavior: contain;
          border-radius: 8px;
          padding: clamp(1.25rem, 4vw, 2.5rem);
          background: #edf3f0;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.3);
          color: #183b36;
        }

        .contact-close {
          position: sticky;
          top: 0;
          float: right;
          z-index: 1;
          display: grid;
          width: 2.5rem;
          height: 2.5rem;
          place-items: center;
          margin: -0.5rem -0.5rem 0.5rem 0.5rem;
          border: 0;
          border-radius: 50%;
          background: #d9e5df;
          color: #183b36;
          font-size: 1.5rem;
          line-height: 1;
          cursor: pointer;
        }

        .contact-close:hover {
          background: #c8d5cf;
        }

        .contact-content h2 {
          margin: 0 0 1rem;
          color: #183b36;
          font-size: 2.5rem;
          font-weight: 750;
          clear: both;
        }

        .contact-content > p {
          margin: 0 0 1.5rem;
          color: #52635e;
          font-size: 1.05rem;
          line-height: 1.7;
        }

        .contact-form {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.9rem 1rem;
        }

        .contact-field {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          min-width: 0;
        }

        .contact-field-wide {
          grid-column: 1 / -1;
        }

        .contact-field label {
          color: #183b36;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .contact-field input,
        .contact-field textarea {
          width: 100%;
          border: 1px solid #bdcdc5;
          border-radius: 4px;
          padding: 0.65rem 0.75rem;
          background: #fff;
          color: #183b36;
          font: inherit;
        }

        .contact-field input:focus,
        .contact-field textarea:focus {
          outline: 2px solid #42776a;
          outline-offset: 1px;
        }

        .contact-field textarea {
          min-height: 105px;
          resize: vertical;
        }

        .contact-submit {
          justify-self: start;
          border: 0;
          border-radius: 4px;
          padding: 0.7rem 1.1rem;
          background: #183b36;
          color: white;
          font: inherit;
          font-weight: 600;
          cursor: pointer;
        }

        .contact-submit:hover {
          background: #28584f;
        }

        .contact-status {
          grid-column: 1 / -1;
          margin: 0;
          color: #52635e;
          font-size: 0.9rem;
        }

        @media (max-width: 700px) {
          .contact-section-content h2,
          .contact-content h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .contact-form {
            grid-template-columns: 1fr;
          }

          .contact-field-wide {
            grid-column: auto;
          }
        }
      `}</style>

      <div className="contact-section-content">
        <h2>Let&apos;s work together</h2>
        <p>Have a project in mind or want to talk about an opportunity? I&apos;d love to hear from you.</p>
        <button className="contact-open-button" type="button" onClick={() => setIsOpen(true)}>Contact Me</button>
      </div>

      {isOpen && (
        <div className="contact-overlay" onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeContact();
        }}>
          <section className="contact-content" role="dialog" aria-modal="true" aria-labelledby="contact-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="contact-close" type="button" aria-label="Close contact form" onClick={closeContact} autoFocus>
              <span aria-hidden="true">&times;</span>
            </button>
            <h2 id="contact-title">Contact Me</h2>
            <p>Have a project in mind or want to connect? Send me a message.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field">
                <label htmlFor="contact-name">Your name</label>
                <input id="contact-name" name="name" type="text" autoComplete="name" required />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-email">Your email</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="contact-field contact-field-wide">
                <label htmlFor="contact-subject">Subject</label>
                <input id="contact-subject" name="subject" type="text" required />
              </div>
              <div className="contact-field contact-field-wide">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" required />
              </div>
              <button className="contact-submit" type="submit">Send message</button>
              {submissionMessage && <p className="contact-status" role="status">{submissionMessage}</p>}
            </form>
          </section>
        </div>
      )}
    </section>
  );
};

export default ContactSection;