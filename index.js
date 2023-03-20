class ProductManager {

    constructor(){
        this.products = []
    }

    addProducts(title, description, price, thumbnail, code, stock){
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: this.#generateId()
        }

        const productCode = this.validateCodeProduct(code)
        debugger
        if(productCode === undefined && title && description && price && thumbnail && stock){
            this.products.push(product)
        } else {
            console.log("Error al cargar el producto")

        }
    }

    validateCodeProduct(code) {
        return this.products.find((product)=>product.code===code)
    }

    getProducts(){
        return this.products
    }
    
    getProductsById(id){
        const productById = this.products.find((product)=>product.id===id)
        if (productById === undefined){
            console.log("Not found")
        } else {
            return productById
        }
    }

    

    #generateId() {
        let id = 1
        if (this.products.length !== 0){
            id = this.products[this.products.length - 1].id + 1
        }
        return id
    }
}


