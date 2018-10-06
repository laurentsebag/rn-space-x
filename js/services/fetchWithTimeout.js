const fetchWithTimeout = (url, options) => {
    let fetchOptions;
    const requestPromises = [];

    if (options.timeout) {
        fetchOptions = Object.assign({}, options);
        delete fetchOptions.timeout;
        
        requestPromises.push(new Promise((_, reject) =>
           setTimeout(() => reject(new Error('timeout')), options.timeout)
        ));
    } else {
        fetchOptions = options;
    }

    requestPromises.push(fetch(url, fetchOptions));
    
    return Promise.race(requestPromises);
};

export default fetchWithTimeout;