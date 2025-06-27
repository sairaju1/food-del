import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext({ food_list: [] });

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [food_list, setFoodlist] = useState([]);

  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };

  const addToCart = async (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
    if (token) {
      await axios.post(url + "/api/cart/add", { itemId }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      let updatedCart;
      if (prev[itemId] > 1) {
        updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
      } else {
        const { [itemId]: _, ...rest } = prev;
        updatedCart = rest;
      }
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
    if (token) {
      await axios.post(url + "/api/cart/remove", { itemId }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      setFoodlist(response.data.data || []);
    } catch (error) {
      console.error("Error fetching food list:", error);
    }
  };

  const loadCartData = async (token) => {
    try {
      const response = await axios.get(`${url}/api/cart/get`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const cartData = response.data.cartData || {};
      setCartItems(cartData);
      saveCartToLocalStorage(cartData);
    } catch (error) {
      console.error("Error loading cart data:", error);
    }
  };

  useEffect(() => {
    async function loadData() {
      const savedCart = JSON.parse(localStorage.getItem("cartItems")) || {};
      setCartItems(savedCart);

      await fetchFoodList();
      const savedToken = localStorage.getItem("token");
      if (savedToken) {
        setToken(savedToken);
        await loadCartData(savedToken);
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>;
};

export default StoreContextProvider;
