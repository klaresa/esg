import styled from "styled-components";

export const Box = styled.div`
  gap: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 96px 96px 0 96px;
`;

export const RowSection = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #f3f3f3;
  border-radius: 5px;
  background-color: #fafafa;
  font-size: 14px;
`;

export const Row = styled.div`
  padding: 14px;
`;

export const Center = styled.div`
  text-align: center;
  cursor: pointer;
`;

export const Input = styled.input`
  border: 1px solid #eaeaea;
  padding: 10px;
  outline: none;
  border-radius: 5px;
  
  :focus {
    outline: none;
  }
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 0;
`;

export const Icon = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #9dd29d;
  border-radius: 50%;
`;

export const Content = styled.div`
  //width: 100% !important;
	//margin: 0 auto;
  height: 100%;
  //width: 380px;
  //right: 50%;
  //top: 50%;
  //transform: translate(50%, -50%);
  background-color: white;
  //border: 2px solid gainsboro;
  
  //padding: 96px;

`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  //padding: 8px;
  outline: none;
  border: 1px solid white;
  border-radius: 5px;
  transition: 0.5s;
  
  &:focus {
    outline: none;
  }
  
  &:hover {
    background-color: darkgrey;
  }
`;
