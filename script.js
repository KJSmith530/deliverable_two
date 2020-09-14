let rain = prompt('How many inches of rain fell?');
let star = "*"
console.log("Rain: " + star.repeat(rain));

let land = 50
if (rain > 20) {
  land *= .9
}
if (rain < 10) {
  land *= .8
}

let brand;

let fert = prompt('Did you use fertilizer?');
if (fert === 'yes') {
  brand = prompt('Did you use regular or premium fertilizer?')
} else {
  console.log("The yield should be " + land + " bushels per acre.")
}
if (brand === 'regular') {
  console.log("The yield should be " + land * 1.1 + " bushels per acre.")
}
if (brand === 'premium') {
  console.log("The yield should be " + land * 1.15 + " bushels per acre.")
}
console.log(.1 + .2)