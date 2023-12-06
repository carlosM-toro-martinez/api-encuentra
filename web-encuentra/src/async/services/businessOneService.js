import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const businessService = async (idBusiness) => {
    return await get(`${buildApiUri()}/v1/business/section/${idBusiness}`);
    //return await get('https://encuentra-api.onrender.com/api/v1/museos');
}
export default businessService;