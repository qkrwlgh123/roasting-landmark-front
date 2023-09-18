import { Link, useLocation, useNavigate } from 'react-router-dom';
import StepProgress from '../../../../components/cafeShop/create/stepProgress/stepProgress';
import {
  SubmitButton,
  SubmitButtonContainer,
} from '../cafeShopCreatePage.style';
import Style from './completePage.style';
import { useEffect, useState } from 'react';

const CompletePage = () => {
  const location = useLocation();

  const navigate = useNavigate();

  // 주소창 이용하여 접근하였을 경우 404 리다이렉트
  const shopId = location.state;
  if (!shopId) {
    console.log('?');
    setTimeout(() => {
      navigate('/404', { replace: true });
    }, 0);
  }

  return (
    <>
      <StepProgress step={3} />
      <Style.Layout>
        <Style.CompleteTextBox>등록이 완료되었습니다.</Style.CompleteTextBox>
        <Link to={`/cafeShopDetail/${shopId}`}>
          <Style.CompleteButtonBox>
            <SubmitButtonContainer>
              <SubmitButton>확인하러 가기</SubmitButton>
            </SubmitButtonContainer>
          </Style.CompleteButtonBox>
        </Link>
      </Style.Layout>
    </>
  );
};

export default CompletePage;
