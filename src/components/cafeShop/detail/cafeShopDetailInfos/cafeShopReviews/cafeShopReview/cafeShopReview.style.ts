import styled from 'styled-components';

const ReviewContainer = styled.div`
  /* padding: 50px 10px 50px 10px; */
  margin-bottom: 50px;
`;

const UserInfoBox = styled.div`
  display: flex;
`;

const ProfileImageBox = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 15px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
  }
`;

const UsernameBox = styled.div`
  margin-bottom: 5px;
  color: #383b40;
  font-weight: 700;
`;

const ContentBox = styled.div`
  padding: 25px 15px;
  color: #383b40;
  font-weight: 300;
  pre {
    white-space: pre-wrap;
    word-break: break-all;
    overflow: auto;
  }
  @media (max-width: 800px) {
    padding-left: 0;

    pre {
      white-space: pre-wrap;
      word-break: break-all;
      overflow: auto;
    }
  }
`;

const ReviewExtraInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CreatedDateText = styled.span`
  color: #747983;
  font-size: 12px;
  font-weight: 300;
`;

const AdditionalFeaturesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  button {
    color: #383b40;
    font-weight: 700;
  }
`;

const AnswerInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const AnswerInput = styled.textarea`
  width: 100%;
  height: 100px;
  border-radius: 4px;
  padding: 15px;
  margin: -30px 0 10px 0;
  border: 1px solid #d8dadd;
  color: #383b40;
  font-weight: 300;
  &::placeholder {
    color: #adb2bb;
  }

  height: 200px;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const AnswerSubmitButton = styled.button`
  color: #383b40;
  font-weight: 00;
  border: 1px solid #d8dadd;
  padding: 5px 15px;
  border-radius: 5px;
  width: 100px;
`;

export default {
  ReviewContainer,
  UserInfoBox,
  UsernameBox,
  ProfileImageBox,
  ContentBox,
  ReviewExtraInfoContainer,
  CreatedDateText,
  AdditionalFeaturesBox,
  AnswerInputsContainer,
  AnswerInput,
  AnswerSubmitButton,
};
