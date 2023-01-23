const authHeader = (apiKey, host) => {
    let header = {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': host
    };
    return header;
};

export default authHeader;