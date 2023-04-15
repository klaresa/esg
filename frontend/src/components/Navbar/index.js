import React, {useContext, useEffect} from "react";
import {Wrapper, Path, Content} from "./styles";
import {Link} from "react-router-dom";
import {AuthContext} from "../../auth/AuthContext";

export const NavBar = () => {
  const { getUserPermission, handleLogout } = useContext(AuthContext);

  const routes = [
    {
      "profile": "",
      "paths": [
        {"path": "/", "description": "index"},
      ],
    },
    {
      "profile": "admin",
      "paths": [
        {"path": "/admin", "description": "home"},
        {"path": "/admin/empresas", "description": "empresas"},
        {"path": "/admin/documentos", "description": "documentos"},
        {"path": "/admin/avaliacao", "description": "avaliações"},
      ],
    },
    {
      "profile": "empresa",
      "paths": [
        {"path": "/empresa/", "description": "home"},
        {"path": "/empresa/perfil", "description": "perfil"},
        {"path": "/empresa/documentos", "description": "documentos"},
        {"path": "/empresa/avaliacao", "description": "avaliações"},
      ],
    },
  ];

  return (
      getUserPermission === "" ? "" : (

          <Wrapper>
            <Content>
              { getUserPermission === "" ? (
                  <Path>deslogado</Path>
              ) : (
                  <Path><a onClick={handleLogout}>sair</a></Path>
              )}
            </Content>
            <Content>
              {routes.map((route, index) => (
                  route.paths.map((pat, indPath) => {
                    if (getUserPermission === route.profile) {
                      return (
                          <Path key={`path_${indPath}`}>
                            <Link to={pat.path}>{pat.description}</Link>
                          </Path>
                      );
                    }
                  })
              ))}
            </Content>
          </Wrapper>
      )
  );
};
