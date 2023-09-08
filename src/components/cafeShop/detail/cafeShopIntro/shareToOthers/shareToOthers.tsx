import Style from './shareToOhers.style';

const ShareToOthers = () => {
  const copyCurrentUrl = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('링크를 복사했습니다.');
    });
  };
  return (
    <Style.ShareToOthersBox>
      <div onClick={copyCurrentUrl}>
        <button>링크 복사</button>
      </div>
      <div>
        <button>카카오톡으로 공유하기</button>
      </div>
    </Style.ShareToOthersBox>
  );
};

export default ShareToOthers;
