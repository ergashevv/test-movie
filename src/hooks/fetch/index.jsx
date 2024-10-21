import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, page = null, genreId = "") => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const baseUrl = "https://api.themoviedb.org/3/";
    const token = "?api_key=41ee00ef54c639e104c9b60ce5d3736b";

    useEffect(() => {
        const fetchData = async () => {
            try {
                let fullUrl = baseUrl + url + token + genreId;

                if (page && !url.includes('/movie/')) {
                    fullUrl += `&page=${page}`;
                }

                const response = await axios.get(fullUrl);
                console.log(response);

                // axios avtomatik ravishda JSON formatini qaytaradi
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, [url, page]);

    return { data, loading, error };
};

export default useFetch;
