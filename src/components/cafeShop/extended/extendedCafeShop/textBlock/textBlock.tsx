import { useState } from 'react';
import Style from './textBlock.style';

const TextBlock = ({ text }: { text: string }) => {
  const [expanded, setExpanded] = useState(false);

  const handleShowMore = () => {
    setExpanded(true);
  };
  return (
    <>
      {expanded ? (
        <Style.Container>
          <pre>{text}</pre>
        </Style.Container>
      ) : (
        <>
          {text.length > 30 ? (
            <Style.Container>
              {text.slice(0, 70) + '...'}
              <Style.ShowMoreButton
                onClick={handleShowMore}
                expanded={expanded}
              >
                더 보기
              </Style.ShowMoreButton>
            </Style.Container>
          ) : (
            <Style.Container>{text}</Style.Container>
          )}
        </>
      )}
    </>
  );
};

export default TextBlock;
