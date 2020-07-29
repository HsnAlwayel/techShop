import { decorate, observable } from "mobx";
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
            const formData = new FormData();
            for (const key in newProduct) formData.append(key, newProduct[key]);
            const res = await axios.post(`http://localhost:8000/products`, formData);
            this.products.push(res.data);
        } catch (error) { console.log("Product ->create-> error", error); }
    };

    updateProduct = async (updatedProduct) => {
        try {
            const formData = new FormData();
            for (const key in updatedProduct) formData.append(key, updatedProduct[key]);
            await axios.put(`http://localhost:8000/products/${updatedProduct.id}`, formData);
            const product = this.products.find((product) => product.id === formData.id);
            for (const key in product) product[key] = formData[key];
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