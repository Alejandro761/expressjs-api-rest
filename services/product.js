const faker = require('faker')
const boom = require('@hapi/boom')

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
                image: faker.image.imageUrl(),
                isBlock: faker.datatype.boolean()
            })
        }
    }
    
    async create(data) {
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data
        }

        this.products.push(newProduct);
        return newProduct
    }

    find() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.products)
            }, 5000);
        })
    }
    
    async findOne(id) {
        // const name = this.getHi() //para forzar el middleware de error
        const product = this.products.find(product => product.id === id);
        if (!product) {
            throw boom.notFound('Product not found')
        }
        if (product.isBlock) {
            throw boom.conflict('Product is block')
        }
        return product
    }

    async update(id, changes) {
        const index = this.products.findIndex(product => product.id === id)
        
        if (index === -1){
            throw boom.notFound('Product not found')
        }
        
        this.products[index] = {
            ...this.products[index],
            ...changes
        }
        return this.products[index]
    }
    
    async delete(id) {
        const index = this.products.findIndex(product => product.id === id)
        
        if (index === -1){
            throw boom.notFound('Product not found')
        }
        
        this.products.splice(index, 1)
        return {id}
    }
}

module.exports = ProductService