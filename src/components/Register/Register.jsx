import React, { useEffect } from "react";

function Register() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      data-fillout-id="rsD9BfSSLEus"
      data-fillout-embed-type="popup"
      data-fillout-button-color="#05325B"
      data-fillout-button-text="Register 🡭"
      data-fillout-button-size="small"
      data-fillout-dynamic-resize
    ></div>
  );
}

export default Register;