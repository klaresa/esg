import styled from "styled-components";

export const Box = styled.div`
  gap: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 96px;
`;

export const Title = styled.div`
  font-size: 40px;
`;
export const Headline = styled.div`
  font-size: 18px;
`;

export const RowSection = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #f3f3f3;
  border-radius: 5px;
  background-color: #fafafa;
  padding: 8px;
  font-size: 14px;
  
  
  cursor: pointer;
    
  &:hover {
    box-shadow: 5px 5px 5px #d7d5d5;
    transition: 800ms;
  }
`;

export const Row = styled.div`
  padding: 8px;
`;

export const Label = styled.div`
  font-family: monospace;
  font-size: 14px;
  margin-bottom: 4px;
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
`;

export const Icon = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #9dd29d;
  border-radius: 50%;
`;
