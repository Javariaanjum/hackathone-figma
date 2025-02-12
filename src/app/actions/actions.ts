import { Product } from "@/types/products";

// Add product to cart
export const addToCart = (product: Product) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

  // Check if the product already exists in the cart
  const existingProductIndex = cart.findIndex((item) => item._id === product._id);

  if (existingProductIndex > -1) {
    // Update quantity if product exists
    cart[existingProductIndex].inventory = (cart[existingProductIndex].inventory || 1) + 1;
  } else {
    // Add product to cart with initial quantity
    cart.push({ ...product, inventory: 1 });
  }

  // Save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Remove product from cart
export const removeFromCart = (productId: string) => {
  let cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

  // Filter out the product to remove
  cart = cart.filter((item) => item._id !== productId);

  // Save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Update product quantity in cart
export const updateCartQuantity = (productId: string, quantity: number) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const productIndex = cart.findIndex((item) => item._id === productId);

  if (productIndex > -1) {
    // Update the inventory/quantity of the product
    cart[productIndex].inventory = quantity;

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

// Get all items from cart
export const getCartItems = (): Product[] => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};



