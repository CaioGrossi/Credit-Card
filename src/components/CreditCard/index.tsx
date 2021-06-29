import chipImg from "../../assets/images/chip.png";
import visaImg from "../../assets/images/visa.png";
import * as S from "./styles";

type CreditCardProps = {
  number?: string;
  owner?: string;
  expireMonth?: string;
  expireYear?: string;
  onFocus?: "cardNumber" | "none" | "cardName" | "cardDate";
  cvvCode?: string;
  isFlipped: boolean;
};

const CreditCard = ({
  number = "#### #### #### ####",
  onFocus = "none",
  owner = "FULL NAME",
  expireMonth = "MM",
  expireYear = "YY",
  cvvCode = "",
  isFlipped,
}: CreditCardProps) => {
  return (
    <S.Wrapper>
      <S.FlipperCard isFlipped={isFlipped}>
        <S.FrontCard>
          <S.FocusMarker type={onFocus} />
          <S.Header>
            <img src={chipImg} alt="Credit card chip" />
            <img src={visaImg} alt="Credit card flag" />
          </S.Header>

          <S.NumbersWrapper>
            {number.split("").map((number, index) => (
              <S.CardNumber key={index}>{number}</S.CardNumber>
            ))}
          </S.NumbersWrapper>

          <S.Footer>
            <S.CardNameWrapper>
              <span>Card Holder</span>
              <p>{owner}</p>
            </S.CardNameWrapper>

            <S.CardExpireDateWrapper>
              <span>Expires</span>
              <p>
                {expireMonth}/{expireYear}
              </p>
            </S.CardExpireDateWrapper>
          </S.Footer>
        </S.FrontCard>

        <S.BackCard>
          <S.Band />
          <S.CvvCodeWrapper>
            <span>CVV</span>
            <S.CvvBand>
              <span>{cvvCode}</span>
            </S.CvvBand>
          </S.CvvCodeWrapper>
        </S.BackCard>
      </S.FlipperCard>
    </S.Wrapper>
  );
};

export default CreditCard;
