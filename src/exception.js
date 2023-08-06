export class MyException extends Error {
  constructor(message) {
    super(message);
    this.name = "MyException";
  }
}

export const callme = (name) => {
  if (name == "Hanif") {
    throw new MyException("Hanif is not allowed");
  } else {
    return `Hello ${name}`;
  }
};
