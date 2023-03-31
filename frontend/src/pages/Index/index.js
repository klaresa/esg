import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Content,
  Box,
  Button,
} from "../../styles";
import { AuthContext } from "../../auth/AuthContext";

const Index = () => {
  const navigate = useNavigate();
  const { authed } = useContext(AuthContext);

  useEffect(() => {

  }, [authed]);

  function handleNav(instruction) {
    if (instruction === "entrar") {
      navigate("/login");
    }
    if (instruction === "cadastro") {
      navigate("/cadastro");
    }
  }

  return (
    // <Overlay>
      <Content>
        <Box>
          <Button onClick={() => handleNav("entrar")}>Entrar</Button>
          <Button onClick={() => handleNav("cadastro")}>Cadastrar</Button>
        </Box>
      </Content>
    // </Overlay>
  );
};

export default Index;
