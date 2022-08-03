import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  background-color: #9b5050;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -10px;
  margin-left: -10px;
  margin-bottom: 30px;
`;

export const Item = styled.li`
  position: relative;
  list-style: none;
  width: 275px;
  /* flex-basis: calc((100% - 44px) / 4); */
  margin: 20px;
  background-color: #e7e7e7;
  border-radius: 2px;
  box-shadow: 0px 1px 1px rgba(129, 129, 129, 0.1),
    0px 2px 4px rgba(129, 129, 129, 0.1), 3px 0px 6px rgba(129, 129, 129, 0.1);
  transition: transform 250ms linear;

  &:hover,
  :focus {
    transform: scale(1.025);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.06),
      3px 0px 6px rgba(0, 0, 0, 0.16);
    cursor: pointer;
  }
`;
export const MovieInfo = styled.div`
  padding: 10px 5px;
  min-height: 60px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const MovieTitle = styled.h2`
  margin: 0;
  list-style-type: none;
  color: #020101;
  font-size: 16px;
  color: #b90b0b;
  text-decoration: none;
`;

export const MovieRating = styled.span`
  position: absolute;
  bottom: 23px;
  right: 5px;
  height: 18px;
  border-radius: 4px;
  background-color: #b90b0b;
  text-align: center;
  color: #ffffff;
`;

export const MovieImg = styled.img`
  border-radius: 4px;
  max-width: 265px;
  height: 398px;
`;

// .movie_details {
//   color: #000000;
//   font-size: 13px;
//   font-weight: 700;
// }

// .movie {
//   width: 275px;
//   padding: 5px;
// }
// .movie_img {

// }
