import { decorate, observable } from "mobx";
import axios from "axios";

class ProductStore {
    products = [];
    loading = [];
    fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:8000/products");
            this.products = response.data;
            this.loading = false;
        } catch (error) {
            console.error("ProductStore -> fetchProducts -> error", error);
        }
    };


    getProductById = (productId) => {
        console.log(this.products.find((product) => product.id === productId));
        return this.products.find((product) => product.id === productId);
    }

    createProduct = async (newProduct, vendor) => {
        try {
            const formData = new FormData();
            for (const key in newProduct) formData.append(key, newProduct[key]);
            const res = await axios.post(`http://localhost:8000/vendors/${vendor.id}/products`, formData);
            this.products.push(res.data);
            vendor.products.push({ id: res.data.id });
        } catch (error) { console.log("Product ->create-> error", error); }
    };

    updateProduct = async (updatedProduct) => {
        try {
            const formData = new FormData();
            for (const key in updatedProduct) formData.append(key, updatedProduct[key]);
            await axios.put(`http://localhost:8000/products/${updatedProduct.id}`, formData);

            const product = this.products.find((product) => product.id === updatedProduct.id);
            for (const key in updatedProduct) product[key] = updatedProduct[key];
        } catch (error) { console.log("Product->updatedProduct ->error", error) };
    };

    deleteProduct = async (productId) => {
        await axios.delete(`http://localhost:8000/products/${productId}`);
        this.products = this.products.filter((product) => product.id !== productId);
    };
}

decorate(ProductStore, {
    products: observable,
    loading: observable,
});

const productStore = new ProductStore();
productStore.fetchProducts();

export default productStore;