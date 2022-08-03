import styled from 'styled-components';

export const ImageWrap = styled.div`
  border-radius: 10px;
  margin-right: 30px;
`;
export const Image = styled.img`
  margin: 0;
`;
export const Description = styled.div`
  padding: 10px 10px;
`;

export const Title = styled.h2`
  font-size: 30px;
  padding-bottom: 20px;
`;
export const Subtitle = styled.h3`
  font-size: 25px;
  padding-bottom: 10px;
  color: #fff;
`;

export const Overviev = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  color: #b40d0d;
`;

export const List = styled.ul`
  display: flex;
  margin-bottom: 20px;
  padding: 0;
`;
export const Item = styled.ul`
  font-size: 18px;
  margin-right: 15px;
  color: #b40d0d;
  list-style-type: none;
`;
export const Buttonlink = styled.button`
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  margin-right: 10px;
  min-width: 92px;
  color: white;
  padding: 14px 8px;
  border-radius: 7px;

  text-transform: uppercase;
  opacity: 1;
  background-color: #a31111;

  border: none;
  &:hover {
    transition: 0.5s;
    opacity: 0.8;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
`;
export const Buttonback = styled.button`
  margin: 20px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  margin-right: 10px;
  min-width: 92px;
  color: white;
  padding: 14px 8px;
  border-radius: 7px;

  text-transform: uppercase;
  opacity: 1;
  background-color: #a31111;

  border: none;
  &:hover {
    transition: 0.5s;
    opacity: 0.8;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
`;
