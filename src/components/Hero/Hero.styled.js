import styled from 'styled-components';
import image from '../../images/background/background.jpg';

export const Section = styled.section`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: right top;
`;

export const Wrapper = styled.div`
  margin-left: 64px;
  margin-top: 109px;
`;

export const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  color: #a93b59;
  font-style: italic;
  font-weight: 400;
  font-size: 48px;
  white-space: pre-line;
`;

export const SpanSecond = styled.span`
  font-style: normal;
  font-size: 86px;
  color: #f5ebeb;
  margin-left: 121px;
`;
export const Text = styled.p`
  font-family: 'Source Sans 3', sans-serif;
  font-size: 24px;
  color: #f5ebeb;
  margin-left: 110px;
  margin-top: 18px;
`;

export const Button = styled.button`
  width: 437px;
  padding: 16px 125.5px;
  border-radius: 15px;
  color: #f5ebeb;
  background-color: #a93b59;
  font-style: 'Source Sans 3', sans-serif;
  font-size: 20px;
  margin-top: 42px;
  margin-left: 110px;
`;
