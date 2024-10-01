import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import React from "react";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "https://github.com/datta-mnv",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50}/>
        },
        {
            id: "footer-1",
            url: "https://www.linkedin.com/in/naga-datta-manda/",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50}/>
        }
    ]
}

export default footerConfig
