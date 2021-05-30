const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

// const p = new Product({
//     name: 'Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save()
//     .then(p => {
//         console.log(p)
//     })
//     .catch(e => {
//         console.log(e)
//     })

const seedProducts = [
    {
        name: 'Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Avacado',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic cauliflower ',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'low fat Milk',
        price: 2.69,
        category: 'dairy'
    },
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })