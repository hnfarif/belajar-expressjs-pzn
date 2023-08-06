test("test array", () => {
  const names = ["Hanif", "Arif", "Ganteng"];

  expect(names).toContain("Arif");
  expect(names).toEqual(["Hanif", "Arif", "Ganteng"]);
});

test("test array object", () => {
  const persons = [{ name: "Hanif" }, { name: "Arif" }, { name: "Ganteng" }];

  expect(persons).toContainEqual({ name: "Arif" });
  expect(persons).toEqual([
    { name: "Hanif" },
    { name: "Arif" },
    { name: "Ganteng" },
  ]);
});
