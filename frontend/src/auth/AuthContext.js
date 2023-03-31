import React, { createContext, useEffect, useState } from 'react';
import api from '../config/api';
import { useNavigate } from 'react-router-dom';
import { getTokenHeaders, removeToken, getTokenData, setToken } from '../services/token-service';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const navigate = useNavigate();

	const [getUserInfo, setUserInfo] = useState({type: 'unauthorized'});

	const [getUserPermission, setUserPermission] = useState('');

	function handleLogout() {
		setUserPermission('');
		setUserInfo({type: 'unauthorized'});

		removeToken();

    navigate("/login");
	}

	async function handleLogin(data) {
		try {
			const request = await api.post('/auth/local/signin', data);

			if (request.data) {
				const { id, type, access_token } = request.data;

				setUserInfo({ id: request.data.id, type: request.data.type });

				setUserPermission(request.data.type);

        setToken('token', JSON.stringify({ id, type, access_token }));

        return request;
			}
		} catch (err) {
			console.error(err);
		}
	}

	const validate = async () => {
		const tokenHeaders = getTokenData();

		await api.get('/authenticate', tokenHeaders)
				.then((res) => {
					// setUserPermission(parse.type);
					return true;
				})
				.catch((err) => {
					removeToken();
					return false;
				});
	};

	useEffect(() => {
		(async () => {
			console.log('-------- reloading browser --------');
			const tokenExists = await getTokenData();

			if (tokenExists) {
				console.log('--- entra aqui quando logado ---');
				setUserInfo(tokenExists);
			}

			if (tokenExists) setUserPermission(tokenExists.type);

    })();
	}, []);

	return (
			<AuthContext.Provider value={{getUserPermission, getUserInfo, handleLogout, handleLogin}}>
				{children}
			</AuthContext.Provider>
	);
};
