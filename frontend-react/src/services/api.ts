const API_URL = "http://localhost:3000/api";

/* =========================
   AUTH
========================= */

export const loginUser = async (data: { email: string; password: string }) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return res.json();
};

export const registerUser = async (data: { nombre: string; email: string; password: string }) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return res.json();
};

/* =========================
   PRODUCTS
========================= */

export const getProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
};

/* =========================
   ORDERS
========================= */

export const createOrder = async (data: {
  user_id: number | null;
  total: number;
  direccion: string;
  metodo_pago: string;
  items: any[];
}) => {
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return res.json();
};