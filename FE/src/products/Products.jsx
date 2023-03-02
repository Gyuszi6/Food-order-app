import Samples from "./samples";
import ProductCard from "./ProductCard";
import { ProductsContainer } from "./styles";
import { useSelector } from "react-redux";

const Products = () => {
  const { type, minPrice, maxPrice } = useSelector((state) => state.type);
  return (
    <ProductsContainer>
      {type.length === 0
        ? []
        : Samples.map((product) =>
            type.includes(product.foodtype) &&
            (minPrice <= product.price || minPrice === "") &&
            (maxPrice >= product.price || maxPrice === "") ? (
              <ProductCard
                name={product.name}
                id={product.id}
                key={product.id}
                img={product.img}
                price={product.price}
                foodtype={product.foodtype}
              />
            ) : (
              []
            )
          )}
    </ProductsContainer>
  );
};

export default Products;
