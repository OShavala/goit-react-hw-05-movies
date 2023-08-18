import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 30px;
  padding-right: 80px;
  padding-left: 80px;
  padding-bottom: 40px;
  text-align: left;
 
`;

export const CastHeader = styled.h3`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const CastList = styled.ul`
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const CastListItem = styled.li`
 
  padding: 10px;
   width: 250px;
  background-color: #fff;
  padding: 18px;
  border-radius: 4px;
 
  
`;

export const CastInfo = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
  max-width: 220px;
  margin: 0 auto;
`;

export const CastName = styled.h3`
  margin-bottom: 10px;
`;

export const NoCastText = styled.p`
  margin: 30px auto 0 auto;
  text-align: center;
  padding: 20px;
  background-color: #f8f8f8;
  max-width: 500px;
`;

export const CastImg = styled.img`
  display: block;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  display: block;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;