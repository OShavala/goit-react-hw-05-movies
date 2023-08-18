import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding-right: 40px;
  padding-left: 40px;
  padding-bottom: 40px;
  margin: 0 auto;
`;

export const ReviewHeader = styled.h3`
  display: inline-block;
  font-size: 30px;
  font-weight: 700;

  margin-bottom: 20px;
  margin: 0 auto;
`;

export const ReviewList = styled.ul`
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
`;

export const ReviewListItem = styled.li`
  padding-bottom: 10px;
 
  padding: 15px;
`;

export const Author = styled.h4`
  font-size: 20px;
  font-weight: 400;
  margin-top: 20px;
  max-width: 220px;
 
`;

export const Review = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;

   margin: 0 auto;
`;

export const NoReviewsText = styled.p`
  margin: 30px auto 0 auto;
  text-align: center;
  padding: 20px;
  background-color: #f8f8f8;
  max-width: 500px;
  font-size: 16px;
  background: rgba(110, 110, 110, 0.25);
`;