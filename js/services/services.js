const postData = async (url, data) => {
    let request = await fetch(url, {
    method: "POST",
    headers: {
        "Content-type": "application/json",
    },
    body: data,
});
return await request.json();
};

let getData = async (url) => {
    let request = await fetch(url);
    if (!request.ok) {
        throw new Error(`Ошибка при получении данных. Статус: ${request.status}`);
    }
    return await request.json();
};

export {postData, getData};