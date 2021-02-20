import axios, { AxiosInstance } from "axios"
import { Repository } from "../../models";

class GithubAPI {
    githubAxios: AxiosInstance;

    constructor(){
        this.githubAxios = axios.create({
            baseURL: 'https://api.github.com'
        });
    }
    getRepository = async (repositoryPath: string): Promise<Repository | null> => {
        try {
            const { data } = await this.githubAxios.get(`/repos/${repositoryPath}`)
            return data;
        } catch (e){
            console.error(e);
            return null;
        }
    }
}

const api = new GithubAPI();
export default api;