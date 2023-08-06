beforeAll(async () => {
  console.info("beforeAll Outer");
});

afterAll(() => {
  console.info("afterAll Outer");
});

beforeEach(() => {
  console.info("beforeEach Outer");
});

afterEach(() => {
  console.info("afterEach Outer");
});

test("first test Outer", () => {
  console.info("first test Outer");
});

describe("Inner", () => {
  beforeEach(() => {
    console.info("beforeEach Inner");
  });

  afterEach(() => {
    console.info("afterEach Inner");
  });
  test("first test Inner", () => {
    console.info("first test Inner");
  });
});
