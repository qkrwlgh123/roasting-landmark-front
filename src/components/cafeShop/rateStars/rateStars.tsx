import StarOffIcon from '../../../assets/svg/star_off.svg';
import StarOnIcon from '../../../assets/svg/star_on.svg';
import StarHalfIcon from '../../../assets/svg/star_half.svg';
import Style from './rateStars.style';

const RateStars = ({ rate }: { rate: number }) => {
  return (
    <Style.RatesBox>
      <Style.RateIconsBox>
        {rate ? (
          Number.isInteger(rate) ? (
            <>
              {Array.from({ length: rate }).map((_, idx) => (
                <img
                  key={idx}
                  src={StarOnIcon}
                  width="16px"
                  alt="평점_아이콘"
                />
              ))}
              {Array.from({ length: 5 - rate }).map((_, idx) => (
                <img
                  key={idx}
                  src={StarOffIcon}
                  width="16px"
                  alt="평점_아이콘"
                />
              ))}
            </>
          ) : (
            <>
              {Array.from({ length: Math.trunc(rate) }).map((_, idx) => (
                <img
                  key={idx}
                  src={StarOnIcon}
                  width="16px"
                  alt="평점_아이콘"
                />
              ))}
              <img src={StarHalfIcon} width="16px" alt="평점_아이콘" />
              {Array.from({ length: 4 - Math.trunc(rate) }).map((_, idx) => (
                <img
                  key={idx}
                  src={StarOffIcon}
                  width="16px"
                  alt="평점_아이콘"
                />
              ))}
            </>
          )
        ) : (
          Array.from({ length: 5 }).map((_, idx) => (
            <img key={idx} src={StarOffIcon} width="16px" alt="평점_아이콘" />
          ))
        )}
      </Style.RateIconsBox>
      <span>{rate ? rate.toFixed(1) : 0}</span>
    </Style.RatesBox>
  );
};

export default RateStars;
