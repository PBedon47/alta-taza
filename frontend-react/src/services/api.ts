const API_URL = "http://localhost:3000/api";

/* =========================
   PRODUCTS
========================= */

export const getProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
};

/* =========================
   AUTH
========================= */

export const loginUser = async (data: any) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
};

export const registerUser = async (data: any) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
};