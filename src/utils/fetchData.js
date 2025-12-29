export const exerciseOptions = {
    method: 'GET', 
    url: 'https://exerciseb.p.rapidapi.com/exercise/bodyPartList'
}

export const fetchData = async(url,options)=>{
    const response =  await fetch(url,options)
    const data = await response.json()

    return data;
}
