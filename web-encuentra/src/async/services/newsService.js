import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const newsService = async () => {
    return await get(`${buildApiUri()}/v1/events`);
}
export default newsService;