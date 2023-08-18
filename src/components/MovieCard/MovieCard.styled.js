import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  display: flex;
 
  gap: 40px;
  margin-top: 20px;
  width: 80%;
  padding: 30px;
  border-bottom: 1px solid #000;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 400px;
`;

export const MovieInfo = styled.div`
  padding-top: 20px;
`;

export const MovieName = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 20px;
`;

export const MovieInfoText = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  `;

export const MovieInfoTextBold = styled.span`
  display: block;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 700;
`;

export const MoreInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  border-bottom: 1px solid #000;
`;

export const MoreInfoHeader = styled.h3`
  font-size: 30px;
  font-weight: 700;
  text-align: left;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  margin-top: 20px;
  gap: 20px;
  font-size: 18px;
  padding: 0;
  text-align: left;
`;

export const ListItem = styled.li`
   justify-content: left;
`;

export const StyledLink = styled(Link)`
  width: 100px;
  font-size: 16px;
  padding: 5px;
  cursor: pointer;

`;