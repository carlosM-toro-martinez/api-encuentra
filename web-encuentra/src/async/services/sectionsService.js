import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const sectionsService = async () => {
    return await get(`${buildApiUri()}/v1/apartados`);
}
export default sectionsService;