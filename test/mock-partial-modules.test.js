import { getAllProducts, getProductById } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock("../src/database", () => {
  // sisanya ambil module asli
  const originalModule = jest.requireActual("../src/database");
  return {
    __esmodule: true,
    ...originalModule,
    // mock specific function in module
    getAllProducts: jest.fn(),
  };
});

test.failing("mock modules getProductById", () => {
  ProductService.findById(1);
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
