import React, { useEffect, useState } from "react";
import { getApiData } from "../../services/getApiAvaliacaoData";
import ComponenteAvaliacao from "../../components/Avaliacao";

const Avaliacao = () => {

  const [data, setData] = useState([]);

  async function handleFetch() {
    const response = await getApiData("/avaliacao");

    console.log(`------ DATA ------ ${response}`)

    setData(response);
  }

  useEffect(() => {
    handleFetch();
  }, []);

  function handleChange() {
    handleFetch();
  }

  return (
      <>
        <ComponenteAvaliacao data={data} />
      </>
  );
};

export default Avaliacao;
