import api from "../config/api";

export async function sendData(url, data) {
  return await api.post(url, data).then(res => res);
}
