import React, { useEffect, useState } from "react";
import { getApiData } from "../../services/getApiData";
import ComponenteDocumentos from "../../components/Documentos";

const EmpresaDocumentos = () => {
  const [search, setSearch] = useState([]);

  const [data, setData] = useState([]);

  async function handleFetch() {
    const response = await getApiData("/documentos");

    console.log(`------ DOCUMENTOS ------ ${response}`)

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
        <ComponenteDocumentos data={data} />
      </>
  );
};

export default EmpresaDocumentos;
