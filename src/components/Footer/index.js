  
import React from "react";
import "./style.css";

function Footer(props) {
    return (
        // Sticky footer template
        <footer className="footer mt-auto py-3 text-center">
            {props.text}
        </footer>
    )
}

export default Footer;