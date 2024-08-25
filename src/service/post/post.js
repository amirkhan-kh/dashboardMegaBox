import { instance } from "../axios.config";


export const postAPI = {
    getAll: async()=>instance.get("/products"),
    getPostById: async(id)=>instance.get(`/products/${id}`),
    
}
