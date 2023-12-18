import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { FaUpload } from 'react-icons/fa';
import { UploadButton, UploadPhotoContainer, UploadPhotoText } from './styles';

const UploadPhoto = () => {
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: async (acceptedFiles) => {
      setPhoto(URL.createObjectURL(acceptedFiles[0]));

      const uploadedPhoto = acceptedFiles[0];
      const formData = new FormData();
      formData.append('file', uploadedPhoto);

      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        localStorage.setItem('uploadedPhoto', event.target.result);
      };
      reader.readAsDataURL(uploadedPhoto);
    },
  });

  const handleNext = () => {
    if (photo) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate('/displayphoto');
      }, 2000);
    } else {
      <p color='red'>Please Upload a photo</p>;
    }
  };

  return (
    <UploadPhotoContainer>
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <p style={{ fontWeight: '700', fontSize: '1rem' }}>Creating a Virtual room</p>
        </div>
      ) : (
        <>
          <UploadPhotoText>Upload a photo:</UploadPhotoText>
          <div
            {...getRootProps()}
            style={{
              border: '2px dotted grey',
              borderRadius: '10px',
              padding: '80px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
            }}
          >
            <input {...getInputProps()} />
            <FaUpload size={40} />
            <button
              style={{
                border: '2px solid var(--primary-color)',
                borderRadius: '5px',
                background: 'transparent',
                padding: '10px',
                cursor: 'pointer',
              }}
            >
              {photo ? 'Click on Next' : 'Browse to Upload'}
            </button>
          </div>
          <UploadButton
            onClick={handleNext}
            disabled={!photo}
            style={{ backgroundColor: !photo ? 'lightgray' : 'var(--primary-color)' }}
          >
            Next
          </UploadButton>
        </>
      )}
    </UploadPhotoContainer>
  );
};

export default UploadPhoto;
