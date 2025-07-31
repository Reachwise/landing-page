import React, { useState } from "react";
import "../styles/JoinWaitlistModal.css";
import Button from "./Button";

const JoinWaitlistModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState("");
  const [position, setPosition] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = {
      name,
      email,
      industry,
      position,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbznzvzzohl9g2y9sYtdDLR_ard2vVV8gYEFSJ2kK8VRskfUQRUWE2tlN6Z0lycjrwac/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            name,
            email,
            industry,
            position,
          }),
        }
      );

      console.log("Form submitted!");
      setSuccessMessage("Successfully submitted!");
      setTimeout(() => {
        setSuccessMessage("");
        onClose();
      }, 1000);
    } catch (error) {
      alert("Something went wrong.");
      console.error(error);
    } finally {
      setIsSubmitting(false); // Re-enable button
    }
  };

  return (
    <div className="modal-overlay">
      {successMessage && <div className="toast-message">{successMessage}</div>}
      <div className="modal-box">
        <h2 className="modal-title">Ready to join</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="input-icon-wrapper">
            <span className="input-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 16.6667C4.44649 14.6021 7.08918 13.3333 10 13.3333C12.9108 13.3333 15.5535 14.6021 17.5 16.6667M13.75 6.25C13.75 8.32107 12.0711 10 10 10C7.92893 10 6.25 8.32107 6.25 6.25C6.25 4.17893 7.92893 2.5 10 2.5C12.0711 2.5 13.75 4.17893 13.75 6.25Z"
                  stroke="#939393"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-icon-wrapper">
            <span className="input-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66797 5.83301L8.47207 10.5959C9.02304 10.9816 9.29853 11.1744 9.59819 11.2491C9.86288 11.3151 10.1397 11.3151 10.4044 11.2491C10.7041 11.1744 10.9796 10.9816 11.5305 10.5959L18.3346 5.83301M5.66797 16.6663H14.3346C15.7348 16.6663 16.4348 16.6663 16.9696 16.3939C17.44 16.1542 17.8225 15.7717 18.0622 15.3013C18.3346 14.7665 18.3346 14.0665 18.3346 12.6663V7.33301C18.3346 5.93288 18.3346 5.23281 18.0622 4.69803C17.8225 4.22763 17.44 3.84517 16.9696 3.60549C16.4348 3.33301 15.7348 3.33301 14.3346 3.33301H5.66797C4.26784 3.33301 3.56777 3.33301 3.03299 3.60549C2.56259 3.84517 2.18014 4.22763 1.94045 4.69803C1.66797 5.23281 1.66797 5.93288 1.66797 7.33301V12.6663C1.66797 14.0665 1.66797 14.7665 1.94045 15.3013C2.18014 15.7717 2.56259 16.1542 3.03299 16.3939C3.56777 16.6663 4.26784 16.6663 5.66797 16.6663Z"
                  stroke="#939393"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-icon-wrapper">
            <span className="input-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.2513 9.16667H3.83464C3.36792 9.16667 3.13457 9.16667 2.95631 9.25749C2.79951 9.33739 2.67202 9.46487 2.59213 9.62167C2.5013 9.79993 2.5013 10.0333 2.5013 10.5V17.5M13.7513 9.16667H16.168C16.6347 9.16667 16.868 9.16667 17.0463 9.25749C17.2031 9.33739 17.3306 9.46487 17.4105 9.62167C17.5013 9.79993 17.5013 10.0333 17.5013 10.5V17.5M13.7513 17.5V5.16667C13.7513 4.23325 13.7513 3.76654 13.5696 3.41002C13.4099 3.09641 13.1549 2.84144 12.8413 2.68166C12.4848 2.5 12.0181 2.5 11.0846 2.5H8.91797C7.98455 2.5 7.51784 2.5 7.16132 2.68166C6.84771 2.84144 6.59275 3.09641 6.43296 3.41002C6.2513 3.76654 6.2513 4.23325 6.2513 5.16667V17.5M18.3346 17.5H1.66797M9.16797 5.83333H10.8346M9.16797 9.16667H10.8346M9.16797 12.5H10.8346"
                  stroke="#939393"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              required
            >
              <option value="">Industry</option>
              <option value="Tech">Tech</option>
              <option value="Finance">Finance</option>
              <option value="Healthcare">Healthcare</option>
            </select>
          </div>

          <div className="input-icon-wrapper">
            <span className="input-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3346 17.5V15.8333C18.3346 14.2801 17.2723 12.9751 15.8346 12.605M12.918 2.7423C14.1396 3.23679 15.0013 4.43443 15.0013 5.83333C15.0013 7.23224 14.1396 8.42988 12.918 8.92437M14.168 17.5C14.168 15.9469 14.168 15.1703 13.9142 14.5577C13.5759 13.741 12.927 13.092 12.1102 12.7537C11.4977 12.5 10.7211 12.5 9.16797 12.5H6.66797C5.11483 12.5 4.33826 12.5 3.72569 12.7537C2.90893 13.092 2.26002 13.741 1.9217 14.5577C1.66797 15.1703 1.66797 15.9469 1.66797 17.5M11.2513 5.83333C11.2513 7.67428 9.75892 9.16667 7.91797 9.16667C6.07702 9.16667 4.58464 7.67428 4.58464 5.83333C4.58464 3.99238 6.07702 2.5 7.91797 2.5C9.75892 2.5 11.2513 3.99238 11.2513 5.83333Z"
                  stroke="#939393"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            >
              <option value="">Position</option>
              <option value="Manager">Manager</option>
              <option value="Engineer">Engineer</option>
              <option value="Designer">Designer</option>
            </select>
          </div>

          <Button
            type="submit"
            variant="sec"
            className="hero-cta"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Join the Waitlist"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default JoinWaitlistModal;
