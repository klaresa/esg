import api from "../config/documentosAPI";

export async function sendData(url, data) {
  return await api.post(url, data).then(res => res);
}
