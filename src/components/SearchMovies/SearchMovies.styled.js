import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
   margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Input = styled.input`
  position: relative;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;
  width: 280px;
  outline: 0;
  padding: 10px 10px;

  &:focus {
    border-color: blue;
   
  }
 `;

export const Button = styled.button`
  font-size: 16px;
  cursor: pointer;
  
`;