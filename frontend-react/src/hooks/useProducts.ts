import { useState } from "react";

import productsData
from "../data/products";

import type {
Product
} from "../types/product";

function useProducts(){

const [products]
= useState<Product[]>(
productsData
);

return{
products
};

}

export default useProducts;