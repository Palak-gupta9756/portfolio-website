import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "/api";

const api = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
});

// Projects
export const getProjects = () => api.get("/projects");
export const createProject = (data) => api.post("/projects", data);

// Contact
export const submitContact = (data) => api.post("/contact", data);
export const getMessages = () => api.get("/contact");

// Skills
export const getSkills = () => api.get("/skills");

export default api;
