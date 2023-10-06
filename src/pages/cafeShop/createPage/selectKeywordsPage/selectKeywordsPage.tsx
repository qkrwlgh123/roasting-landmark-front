import { useEffect, useState } from 'react';
import SelectKeywordsLayout from '../../../../components/layout/cafeShop/selectKeywordsLayout/selectKeywordsLayout';
import Style from './selectKeywordsPage.style';
import {
  SubmitButton,
  SubmitButtonContainer,
} from '../cafeShopCreatePage.style';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../../routes';
import { KEYWORDS_LIST } from '../../../../utils/shared/datas';
import StepProgress from '../../../../components/cafeShop/create/stepProgress/stepProgress';
import { handleValidateAuthorization } from '../../../../utils/shared/api/authAPis';

const SelectKeywordsPage = () => {
  const [isPageVisible, setIsPageVisible] = useState(false);
  const navigate = useNavigate();
  const [keywordsList, setKeywordsList] = useState<string[]>([]);

  const handleClickKeyword = (keyword: string) => {
    if (keywordsList.some((item) => item === keyword)) {
      setKeywordsList((prev) => prev.filter((item) => item !== keyword));
      return;
    }
    if (keywordsList.length >= 3) return;
    setKeywordsList((prev) => [...prev, keyword]);
  };

  const handleNextPage = () => {
    navigate(routes.cafeShopCreate, { state: keywordsList });
  };

  // 비인증된 사용자일 경우 404 리다이렉트, 페이지 렌더링 시 애니메이션 효과
  useEffect(() => {
    const requestAuthorization = async () => {
      const resData = await handleValidateAuthorization();

      if (resData?.response?.status === 401) {
        navigate('/404');
        return null;
      }
    };
    requestAuthorization();
    // 페이지가 로드되면 200ms(0.2초) 후에 컴포넌트가 나타나도록 설정
    const timer = setTimeout(() => {
      setIsPageVisible(true);
    }, 200);

    // 컴포넌트가 언마운트되면 타이머를 클리어
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <StepProgress step={1} />
      <SelectKeywordsLayout>
        <Style.TitleBox $isPageVisible={isPageVisible}>
          <span>다음 중 카페를 잘 설명하는 것은 무엇인가요?</span>
          <span>최대 3개까지 선택 가능합니다.</span>
        </Style.TitleBox>
        <Style.KeywordsList>
          {KEYWORDS_LIST.filter((_, idx) => idx > 0).map((keyword, index) => (
            <Style.Keyword
              key={keyword.keyword}
              $isPageVisible={isPageVisible}
              $animationDelay={index * 0.1}
              $isClicked={keywordsList.some((item) => item === keyword.keyword)}
              onClick={() => handleClickKeyword(keyword.keyword)}
            >
              <img
                src={
                  keywordsList.some((item) => item === keyword.keyword)
                    ? keyword.active
                    : keyword.inactive
                }
                alt="keyword_icon"
              />
              <span>{keyword.keyword}</span>
            </Style.Keyword>
          ))}
        </Style.KeywordsList>
        {keywordsList.length > 0 && (
          <SubmitButtonContainer>
            <SubmitButton onClick={handleNextPage}>다음</SubmitButton>
          </SubmitButtonContainer>
        )}
      </SelectKeywordsLayout>
    </>
  );
};

export default SelectKeywordsPage;
