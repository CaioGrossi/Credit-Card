import styled, { css } from "styled-components";
import backgroudnImg from "../../assets/images/background.jpeg";

type FlipperCardProps = {
  isFlipped: boolean;
};

const flipperCardModifiers = {
  flipped: () => css`
    transform: rotateY(180deg);
  `,
};

export const FlipperCard = styled.div<FlipperCardProps>`
  ${({ isFlipped }) => css`
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 1s ease-in-out;
    transform-style: preserve-3d;
    ${isFlipped && flipperCardModifiers.flipped()}
  `}
`;

export const Wrapper = styled.div`
  width: 490px;
  height: 330px;
  margin: auto;
  margin-top: -100px;
  position: relative;
  overflow: hidden;
  perspective: 1000px;
  padding: 30px;
`;

const CardSide = styled.div`
  border-radius: 8px;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-image: url(${backgroudnImg});
`;

// Card front side
export const FrontCard = styled(CardSide)`
  padding: 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img:first-child {
    width: 60px;
    height: 48px;
  }

  img:last-child {
    width: 85px;
    height: 45px;
  }
`;

export const NumbersWrapper = styled.div`
  font-size: 27px;
  font-weight: 500;
  color: white;
  margin-top: 50px;
  padding: 10px 15px;
`;

export const CardNumber = styled.span`
  padding: 0 2px;
`;

export const Footer = styled.footer`
  display: flex;
  margin-top: 40px;
`;

type FocusMarkerProps = {
  type: "cardNumber" | "none" | "cardName" | "cardDate";
};

const focusMarkerModifiers = {
  cardNumber: () => css`
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid white;
    transform: translateY(125px) translateX(22px);
    width: 364px;
    height: 35px;
  `,
  none: () => css`
    transform: translateY(0) translateX(0);
    width: 100%;
    height: 100%;
  `,
  cardName: () => css`
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid white;
    transform: translateY(205px) translateX(10px);
    width: 330px;
    height: 50px;
  `,
  cardDate: () => css`
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid white;
    width: 80px;
    height: 55px;
    transform: translateY(205px) translateX(336px);
  `,
};

export const FocusMarker = styled.div<FocusMarkerProps>`
  ${({ type }) => css`
    position: absolute;
    border: 1px solid transparent;
    top: 0;
    left: 0;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease-out;

    ${type && focusMarkerModifiers[type]()}
  `}
`;

export const CardNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  > span {
    font-size: 13px;
    color: lightgray;
    margin-bottom: 5px;
  }

  > p {
    text-transform: uppercase;
    font-size: 18px;
    color: white;
    font-weight: 500;
  }
`;

export const CardExpireDateWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 66px;
  > span {
    font-size: 13px;
    color: lightgray;
    margin-bottom: 5px;
  }

  > p {
    text-transform: uppercase;
    font-size: 18px;
    color: white;
    font-weight: 500;
  }
`;

// Card back side

export const BackCard = styled(CardSide)`
  transform: rotateY(180deg);
`;

export const Band = styled.div`
  background-color: black;
  width: 100%;
  height: 50px;
  margin-top: 25px;
`;

export const CvvCodeWrapper = styled.div`
  width: 95%;
  text-align: right;
  margin: auto;
  margin-top: 20px;

  > span {
    color: white;
  }
`;

export const CvvBand = styled.div`
  padding-right: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: white;
  border-radius: 8px;
  margin-top: 10px;
`;
