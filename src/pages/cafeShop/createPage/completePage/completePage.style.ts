import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

const CompleteTextBox = styled.div`
  font-size: 40px;
  margin-bottom: 30px;

  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CompleteButtonBox = styled.div`
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
  animation-delay: 0.3s;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default { Layout, CompleteTextBox, CompleteButtonBox };