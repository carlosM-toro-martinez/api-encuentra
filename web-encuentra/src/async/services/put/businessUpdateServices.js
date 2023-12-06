import { put } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const businessService = async (idBusiness, payload) => {
    console.log(`${buildApiUri()}/v1/business/${idBusiness}`);
    return await put(`${buildApiUri()}/v1/business/${idBusiness}`, payload, true);
    //return await get('https://encuentra-api.onrender.com/api/v1/museos');
}
export default businessService;