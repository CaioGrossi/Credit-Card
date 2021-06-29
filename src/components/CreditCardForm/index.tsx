import { useState } from "react";
import { months, years } from "./mock";
import CreditCard from "../CreditCard/index";
import * as S from "./styles";

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expireMonth, setExpireMonth] = useState("");
  const [expireYear, setExpireYear] = useState("");
  const [cvvCode, setCvvCode] = useState("");

  const [currentFocus, setCurrentFocus] = useState<
    "cardNumber" | "none" | "cardName" | "cardDate"
  >("none");
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  return (
    <S.Wrapper>
      <CreditCard
        number={cardNumber || undefined}
        onFocus={currentFocus}
        owner={cardName || undefined}
        expireMonth={expireMonth || undefined}
        expireYear={expireYear || undefined}
        cvvCode={cvvCode}
        isFlipped={isCardFlipped}
      />
      <S.Form>
        <S.InputBlock>
          <S.Label>Card number</S.Label>
          <S.TextInput
            name="card-number"
            mask="9999 9999 9999 9999"
            onChange={(event) =>
              setCardNumber(event.target.value.replaceAll("_", "#"))
            }
            onFocus={() => setCurrentFocus("cardNumber")}
            onBlur={() => setCurrentFocus("none")}
          />
        </S.InputBlock>

        <S.InputBlock>
          <S.Label>Card's holder</S.Label>
          <S.TextInput
            name="card-holder"
            mask=""
            onChange={(event) => setCardName(event.target.value)}
            onFocus={() => setCurrentFocus("cardName")}
            onBlur={() => setCurrentFocus("none")}
          />
        </S.InputBlock>

        <S.Footer>
          <S.InputBlock>
            <S.Label>Expiration date</S.Label>

            <S.WrapperSelects>
              <S.SelectInputWrapper>
                <S.SelectInput
                  onChange={(event) => setExpireMonth(event.target.value)}
                  defaultValue="Month"
                  onFocus={() => setCurrentFocus("cardDate")}
                  onBlur={() => setCurrentFocus("none")}
                >
                  <option value="Month" disabled>
                    Month
                  </option>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </S.SelectInput>
              </S.SelectInputWrapper>

              <S.SelectInputWrapper>
                <S.SelectInput
                  onChange={(event) => setExpireYear(event.target.value)}
                  defaultValue="Year"
                  onFocus={() => setCurrentFocus("cardDate")}
                  onBlur={() => setCurrentFocus("none")}
                >
                  <option value="Year" disabled>
                    Year
                  </option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </S.SelectInput>
              </S.SelectInputWrapper>
            </S.WrapperSelects>
          </S.InputBlock>

          <S.InputBlock>
            <S.Label>CVV</S.Label>
            <S.TextInput
              maxLength={4}
              name="card-cvv"
              mask=""
              onChange={(event) => setCvvCode(event.target.value)}
              onFocus={() => setIsCardFlipped(true)}
              onBlur={() => setIsCardFlipped(false)}
            />
          </S.InputBlock>
        </S.Footer>

        <S.SubmitButton>SUBMIT</S.SubmitButton>
      </S.Form>
    </S.Wrapper>
  );
};

export default CreditCardForm;
