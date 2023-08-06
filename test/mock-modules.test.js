import { getAllProducts, getProductById } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock("../src/database");

test("mock modules getProductById", () => {
  getProductById.mockImplementation((id) => {
    return { id: id, name: "Mock Product" };
  });

  const product = ProductService.findById(1);
  expect(product).toEqual({ id: 1, name: "Mock Product" });
});

test("mock modules getAllProducts", () => {
  const products = [
    { id: 1, name: "Mock Product" },
    { id: 2, name: "Mock Product 2" },
  ];
  getAllProducts.mockReturnValue(products);

  const allProducts = ProductService.findAll();
  expect(allProducts.length).toBe(2);
  expect(allProducts[0].id).toBe(1);
  expect(allProducts[1].id).toBe(2);
  expect(ProductService.findAll()).toEqual(products);
});
