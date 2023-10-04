import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Style from './shareToOhers.style';
import CloseIcon from '../../../../commonModal/closeIcon/closeIcon';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ShareToOthers = ({
  introInfo,
  handleSwitchShareModel,
}: {
  introInfo: {
    shopId: number;
    shopName: string;
    rate: number;
    participants: number;
    description: string;
    keywords: string[];
  };
  handleSwitchShareModel: () => void;
}) => {
  // 링크 복사
  const handleCopyCurrentUrl = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('링크를 복사했습니다.');
    });
  };

  // 카카오톡으로 공유하기
  const handleShareByKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_JSKEY);
      }
    }

    window.Kakao.Link.sendCustom({
      templateId: 99074,
      templateArgs: {
        shopId: introInfo.shopId,
        shopName: introInfo.shopName,
      },
    });
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Style.ShareToOthersBackground>
      <Style.ContentsContainer>
        <CloseIcon onClickFunc={handleSwitchShareModel} />
        <Style.TitleBox>
          <span>공유하기</span>
        </Style.TitleBox>
        <Style.ButtonsContainer>
          <Style.ButtonBox onClick={handleCopyCurrentUrl}>
            <Style.LinkLogoBox>
              <FontAwesomeIcon color="#ffffff" size="xl" icon={faLink} />
            </Style.LinkLogoBox>
            <span>링크</span>
          </Style.ButtonBox>
          <Style.ButtonBox onClick={handleShareByKakao}>
            <img
              src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
              alt="kakao_logo"
            />
            <span>카카오톡</span>
          </Style.ButtonBox>
        </Style.ButtonsContainer>
      </Style.ContentsContainer>
    </Style.ShareToOthersBackground>
  );
};

export default ShareToOthers;
