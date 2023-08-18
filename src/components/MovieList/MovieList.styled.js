import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding-right: 50px;
  padding-left: 50px;
`;

export const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 900;
  text-align: left;

  margin: 0;
  
`;
export const StyledSectionForm = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  list-style: none;
  justify-content: left;
  gap: 15px;
  height: 100%;
  padding-left: 40px;
  padding-right: 40px;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
   text-decoration: none;
   cursor: pointer;
  
`;