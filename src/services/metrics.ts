import axios from "axios";

export interface Metric {
    name: string;
    impressions: number;
    clicks: number;
}

export const API_URL = 'http://localhost:8080/api/v1/metrics';
axios.defaults.baseURL = API_URL;
export const getMetrics = async () => {
    const res = await axios.get<Metric[]>(
        ``,
        {
          responseType: 'json',
        });
    return res.data;
}

export const createMetric = async (name: string, impressions: number, clicks: number) => {
    const res = await axios.post<Metric>(
        ``,
        {
            name,
            impressions,
            clicks
        }
    );
    return res.data;
}