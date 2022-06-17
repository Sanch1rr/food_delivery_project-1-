import { createContext, useState, useContext, useEffect } from "react";
import { otherServices } from "../services/otherServices";

export const CategoryContext = createContext({});

export function useCategory() {
  return useContext(CategoryContext);
}

export const CategoryProvider = (props) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    otherServices
      .getCategory()
      .then((res) => res.json())
      .then((data) => {
        setCategory(data.data);
      });
  }, []);
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      {props.children}
    </CategoryContext.Provider>
  );
};
