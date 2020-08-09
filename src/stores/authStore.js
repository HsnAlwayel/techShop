import { decorate, observable } from "mobx";
import instance from "./instance";

class AuthStore {
    signup = async (userData) => {
        try {
            await instance.post("/signup", userData);
        } catch (error) {
            console.log("AuthStore -> signup -> error", error);
        }
    };

}

decorate(AuthStore, {});

const authStore = new AuthStore();

export default authStore;