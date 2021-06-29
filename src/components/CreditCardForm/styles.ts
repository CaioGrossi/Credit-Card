import styled from "styled-components";
import InputMask from "react-input-mask";

export const Wrapper = styled.div`
  width: 570px;
  height: 630px;
  background-color: white;
  position: relative;
  border-radius: 12px;
`;

export const Form = styled.form`
  padding: 30px;
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #1a3b5d;
  margin-bottom: 5px;
`;

export const TextInput = styled(InputMask)`
  height: 50px;
  font-size: 23px;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid grey;
  width: 100%;
`;

export const Footer = styled.footer`
  display: flex;
`;

export const SelectInputWrapper = styled.div`
  position: relative;
  width: 150px;

  &:after {
    content: "▼";
    font-size: 1rem;
    top: 17px;
    right: 10px;
    position: absolute;
  }
`;

export const WrapperSelects = styled.div`
  display: flex;

  ${SelectInputWrapper} {
    margin-right: 20px;
  }
`;

export const SelectInput = styled.select`
  -webkit-appearance: none;
  appearance: none;
  height: 50px;
  font-size: 18px;
  padding: 0 10px;

  border-radius: 6px;
  border: 1px solid grey;
  width: 150px;
  background-color: white;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: #2364d2;
  border: none;
  color: white;
  border-radius: 2px;
  padding: 12px 0;
  font-size: 23px;
  font-weight: bold;
  cursor: pointer;
`;
