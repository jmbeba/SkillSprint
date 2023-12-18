export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : import.meta.env.VITE_BACKEND_URL;
