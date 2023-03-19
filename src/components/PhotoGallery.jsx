import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";

const GalleryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */

    .gallery-item {
        width: 25%;
        margin-bottom: 20px;
        background-color: #0099ff;
        display: flex;
        justify-content: center;
    }

    .gallery-item img {
        width: 100%;
        height: auto;
        object-fit: cover;
        align-self: flex-start;
    }

    .loaded {
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
    }
`;

const PhotoGallery = ({ images }) => {
    const [loadedImages, setLoadedImages] = useState([]);

    useEffect(() => {
        setLoadedImages([]);
    }, [images]);

    const handleImageLoad = (index) => {
        setLoadedImages((prevState) => [...prevState, index]);
    };

    return (
        <GalleryContainer>
            {images.map((image, index) => (
                <div key={index} className="gallery-item">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        onLoad={() => handleImageLoad(index)}
                        className={loadedImages.includes(index) ? "loaded" : ""}
                    />
                </div>
            ))}
        </GalleryContainer>
    );
};
export default PhotoGallery;
