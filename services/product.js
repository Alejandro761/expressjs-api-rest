const faker = require('faker')

class ProductService {

    constructor() {
        this.products = []
        this.generate()
    } 
    
    generate() {
        const limit = 100;
        
        for (let index = 0; index < limit; index++) {
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                precio: parseInt(faker.commerce.price()),
                image: faker.image.imageUrl()
            })
        }
    }
    
    create() {
    }

    find() {
        return this.products;
    }
    
    findOne(id) {
        return this.products.find(product => product.id === id);
    }

    update() {

    }
}

module.exports = ProductService