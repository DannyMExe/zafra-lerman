import React from "react";
import PhotoGallery from "../src/components/PhotoGallery";
import styled from "styled-components";
import VideoBar from "../src/components/VideoBar";
import Image from "next/image";

import RightsImage from "../public/homePage/sakharov.jpg";
import RightsImage2 from "../public/pictures/NikitinInDC2000.jpg";
import yuri from "../public/pictures/yuri.png";

const Container = styled.div`
    padding: 0 16px;
    @media (max-width: 750px) {
        /* padding: 0; */
    }
    h1 {
        text-align: center;
        font-size: 3rem;
        padding: 10px 0;
    }

    p {
        font-size: clamp(16px, 2vw, 35px);
        padding-bottom: 25px;
    }

    img {
        width: 100%;
        height: auto;
        align-self: center;
    }
`;

const SectionContainer = styled.div`
    display: flex;
    padding-bottom: 10px;
    .quote {
        font-style: italic;
    }
    p {
        font-size: clamp(16px, 2vw, 35px);
        flex: 0.6;
        @media (min-width: 750px) {
            padding-left: 5px;
        }
        span {
            font-weight: bold;
        }
    }
    div {
        font-size: clamp(16px, 2vw, 35px);
        flex: 0.6;
        @media (min-width: 750px) {
            padding-left: 5px;
        }
    }

    img {
        width: 40vw;
        height: auto;
        align-self: flex-start;
        flex: 0.4;
        @media (max-width: 750px) {
            /* padding-bottom: 20px; */
            width: 100%;
        }
    }
    .image {
        position: relative;
        width: 40vw;
        height: auto;
        align-self: flex-start;
        flex: 0.4;
        padding: 0;
        @media (max-width: 750px) {
            margin-bottom: 20px;
            width: 100%;
        }
        .imgTitle {
            background-color: rgba(0, 0, 0, 0.4);
            position: absolute;
            text-align: center;
            bottom: 0;
            left: 0;
            right: 0;
            color: white;
            margin-bottom: 6px;
            padding-bottom: 0;
        }
    }
    .yuri {
        width: 25vw;
        flex: 0.25;
    }
    .yuriCont {
        position: relative;
        width: 40vw;
        flex: 0.4;
        display: flex;
        justify-content: center;
        .yuriTitle {
            background-color: rgba(0, 0, 0, 0.4);
            width: 25vw;
            position: absolute;
            text-align: center;
            bottom: 0;
            color: white;
            padding-bottom: 0;
        }
        @media (max-width: 750px) {
            /* padding-bottom: 20px; */
            width: 100%;
        }
    }

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const HumanRights = () => {
    const videos = [
        {
            id: "CKQpQAnJjgk",
            title: "Professor Zafra Lerman with Aleksandr Nikitin on C-SPAN",
            desc: ``,
        },
        {
            id: "PiM2V7TYpjg",
            title: "Zafra Lerman Acceptance Speech for 2016 Sakharov Award",
            desc: "Zafra Lerman Acceptance Speech for 2016 Sakharov Award",
        },
        // { id: "", title: "Malta Group", desc: "" },
        // { id: "", title: "Malta Group", desc: "" },
    ];

    return (
        <Container>
            <h1>Human Rights</h1>
            <SectionContainer>
                <div className="image">
                    <Image src={RightsImage} />
                    <p className="imgTitle">Andrei Sakharov</p>
                </div>
                <p>
                    From 1986 to 2011, Zafra chaired the American Chemical
                    Society&#39;s Subcommittee on Scientific Freedom and Human
                    Rights. She worked on human rights cases in the former
                    Soviet Union, Russia, China, Guatemala, Cuba, Peru, South
                    Africa, Iran, and many more. She met with dissidents in many
                    of these countries. After meeting Andrei Sakharov in 1989
                    and taking his advice, she took a crash course in Russian to
                    facilitate her work with dissidents in the former Soviet
                    Union. At great risk to her safety, she succeeded in
                    preventing executions, releasing prisoners of conscience
                    from jail, and bringing dissidents to freedom. From 1987
                    until now, she has served as a Vice Chair for Chemistry on
                    the Board of the Committee of Concerned Scientists (CCS),
                    where she continues to be very active in human rights cases.
                </p>
            </SectionContainer>
            <SectionContainer>
                <div className="image">
                    <Image src={RightsImage2} />
                    <p className="imgTitle">Aleksandr Nikitin</p>
                </div>
                <p>
                    Professor Zafra Lerman appears on C-SPAN to introduce
                    Aleksandr Nikitin on a discussion on Radioactive
                    Contamination in the Former Soviet Union. Aleksandr Nikitin
                    was a Russian dissident that was arrested by the FSB after
                    publishing an article about spilling nuclear waste from
                    submarines into the sea. He appears in this picture giving a
                    lecture to 1,000 members of the American Chemical Society
                    (ACS) at the ACS National Meeting in Washington, DC in 2000,
                    before the charges against him were dropped. Nikitin spoke
                    about the problem of nuclear safety in Russia and potential
                    threats from radiation from various sources. Among the
                    topics he addressed were threats from spent submarine
                    reactors, environmental threats posed by poorly maintained
                    facilities, and government secrecy and inaction. He also
                    commented on a recent accident in which a Russian submarine
                    had become incapacitated in the Barents Sea. Recorded August
                    24, 2000
                </p>
            </SectionContainer>
            <SectionContainer>
                <div className="yuriCont">
                    <Image className="yuri" src={yuri} />
                    <p className="yuriTitle">Yuri Tarnopolsky</p>
                </div>
                <div>
                    <h4>
                        YURI TARNOPOLSKY (Soviet Union) A dissident emphasizes
                        the common dedication between the human rights activists
                        and the dissident in prison in a letter he wrote about
                        Zafra Lerman:
                    </h4>
                    <p className="quote">
                        … I often wondered what could make a person living in
                        freedom, safety, and comfort to fight for somebody
                        deprived all that and languishing somewhere on the other
                        side of the globe …. I realized that both the faraway
                        victim and his American guardian angel had something in
                        common. They had the same ability to go against the tide
                        and they did for science something which could hardly be
                        rationalized, an exhausting messy job of fixing its very
                        foundation, invisible on the pages of professional
                        journals: they kept science both human and humane.{" "}
                        <span>- Yuri Tarnopolsky</span>
                    </p>
                </div>
            </SectionContainer>
            <VideoBar videos={videos} />
        </Container>
    );
};

export default HumanRights;
