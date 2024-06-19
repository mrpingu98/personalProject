import { get } from "../../Store/apiStore";
import { apiEndpoints } from "../../Store/Endpoints";

export const getProducts = async () => {
    try {
        const data = await get(apiEndpoints.products)
        return data
    }
    catch (error: any) {
        console.log(error)
    }
}