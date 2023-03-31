import styled from "styled-components";

export const Container = styled.div`
  height: 645px;
  width: 380px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rosybrown;
  padding: 10px;
`;

export const Input = styled.input`
  border: 1px solid gainsboro;
  padding: 10px;
  outline: none;
  border-radius: 5px;
  
  :focus {
    outline: none;
  }
`;

export const Label = styled.div`
  font-family: monospace;
  font-size: 14px;
  margin-bottom: 4px;
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 8px;
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

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Overlay = styled.div`
  position: fixed;
  background-color: #fafafa;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
	margin: 0 auto;
  height: 100%;
  //width: 380px;
  //right: 50%;
  //top: 50%;
  //transform: translate(50%, -50%);
  background-color: white;
  //border: 2px solid gainsboro;
`;

export const Box = styled.div`
  height: 100%;
  gap: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 96px;
`;

export const Text = styled.div`
  font-family: monospace;
  font-size: 42px;
  margin-bottom: 10px;
`;

export const Select = styled.select`
  border: 1px solid gainsboro;
  padding: 10px;
  border-radius: 5px;
  
  :focus {
    outline: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const RowSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
`;
