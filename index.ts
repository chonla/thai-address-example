import ThaiAddr from "@chonla/thai-address";

console.log('Data version');
console.log(ThaiAddr.dataVersion());

console.log('All zip codes');
console.log(ThaiAddr.zips());

console.log('All provinces');
console.log(ThaiAddr.provinces());

console.log('Get entries which has zip code 10130');
console.log(ThaiAddr.findByZip('10130'));

console.log('Get districts in สมุทรปราการ');
console.log(ThaiAddr.districts('11000000'));

console.log('Get subdistricts in พระประแดง');
console.log(ThaiAddr.subdistricts('11040000'));

console.log('Get subdistrict data of บางยอ');
console.log(ThaiAddr.findBySubdistrictCode('11040800'));