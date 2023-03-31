import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
    outline: 0;
    box-sizing: border-box;
    font-family: monospace;
  }
  
  input, button, select {
    border: 1px solid gainsboro;
    padding: 10px;
    outline: none;
    border-radius: 5px;
    
    :focus {
      outline: none;
    }
  }
`;
