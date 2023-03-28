import React from "react";
import {
    FaTwitter,
    FaFacebookF,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
    /* background-color: #f2f2f2; */
    padding: 20px;

    .social-icons {
        display: flex;
        justify-content: center;
        gap: 5vw;
    }

    .social-icons a {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #333;
        font-size: 1.5em;
        margin: 0 10px;
        transition: color 0.2s ease-in-out;
        text-decoration: none;
        @media (max-width: 750px) {
            font-size: 1em;
        }
    }

    .social-icons a:hover {
        color: #1da1f2; /* Twitter blue */
    }

    .social-icons a:hover:nth-of-type(2) {
        color: #1877f2; /* Facebook blue */
    }

    .social-icons a:hover:nth-of-type(3) {
        color: #ff0000; /* YouTube red */
    }

    .social-icons a:hover:nth-of-type(4) {
        color: #0e76a8; /* LinkedIn blue */
    }

    .social-icons a span {
        margin-top: 5px;
        font-size: 0.8em;
    }
    .copyright {
        text-align: center;
        font-size: 1em;
        margin-top: 15px;
        @media (max-width: 750px) {
            font-size: 0.8em;
        }
    }
`;

function Footer() {
    return (
        <Container>
            <div className="social-icons">
                <a href="https://twitter.com/ZafraLerman">
                    <span>Twitter</span>
                    <FaTwitter />
                </a>
                <a href="https://www.facebook.com/MaltaConferencesFoundation/">
                    <span>Facebook</span>
                    <FaFacebookF />
                </a>
                <a href="https://www.youtube.com/@lermaninstitute">
                    <span>YouTube</span>
                    <FaYoutube />
                </a>
                <a href="https://www.linkedin.com/in/zafralerman/">
                    <span>LinkedIn</span>
                    <FaLinkedinIn />
                </a>
            </div>
            <div className="copyright">
                <p>Copyright &copy; 2023 Zafra Lerman</p>
                <p>info@zafralerman.com</p>
            </div>
        </Container>
    );
}

export default Footer;
