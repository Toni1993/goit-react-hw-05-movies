import styled from 'styled-components';

export const Image = styled.img`
  max-height: 250px;
`;
export const Castinfo = styled.div`
  padding: 20px;
  font-size: 14px;
  text-align: center;
  color: brown;
  background-color: rgb(243, 231, 231);
`;
export const Title = styled.h2`
  font-size: 12px;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
`;
export const Titlebox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #aa9595;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 100px;
  margin: 0;

  background-color: rgb(243, 231, 231);
`;
export const Item = styled.li`
  margin-bottom: 15px;
  margin-right: 15px;
  -webkit-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.3);
`;
