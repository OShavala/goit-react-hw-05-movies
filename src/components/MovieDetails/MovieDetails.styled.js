import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
   padding: 20px 40px;
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
 
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 16px;

  border: none;
  border-radius: 4px;
  padding: 5px;
  background-color: #e4c3ad;
  background-color: transparent;
  text-decoration: none;
  margin-top: 30px;
  cursor: pointer;


  &:hover,
  &:focus {
    background-color: blue;
     }
`;