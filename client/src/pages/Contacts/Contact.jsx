import { useState } from "react";
import { Rotate, Slide } from "react-awesome-reveal";
// import Rotate from "react-reveal/Rotate";
// import LightSpeed from "react-reveal/LightSpeed";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { SiHackerrank, SiLeetcode } from "react-icons/si";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: ""
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, msg } = formData;

    if (!name || !email || !msg) {
      setStatusMessage("⚠️ All fields are required.");
      return;
    }

    // Show redirecting message
    // setStatusMessage("Redirecting to email client...");

    // Construct mailto link
    const mailtoLink = `mailto:ptl.pratik717@gmail.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(
      msg
    )}%0D%0A%0D%0AReply to: ${encodeURIComponent(email)}`;

    // Open user's email client after a short delay
    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 1000);

    // Hide the status message after 20 seconds
    setTimeout(() => {
      setStatusMessage("");
    }, 20000); // 20 seconds

    // Clear form fields
    setFormData({ name: "", email: "", msg: "" });
  };



  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     setStatusMessage("");
  //     await axios.post("http://localhost:3000/send-email", formData);
  //     setStatusMessage("Message sent successfully!");

  //     // Clear input fields
  //     setFormData({
  //       name: "",
  //       email: "",
  //       msg: ""
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     setStatusMessage("Failed to send message. Please try again later.");
  //   }
  // };
  return (
    <>
      <div className="container contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xk-6 col-sm-12">
              <div className="card1">
                {/* <div className="row border-line"> */}
                  <Slide>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/7269/7269950.png"
                      alt="contact"
                      style={{
                        width: "100%",
                        maxWidth: "250px",
                        height: "auto",
                        display: "block",
                        margin: "0 auto"
                      }}
                    />
                  </Slide>
                {/* </div> */}
              </div>
            <div className="row border-line"></div>
            </div>
            <div className="col-md-6 col-lg-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6 className="icons">
                        Social Media connect:
                        <a
                          href="https://www.linkedin.com/in/pratikpatel6/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-2"
                        >
                          <BsLinkedin
                            color="#0077B5"
                            size={30}
                            className="ms-1"
                          />
                        </a>
                        <a
                          href="https://github.com/PatelPratik39"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-2"
                        >
                          <BsGithub color="#24292e" size={30} />
                        </a>
                        <a
                          href="mailto:ptl.pratik717@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-2"
                        >
                          <MdEmail color="#4285F4" size={30} />
                        </a>
                        <a
                          href="https://www.hackerrank.com/profile/ptl_pratik717"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-2"
                        >
                          <SiHackerrank color="#24292e" size={30} />
                        </a>
                        <a
                          href="https://leetcode.com/u/pratik_3900/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-2"
                        >
                          <SiLeetcode color="#f29f67" size={30} />
                        </a>
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    {/* <form onSubmit={handleSubmit}>
                      <div className="row px-3">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mb-3"
                        />
                      </div>
                      <div className="row px-3">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your Email"
                          className="mb-3"
                        />
                      </div>
                      <div className="row px-3">
                        <textarea
                          type="text"
                          name="msg"
                          placeholder="Enter your Message"
                          value={formData.msg}
                          onChange={handleChange}
                          required
                          className="mb-3"
                        />
                      </div>
                      <div className="row px-3">
                        <button className="button" type="submit">
                          Send Message
                        </button>
                      </div>
                      {statusMessage && <p>{statusMessage}</p>}
                    </form> */}
                    <form onSubmit={handleSubmit} className="contact-form">
                      <div className="input-group">
                        <label>Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="input-group">
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="input-group">
                        <label>Message</label>
                        <textarea
                          name="msg"
                          placeholder="Enter your Message"
                          value={formData.msg}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <button className="send-button" type="submit">
                        Send Message
                      </button>
                      {statusMessage && (
                        <p className="status-message">{statusMessage}</p>
                      )}
                    </form>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
