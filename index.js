const ThaiAddr = require('@chonla/thai-address').default;

const thaiAddr = new ThaiAddr();

console.log('Data version');
console.log(thaiAddr.dataVersion());

console.log('All zip codes');
console.log(thaiAddr.zips());

console.log('All provinces');
console.log(thaiAddr.provinces());

console.log('Get entries which has zip code 10130');
console.log(thaiAddr.findByZip('10130'));

console.log('Get districts in สมุทรปราการ');
console.log(thaiAddr.districts('11000000'));

console.log('Get subdistricts in พระประแดง');
console.log(thaiAddr.subdistricts('11040000'));

console.log('Get subdistrict data of บางยอ');
console.log(thaiAddr.findBySubdistrictCode('11040800'));
