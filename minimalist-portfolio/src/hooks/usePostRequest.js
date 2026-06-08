import axios from "axios";
import { useState } from "react";

const usePostRequest = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postRequest = async (url, postData, config) => {
        setLoading(true);
        setError(null)
        try {
            const response = await axios.post(url, postData, config);
            setData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    return { data, loading, error, postRequest }
}
export default usePostRequest;


