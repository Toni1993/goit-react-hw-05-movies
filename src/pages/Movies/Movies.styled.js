import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  margin-right: 5px;
  font-size: 14px;
  padding: 13px 50px;
  letter-spacing: 2px;
  border-radius: 4px;
  border: 1px solid #b9b9b9;
`;

export const Button = styled.button`
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

  &.hover {
    transition: 0.5s;
    opacity: 0.8;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
`;

// .search {
//   display: flex;
//   justify-content: center;
//   padding: 20px;
//   background-color: #e7c7c7;
// }

// .form {

// }

// .input {

// }

// .button {

// }
