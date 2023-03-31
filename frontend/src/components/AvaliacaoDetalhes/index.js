import React, {useEffect, useState} from "react";
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
import {useNavigate} from "react-router-dom";

const ComponenteAvaliacaoDetalhes = ({json}) => {

  const [data, setData] = useState();

  useEffect(() => {
    setData(json)
    console.log('new render: ', json)
  }, [json])

  return data && (
      <div>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <ul>
          {data && data.content && data.content.map((question, index) => (
              <div key={index}>
                <div>
                  <strong>{question.question}</strong>
                  {question.answer === 'sim' || question.answer === 'nao' ? (
                      <div>
                        <input type="checkbox" checked={question.answer === 'sim' ? 'checked' : ''} readOnly/>
                      </div>
                  ) : (
                      <div>{question.answer}</div>
                  )}</div>
              </div>
          ))}
        </ul>
      </div>
  );
};

export default ComponenteAvaliacaoDetalhes;
