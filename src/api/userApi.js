import apiClient from "./api.js"

const userAPI = {
    getLodging: async () => {
        return await apiClient("/lodging", {
            method: "GET",
        })
    },
    getLodgingDetails: async (id) => {
        return await apiClient(`/lodging/${id}`, {
            method: "GET",
        })
    },
}

export default userAPI