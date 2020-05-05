const { Person } = require("../src/person.js");
let personObject = new Person("Ryan", 30, "male", [
  " being a hardarse",
  " agile",
  " and ssd hard drives.",
]);

describe("The Person class is being described", function () {
  it("return the name property of the person object", function () {
    expect(personObject.name).toBe("Ryan");
  });
  it("return the age property of the person object", function () {
    expect(personObject.age).toEqual(30);
  });
  it("return the gender property of the person object", function () {
    expect(personObject.gender).toBe("male");
  });
  it("return an array of interest from the person object", function () {
    expect(personObject.interests).toEqual([
      " being a hardarse",
      " agile",
      " and ssd hard drives.",
    ]);
  });
  it("return the full content of greeting including the new Person object person and hello() method", function () {
    expect(personObject.hello()).toBe(
      "Hello, my name is Ryan and I am 30years old. My interests are being a hardarse, agile, and ssd hard drives."
    );
  });
});
