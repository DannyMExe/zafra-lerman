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
    width: 70vw;

    @media (max-width: 750px) {
        width: 100vw;
    }

    p {
        color: white;
        text-align: center;
    }
    .Collapsible {
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        text-align: center;
        font-size: 36px !important;

        p {
            text-align: left;
            @media (max-width: 750px) {
                font-size: 24px;
            }
        }
        .linkContainer {
            width: 100%;
            text-align: center;
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
                        More
                    </Link>
                </div>
            </Collapsible>
            {/* <CollapseImage></CollapseImage> */}
            <Image src={image} priority width={540} height={360} />
        </Container>
    );
};

export default Collapse;
