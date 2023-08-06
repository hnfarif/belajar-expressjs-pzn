test("test tobe", () => {
  const name = "Hanif";
  const hello = `Hello ${name}`;

  expect(hello).toBe("Hello Hanif");
});

test("test equals", () => {
  let person = { id: 1, name: "Hanif" };
  Object.assign(person, { age: 20 });

  expect(person).toEqual({ id: 1, name: "Hanif", age: 20 });
});
