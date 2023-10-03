import { KEYWORDS_LIST } from '../../../utils/shared/datas';
import Style from './keywords.style';

const Keywords = ({
  currentKeywords,
  handleChangeCurrentKeywords,
}: {
  currentKeywords: string[];
  handleChangeCurrentKeywords: (keyword: string) => void;
}) => {
  return (
    <Style.KeywordsListLayout>
      <Style.KeywordsBox>
        <Style.Keyword
          isClicked={currentKeywords.length === 0}
          onClick={() => handleChangeCurrentKeywords('전체')}
        >
          <img
            src={
              currentKeywords.length === 0
                ? KEYWORDS_LIST[0].active
                : KEYWORDS_LIST[0].inactive
            }
            alt="keyword_icon"
          />
          <span>{KEYWORDS_LIST[0].keyword}</span>
        </Style.Keyword>
        {KEYWORDS_LIST.filter((_, idx) => idx > 0).map((keyword) => (
          <Style.Keyword
            isClicked={currentKeywords.some((item) => item === keyword.keyword)}
            onClick={() => handleChangeCurrentKeywords(keyword.keyword)}
          >
            <img
              src={
                currentKeywords.some((item) => item === keyword.keyword)
                  ? keyword.active
                  : keyword.inactive
              }
              alt="keyword_icon"
            />
            <span>{keyword.keyword}</span>
          </Style.Keyword>
        ))}
      </Style.KeywordsBox>
    </Style.KeywordsListLayout>
  );
};

export default Keywords;
