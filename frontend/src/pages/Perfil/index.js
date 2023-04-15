import React, { useEffect, useState, useContext } from "react";
import { Content, Box, Text, Button, Input, InputSection, Label, Wrapper} from "../../styles";
import { sendData } from "../../services/sendData";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../auth/AuthContext";
import { getApiEmpresasData } from "../../services/getApiEmpresasData"


const EmpresaPerfil = () => {
  const { getUserPermission } = useContext(AuthContext);

  const [user, setUser] = useState('');
  const [userCon, setUserCon] = useState('');


  const [step, setStep] = useState(1);

  const [perfil, setPerfil] = useState("empresa");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("");

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");

  const navigate = useNavigate();

  // useEffect(() => {
  //   async function get() {
  //     const search = await dataPromise('http://localhost:3000/vagas');
  //     setSearch(search);
  //   }
  //   get();
  // }, []);
  useEffect(() => {
    const token = localStorage.getItem('token');
    const parsedToken = JSON.parse(token);

    setUser(parsedToken)
    getEmpresaInfo(parsedToken.id)
  }, [])

  async function getEmpresaInfo(userId) {
    const response = await getApiEmpresasData(`empresas/find-by-userid/${userId}`)
    console.log('response: ', response)
    setUser(response)
    setUserCon(response.contato)
  }

  function handleSubmit() {

    if (step === 2) {
      if (!(senha === confirmacao)) {
        setStep(1);
        return;
      }

      const data = {
        type: perfil,
        username: email,
        password: senha,
        nome,
        contato: {
          endereco,
          telefone
        }
      };
      sendData(`http://localhost:3333/empresas`, data);

      navigate('/login');
    }
  }

  return (
    <>
      <Content>
        <Box>
          <Text>info</Text>
          <InputSection>
            <Label>nome da empresa</Label>
            <Input
              id="nome"
              name="nome"
              placeholder={user.nome}
              disabled
              onChange={(e) => setNome(e.target.value)}
            />

          </InputSection>
          <InputSection>
            <Label>endereco</Label>
            <Input
              id="endereco"
              name="endereco"
              placeholder={userCon.endereco}
              disabled
              onChange={(e) => setEndereco(e.target.value)}
            />
          </InputSection>
          <InputSection>
            <Label>telefone</Label>
            <Input
              id="telefone"
              name="telefone"
              placeholder={userCon.telefone}
              disabled
              onChange={(e) => setTelefone(e.target.value)}
            />
          </InputSection>

          <Wrapper>
            {/*<Button onClick={handleSubmit}>avancar</Button>*/}
          </Wrapper>
        </Box>
      </Content>
    </>
  );
};

export default EmpresaPerfil;
