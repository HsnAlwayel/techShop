import products from "../products"
import { decorate, observable } from "mobx";
import slugify from "react-slugify";

class ProductStore {
    createProduct = (newProduct) => {
        newProduct.id = this.products[this.products.length - 1].id + 1;
        newProduct.slug = slugify(newProduct.name);
        this.products.push(newProduct);
    };
    deleteProduct = (productId) => {
        this.products = this.products.filter((product) => product.id !== productId);
    };
    products = products;
}

decorate(ProductStore, {
    products: observable,
});

const productsStore = new ProductStore();

export default productsStore;