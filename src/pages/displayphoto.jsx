import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { IoBagHandleOutline } from 'react-icons/io5';
import { IoMdShare } from 'react-icons/io';

const FullScreenContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

const StyledContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledImage = styled.img`
  height: 450px;
  object-fit: fill;
  aspect-ratio: 9/16;
  border-radius: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 5px;
`;

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DisplayContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

const Box = styled.div`
  width: 45%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0e1e0;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const MiniatureImage = styled.img`
  height: 150px;
  width: 120px;
  padding: 2% 4%;
  border-radius: 10px;
  margin: 5px;
`;

const MiniatureText = styled.h5`
  border: 2px solid white;
  background-color: white;
  padding: 5px;
  border-radius: 10px;
  font-weight: 500;
  margin-top: 10px;
`;

const PhotoCarousel = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  margin-top: 10px;
  overflow: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ShareButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 10px;
  border: none;
  color: black;
  cursor: pointer;
  background: transparent;
  paddin: 5%;
  border-radius: 50%;
`;

const AddToBagButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: var(--primary-color);
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 20px;
`;
const CircleIndicator = styled.div`
  height: 10px;
  width: 10px;
  background-color: ${(props) => (props.active ? 'var(--primary-color)' : 'lightgray')};
  border-radius: 50%;
  display: inline-block;
  margin: 0 2px;
`;

const DisplayPhoto = () => {
  const [uploadedPhotos, setUploadedPhotos] = useState(
    JSON.parse(localStorage.getItem('uploadedPhotos')) || { photo: [], dress: [] },
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const newImageRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    if (newImageRef.current) {
      newImageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [uploadedPhotos]);
  useEffect(() => {
    const photoData = localStorage.getItem('uploadedPhoto');
    if (photoData) {
      setUploadedPhotos((prevState) => ({
        ...prevState,
        photo: prevState.photo.length > 0 ? [...prevState.photo] : [photoData],
      }));
    }
  }, []);

  const handleAddPhoto = (event, section) => {
    const files = event.target.files;
    const newPhotos = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onload = function (e) {
        newPhotos.push(e.target.result);
        if (i === files.length - 1) {
          setUploadedPhotos({
            ...uploadedPhotos,
            [section]: [...uploadedPhotos[section], ...newPhotos],
          });
          localStorage.setItem(
            'uploadedPhotos',
            JSON.stringify({
              ...uploadedPhotos,
              [section]: [...uploadedPhotos[section], ...newPhotos],
            }),
          );
        }
      };

      reader.readAsDataURL(files[i]);
    }
  };

  return (
    <FullScreenContainer>
      <StyledContainer>
        <ButtonContainer>
          <BackLink to='/uploadphoto'>
            <IoMdCloseCircleOutline size={30} color='grey' />
          </BackLink>
          <BackLink>
            <IoBagHandleOutline size={30} color='var(--primary-color)' />
          </BackLink>
        </ButtonContainer>
        <StyledImage src={uploadedPhotos.photo[0] || ''} alt='Uploaded Photo' />
        <ShareButton style={{ position: 'absolute' }}>
          <IoMdShare size={30} color='black' />
        </ShareButton>
        <AddToBagButton style={{ position: 'absolute' }}>Add to Bag</AddToBagButton>
      </StyledContainer>
      <DisplayContainer>
        <Box>
          <PhotoCarousel>
            {uploadedPhotos.photo.map((photo, index) => {
              if (!imageRefs.current[index]) {
                imageRefs.current[index] = React.createRef();
              }

              return (
                <MiniatureImage
                  key={index}
                  src={photo}
                  alt={`Uploaded Photo ${index + 1}`}
                  ref={imageRefs.current[index]}
                />
              );
            })}
          </PhotoCarousel>
          <div>
            {uploadedPhotos.photo.map((photo, index) => (
              <CircleIndicator
                key={index}
                active={index === activeIndex}
                onClick={() => {
                  setActiveIndex(index);
                  imageRefs.current[index].current.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            ))}
          </div>
          <label htmlFor='file-input-photo'>
            <MiniatureText>Your Photo &nbsp;&nbsp;+</MiniatureText>
          </label>
          <input
            id='file-input-photo'
            type='file'
            accept='image/*'
            style={{ display: 'none' }}
            onChange={(e) => handleAddPhoto(e, 'photo')}
            multiple
          />
        </Box>
        <Box>
          <PhotoCarousel>
            {uploadedPhotos.photo.map((photo, index) => {
              if (!imageRefs.current[index]) {
                imageRefs.current[index] = React.createRef();
              }

              return (
                <MiniatureImage
                  key={index}
                  src={photo}
                  alt={`Uploaded Photo ${index + 1}`}
                  ref={imageRefs.current[index]}
                />
              );
            })}
          </PhotoCarousel>
          <div>
            {uploadedPhotos.photo.map((photo, index) => (
              <CircleIndicator
                key={index}
                active={index === activeIndex}
                onClick={() => {
                  setActiveIndex(index);
                  imageRefs.current[index].current.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            ))}
          </div>
          <label htmlFor='file-input-photo'>
            <Link to='/uploadphoto' style={{ textDecoration: 'none' }}>
              <MiniatureText>Your Dress &nbsp;&nbsp;+</MiniatureText>
            </Link>
          </label>
          <input
            id='file-input-photo'
            type='file'
            accept='image/*'
            style={{ display: 'none' }}
            onChange={(e) => handleAddPhoto(e, 'photo')}
            multiple
          />
        </Box>
      </DisplayContainer>
    </FullScreenContainer>
  );
};

export default DisplayPhoto;
