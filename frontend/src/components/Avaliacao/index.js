import React from "react";
import {
  Box,
  Title,
  RowSection,
  Row,
  Headline
} from "./styles";
import { useNavigate } from "react-router-dom";

const ComponenteAvaliacao = ({ data }) => {

  const navigate = useNavigate();

  // function handleDetailsClick(item) {
  //   navigate(`details/${item._id}`, { state: item });
  // }

  return data && (
    <>
      <Box>
        <Title>Lista de avaliações</Title>

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
          </RowSection>
        ))}

        <Title>Avaliações de empresas</Title>
        {data.map((item, itemIndex) => (
            <RowSection
                key={item._id}
            >
              <Row>
                {<Headline><strong>{item.empresa.nome}</strong></Headline>}
              </Row>
              <Row>
                <Headline key={`documentos_${itemIndex}`}>
                  <p>{item.avaliacaoNome}</p>
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
