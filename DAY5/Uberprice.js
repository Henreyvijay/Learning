class uberperKMprice {
  constructor(travellerName, perKMprice,noOfKM) {
    this.travellerName = travellerName;
    this.perKMprice = perKMprice;
    this.noOfKM = noOfKM;
  }

  }

const raja = new uberperKMprice(
  "raja",
  30,
  5
);
const ravi = new uberperKMprice(
  "ravi",
  30,
  15
);

console.log(raja);
console.log(ravi);
console.log(raja.perKMprice(), raja.noOfKM());
console.log(ravi.perKMprice(), ravi.noOfKM());
