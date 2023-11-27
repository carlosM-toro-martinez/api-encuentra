import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const articleService = async (section) => {
    return await get(`${buildApiUri()}/v1/${section}`);
}
export default articleService;