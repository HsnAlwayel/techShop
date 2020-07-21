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

    createProduct = async (newProduct) => {
        try {
            const res = await axios.post(`http://localhost:8000/products`, newProduct);
            this.products.push(res.data);
        } catch (error) { console.log("Product ->create-> error", error); }
    };

    updateProduct = async (updatedProduct) => {
        try {
            await axios.put(`http://localhost:8000/products/${updatedProduct.id}`, updatedProduct);
            const product = this.products.find((product) => product.id === updatedProduct.id);
            for (const key in product) product[key] = updatedProduct[key];
        } catch (error) { console.log("Product->updatedProduct ->error", error) };
    };

    deleteProduct = async (productId) => {
        await axios.delete(`http://localhost:8000/products/${productId}`);
        this.products = this.products.filter((product) => product.id !== productId);
    };
}

decorate(ProductStore, {
    products: observable,
});

const productStore = new ProductStore();
productStore.fetchProducts();

export default productStore;