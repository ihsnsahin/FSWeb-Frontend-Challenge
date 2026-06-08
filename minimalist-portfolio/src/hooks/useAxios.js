import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url, postData, config, dep) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null)
            try {
                const response = await axios.post(url, postData, config);
                console.log(response.data)
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [dep])
    return { data, loading, error }
}
export default useAxios;


