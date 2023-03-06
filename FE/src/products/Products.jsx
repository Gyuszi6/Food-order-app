import ProductCard from "./ProductCard";
import { ProductsContainer } from "./styles";
import { useSelector } from "react-redux";

const Products = () => {
  const { type, minPrice, maxPrice } = useSelector((state) => state.type);
  const { foods } = useSelector((state) => state.food);
  return (
    <ProductsContainer>
      {type.length === 0
        ? []
        : foods.map((product) =>
            type.includes(product.type) &&
            (minPrice <= product.price || minPrice === "") &&
            (maxPrice >= product.price || maxPrice === "") ? (
              <ProductCard
                name={product.name}
                id={product.foodId}
                key={product.foodId}
                description={product.description}
                img={product.image}
                price={product.price}
                foodtype={product.type}
              />
            ) : (
              []
            )
          )}
    </ProductsContainer>
  );
};

export default Products;
