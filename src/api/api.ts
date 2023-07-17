import axios from "axios";

const instance = axios.create({
    baseURL: 'https://648837a20e2469c038fd4015.mockapi.io/api/',

})

export const productsAPI = {
    getProductsData() {
        return instance.get(`items`)
            .then(response => {
                return response
            })
    },
    getProductsDataSorted(sortBy: string, order: string) {
        return instance.get(`https://648837a20e2469c038fd4015.mockapi.io/api/items?sortBy=${sortBy}&order=${order}`)
    },
    getProductById(id: string) {
        return instance.get(`items/${id}`)
    }
}