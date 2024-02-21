const items = [
    { name: 'Bike',     price: 100 },
    { name: 'Tv',       price: 200 },
    { name: 'Album',    price: 10 },
    { name: 'Book',     price: 5 },
    { name: 'Phone',    price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 },
]

// Filter Method
const filterItems = items.filter((item) => {
    return item.price <= 100
})

console.log(filterItems);

const expensiveItems = items.filter((item) => {
    return item.price >= 200
})

console.log(expensiveItems);

// Map Method
const itemNames = items.map((item) => {
    return item.name
})

console.log(itemNames);

const itemPrice = items.map((item) => {
    return item.price
})

console.log(itemPrice);

// Find Method
const foundItem = items.find((item) => {
    return item.name ==='Book'
})

console.log(foundItem);

const findItem = items.find((item) => {
    return item.price === 1000
})

console.log(findItem);

// forEach Method
items.forEach((item) => {
    console.log(item.name)
});

items.forEach((item) => {
    console.log(item.price)
});

// Some Method
const hasItem = items.some((item) => {
    return item.price <= 100
})

console.log(hasItem);

const hasFreeItem = items.some((item) => {
    return item.price <= 0
})

console.log(hasFreeItem);

// Every Method
const allItem = items.every((item) => {
    return item.price <= 100
})

console.log(allItem);

const bigItem = items.every((item) => {
    return item.price <= 1000
})

console.log(bigItem);

// Reduce Method
const itemTotal = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.log(itemTotal);

// Includes Method
const number = [1, 2, 3, 4, 5]

const includesTwo = number.includes(2)

console.log(includesTwo)

const includesSeven = number.includes(7)

console.log(includesSeven)
