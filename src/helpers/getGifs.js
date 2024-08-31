
export const getGif = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=t0qyh3hveB0aAMbHVYbSyvVUMGuIecxZ&q=${category}&limit=20`;
    const response = await fetch(url);
    const {data} = await response.json();
    const gifts = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }))
    return gifts;
}