import api from "../config/avaliacaoAPI";

export async function sendData(url, data) {
  return await api.post(url, data).then(res => res);
}

