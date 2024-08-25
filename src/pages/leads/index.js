import { leadApi } from "../../service/axios.config";

export const leadsAPI = {
    getAll: async()=>leadApi.get("/leads"),
    getById: async(id)=>leadApi.get(`/leads/${id}`),
    create: async(data)=>leadApi.post(`/leads/`,data),
    update: async(id,data)=>leadApi.patch(`/leads/${id}`, data),
    delete: async(id)=>leadApi.delete(`/leads/${id}`)
}