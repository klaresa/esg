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

const ComponenteDocumentos = ({ data }) => {
  const navigate = useNavigate();

  function handleDetailsClick(item) {
    navigate(`details/${item._id}`, { state: item });
  }

  return data && (
    <>
      <Box>
        <Title>documentos cadastrados * empresas para responder</Title>

        {data.map((item, itemIndex) => (
          <RowSection
            key={item._id}
            onClick={() => handleDetailsClick(item)}
          >
            <Row>
              <Headline key={`documentos_${itemIndex}`}>
                <strong>{item.name}</strong>
              </Headline>
            </Row>
            <Row>
              {<p>{item.description}</p>}
            </Row>
          </RowSection>
        ))}
      </Box>
    </>
  );
};

export default ComponenteDocumentos;
