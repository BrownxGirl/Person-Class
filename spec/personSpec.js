let personObject= require('../src/person.js');

describe('should return the proprty values', function(){
    it('return the full content of greeting including the new Person object person and hello() method',function(){
        expect(personObject.greeting).toBe("Hello, my name is Ryan and I am 30years old. My interests are being a hardarse, agile, and ssd hard drives.")
    });
 });

 describe('should return the name property', function(){
    it('return the name property of the person object',function(){
        expect(personObject.person.name).toBe("Ryan")
    });
    it('return the gender property of the person object',function(){
        expect(personObject.person.gender).toBe("male")
    });
    it('return an array of interest from the person object',function(){
        expect(personObject.person.interests).toEqual([' being a hardarse', ' agile', ' and ssd hard drives.'])
    });
    it('return the age property of the person object',function(){
        expect(personObject.person.age).toEqual(30)
    });
 });







