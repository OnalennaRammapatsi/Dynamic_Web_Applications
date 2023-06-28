const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

//Exercise 1
names.forEach(name => {
  console.log(name);
});


// Exercise 2
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// Exercise 3
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// Exercise 4
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Exercise 5
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// Exercise 6
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);

// Exercise 7
const nameProvinceObject = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log(nameProvinceObject);