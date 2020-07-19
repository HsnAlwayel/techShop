import { decorate, observable } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class ProductStore {
    products = [];

    fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:8000/products");
            this.products = response.data;
        } catch (error) {
            console.error("ProductStore -> fetchProducts -> error", error);
        }
    };

    createProduct = (newProduct) => {
        newProduct.id = this.products[this.products.length - 1].id + 1;
        newProduct.slug = slugify(newProduct.name);
        this.products.push(newProduct);
    };

    updateProduct = (updatedProduct) => {
        const product = this.products.find((product) => product.id === updatedProduct.id);
        for (const key in product) product[key] = updatedProduct[key];
    };

    deleteProduct = (productId) => {
        this.products = this.products.filter((product) => product.id !== productId);
    };
}

decorate(ProductStore, {
    products: observable,
});

const productStore = new ProductStore();
productStore.fetchProducts();

export default productStore;