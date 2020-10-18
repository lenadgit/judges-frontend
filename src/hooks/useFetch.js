import { useState, useEffect } from 'react';
import axios from 'axios';

export default (url) => {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ response, setResponse ] = useState(null);
	const [ error, setError ] = useState(null);
	const [ params, setParams ] = useState({});

	useEffect(
		() => {
			setIsLoading(true);
			axios
				.get(url, { params })
				.then(({ data }) => setResponse(data))
				.then(() => setIsLoading(false))
				.catch((err) => setError(err))
				.finally(() => setIsLoading(false));
            },
            [ params ]
        );
    
        const doFetch = (params) => {
            setParams(params);
        };
        return [ { isLoading, response, error }, doFetch ];
    };
