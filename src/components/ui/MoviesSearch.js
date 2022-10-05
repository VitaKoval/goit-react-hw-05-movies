import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: #141414;
  padding: 40px 0 134px;
`;

export const FormSearch = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`;

export const LabelSearch = styled.label`
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const InputSearch = styled.input`
position: relative;
  display: inline-block;
  width: 100%;
  height: 20px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;


  padding: 17px 59px;

    font-size: 20px;
    line-height: 24px;
    background: #fff;
    border-radius: 350px;
    box-shadow: none;

  &::placeholder {
    font: inherit;
    font-size: 17px;
  }
`
export const NotFindTitle = styled.div`
  margin: 0 auto 14px auto;

  text-align: center;
    font-size: 30px;
    line-height: 40px;
    letter-spacing: .18px;
    text-transform: uppercase;
  `
  
  ;
