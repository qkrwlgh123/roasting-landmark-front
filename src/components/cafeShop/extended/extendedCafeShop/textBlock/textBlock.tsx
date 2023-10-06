import { useState } from 'react';
import Style from './textBlock.style';

const TextBlock = ({
  text,
  expanded,
  handleShowMore,
}: {
  text: string;
  expanded: boolean;
  handleShowMore: () => void;
}) => {
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
              <pre>{text.slice(0, 70) + '...'}</pre>
              <Style.ShowMoreButton
                onClick={handleShowMore}
                $expanded={expanded}
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
