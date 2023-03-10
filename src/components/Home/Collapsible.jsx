import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Collapsible from "react-collapsible";
import Trigger from "./Trigger";
import Link from "next/link";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 80vw;

    p {
        color: white;
        text-align: center;
    }
    .Collapsible {
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        text-align: center;
        font-size: 36px;
        p {
            text-align: center;
        }
        .linkContainer {
            width: 100%;
            text-align: right;
            padding-right: 15px;
            a {
                color: white;
                text-decoration: underline;
                :hover {
                    color: #3060a8;
                }
            }
        }
    }

    img {
        width: 100%;
        height: auto;
        max-width: none;
        padding: 0;
    }
`;

const Collapse = ({ title, image, info, link }) => {
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container>
            <Collapsible
                trigger={<Trigger title={title} isOpen={isOpen} />}
                onTriggerOpening={handleOpen}
                onTriggerClosing={handleOpen}
            >
                <p>{info}</p>
                <div className="linkContainer">
                    <Link href={link} style={{ cursor: "pointer" }}>
                        Learn More
                    </Link>
                </div>
            </Collapsible>
            {/* <CollapseImage></CollapseImage> */}
            <Image src={image} priority width={540} height={360} />
        </Container>
    );
};

export default Collapse;
