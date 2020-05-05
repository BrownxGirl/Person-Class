const { Person } = require("../src/person.js");
let person = new Person("Ryan", 30, "male", [
  " being a hardarse",
  " agile",
  " and ssd hard drives.",
]);

describe("The Person class is being described", function () {
  it("Should return the name property of the person object", function () {
    expect(person.name).toBe("Ryan");
  });
  it("Should return the age property of the person object", function () {
    expect(person.age).toEqual(30);
  });
  it("Should return the gender property of the person object", function () {
    expect(person.gender).toBe("male");
  });
  it("Should return an array of interest from the person object", function () {
    expect(person.interests).toEqual([
      " being a hardarse",
      " agile",
      " and ssd hard drives.",
    ]);
  });
  it("Should return the full content of greeting including the new Person object person and hello() method", function () {
    expect(person.hello()).toBe(
      "Hello, my name is Ryan and I am 30years old. My interests are being a hardarse, agile, and ssd hard drives."
    );
  });
});
