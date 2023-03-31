import React, { useEffect, useState } from "react";
import { getApiData } from "../../services/getApiEmpresasData";
import ComponenteEmpresas from "../../components/Empresas/index.js";

const Empresas = () => {
  const [data, setData] = useState([]);

  async function handleFetch() {
    const data = await getApiData("/empresas");

    console.log(`DATAAAAA EMPRTESAAAA ${data}`)
    setData(data);
  }

  useEffect( () => {
    handleFetch();
  }, []);

  return (
    <ComponenteEmpresas data={data} />
  );
};

export default Empresas;
