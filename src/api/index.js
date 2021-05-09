import axios from 'axios';

export const getData = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

export const sendData = async (url, payload) => axios.post(url, payload);

export const deleteItem = async (url, id) => axios.delete(`${url}/${id}`);

export const updateItem = async (url, payload) => axios.patch(`${url}/${payload.id}`, payload);
