var assert = require('chai').assert;
const SortingHat = require("../index");

describe('Class Initialized', ()=> {
    let School = new SortingHat({
        capacity:12
    })
  it('This will initialize my SortingHat class with Hat capacity 12 ', ()=> {
    assert.equal(School.houseCapacity, 12);
  });
  it('This will execute registration with input(1234,B,V) ', ()=> {
    const boardingHouses = School.register(1000,"B","V");
    assert.deepEqual(boardingHouses, {"BV":[1000],"NA":[]});
  });
  it('This will execute registration with input(1,B,V) and will be validated with digit length ', ()=> {
    const boardingHouses = School.register(1,"B","V");
    assert.equal(boardingHouses, "Enter roll number in 4 digits");
  });
  it('This will execute registration with input(a123,B,V) and will be validated with string', ()=> {
    const boardingHouses = School.register("a123","B","V");
    assert.equal(boardingHouses, "Enter roll number integer value");
  });
  it('This will add 12 stundents', ()=> {
    School.register(1000,"B","V");
    School.register(1001,"a","V");
    School.register(1002,"a","V");
    School.register(1003,"b","nV");
    School.register(1004,"b","V");
    School.register(1005,"a","nV");
    School.register(1007,"a","V");
    School.register(1008,"a","nV");
    School.register(1009,"b","nV");
    School.register(1010,"b","V");
    School.register(1011,"a","nV");
    School.register(1012,"B","nV");
    const boardingHouses = School.getBoardingHouses();
    assert.deepEqual(boardingHouses, {
        NA: [],
        BV: [ 1000, 1004, 1010 ],
        AV: [ 1001, 1002, 1007 ],
        BNV: [ 1003, 1009, 1012 ],
        ANV: [ 1005, 1008, 1011 ]
      });
  });
  it('This will add 13 students', ()=> {
    School.register(1000,"B","V");
    School.register(1001,"a","V");
    School.register(1002,"a","V");
    School.register(1003,"b","nV");
    School.register(1004,"b","V");
    School.register(1005,"a","nV");
    School.register(1007,"a","V");
    School.register(1008,"a","nV");
    School.register(1009,"b","nV");
    School.register(1010,"b","V");
    School.register(1011,"a","nV");
    School.register(1012,"B","nV");
    School.register(1013,"B","nV");
    const boardingHouses = School.getBoardingHouses();
    assert.deepEqual(boardingHouses, {
        NA: [ 1013 ],
        BV: [ 1000, 1004, 1010 ],
        AV: [ 1001, 1002, 1007 ],
        BNV: [ 1003, 1009, 1012 ],
        ANV: [ 1005, 1008, 1011 ]
      });
  });
});