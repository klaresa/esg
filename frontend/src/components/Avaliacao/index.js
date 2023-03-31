import React from "react";
import {
  Box,
  Title,
  RowSection,
  Icon,
  Row,
  Label,
  Input,
  InputSection,
  Headline
} from "./styles";
import { useNavigate } from "react-router-dom";

const ComponenteAvaliacao = ({ data }) => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    if (e.code === "Enter") {
      console.log("code", e.code);
    }
  }

  function handleDetailsClick(item) {
    // console.log('itemmm', item);
    navigate(`details/${item._id}`, { state: item });
  }

  return data && (
    <>
      <Box>
        <Title>documentos cadastrados</Title>
        {/*<Row>*/}
        {/*  <InputSection>*/}
        {/*    <Label>Busca vagas...</Label>*/}
        {/*    <Input*/}
        {/*      id="search"*/}
        {/*      name="search"*/}
        {/*      placeholder="search.."*/}
        {/*      onKeyDown={(e) => handleSubmit(e)}*/}
        {/*    />*/}
        {/*  </InputSection>*/}
        {/*</Row>*/}

        {data.map((item, itemIndex) => (
          <RowSection
            key={item._id}
            onClick={() => handleDetailsClick(item)}
          >
            <Row>
              <Headline key={`documentos_${itemIndex}`}>
                <strong>{item.avaliacaoNome}</strong>
              </Headline>
            </Row>
            <Row>
              {<p>{item.documento.name}</p>}
            </Row>

            <Row>
              {/*{Object.keys(item.content).map((key) => (*/}
              {/*    <div key={key}>*/}
              {/*      <p>{key}</p>*/}
              {/*      <p> {item.content[key]}</p>*/}
              {/*  </div>*/}
              {/*))}*/}

            </Row>
          </RowSection>
        ))}

        <Title>documentos respondidos</Title>
        {data.map((item, itemIndex) => (
            <RowSection
                key={item._id}
                // onClick={() => handleDetailsClick(item)}
            >
              <Row>
                <Headline key={`documentos_${itemIndex}`}>
                  <strong>{item.avaliacaoNome}</strong>
                </Headline>
              </Row>
              <Row>
                {<p>{item.documento.name}</p>}
              </Row>

              <Row>
                {item.documento.content.map((quesion, index) => (
                    <div key={index}>
                      <p>- {quesion.question}</p>
                      <p>{quesion.answer}</p>
                    </div>
                ))}
              </Row>
            </RowSection>
        ))}

      </Box>
    </>
  );
};

export default ComponenteAvaliacao;
