import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export const getUsers = () => api.get("/api/users");
export const getUser = (userId) => api.get(`/api/user/${userId}`);
export const createUser = (user) => api.post("/api/user", user);
export const updateUser = (userId, data) => api.put(`/api/user/${userId}`, data);
export const deleteUser = (user) => api.delete(`/api/user/${user._id}`);

export default api;
