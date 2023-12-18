import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignupButton = styled(Link)`
  text-decoration: none;
  color: #fff;
  background: var(--primary-color);
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-block;
  font-size: 16px;
`;
export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const SignupHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 5%;
`;
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
`;

export const Prefix = styled.span`
  margin-right: 10px;
  padding: 12px;
  border: 2px solid #000;
  border-radius: 5px;
`;
export const SignupInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  padding-left: 10px;
  position: relative;

  &::before {
    color: #000;
    content: '+91';
    position: absolute;
    left: 10px;
    pointer-events: none;
  }
  border: 2px solid black;
  &:focus {
    outline: none;
    border-color: #000;
  }
`;

export const OtpVerificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const OtpVerificationHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const OtpVerificationText = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;

export const OtpInput = styled.input`
  padding: 10px;
  margin-bottom: 16px;
`;

export const VerifyButton = styled.button`
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 16px;
`;

export const TimerText = styled.p`
  font-size: 16px;
`;
export const FinishSignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const FinishSignupHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const FinishSignupButton = styled.button`
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export const ThreePartMultipageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
`;

export const MultipageText = styled.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0px 1rem 2rem 1rem;
  text-align: center;
`;

export const EmbeddedPhoto = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 6px;
`;

export const NextButton = styled.button`
  width: 90%;
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 2%;
`;
export const UploadPhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 2rem;
`;

export const UploadPhotoText = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 0px;
`;

export const PhotoPreview = styled.img`
  width: 80%;
  aspect-ratio: 3/4;
  border-radius: 5px;
  height: auto;
  margin-bottom: 16px;
`;

export const UploadButton = styled.button`
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const PaginationBox = styled.div`
  width: 100%;
  height: 5px;
  border-radius: 10px;
  background-color: ${(props) => (props.active ? 'var(--primary-color)' : '#ddd')};
  margin: 0 5px;
  cursor: pointer;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 20px;
  width: 90%;
`;

export const BottomText = styled.p`
  font-size: 10px;
  color: #878787;
  display: flex;
  align-items: flex-end;
`;
