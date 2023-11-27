export const options = {
method: 'GET',
params: {limit: '10'},
headers: {
  'X-RapidAPI-Key': '7e5dd87463msh677b0f8a2d56550p159038jsn7f5df81f6f40',
  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
}
};
export const youtubeoptions = {
method: 'GET',
params: {
  id: 'UCE_M8A5yxnLfW0KghEeajjw'
},
headers: {
  'X-RapidAPI-Key': '7e5dd87463msh677b0f8a2d56550p159038jsn7f5df81f6f40',
  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
}
};

  
export const fetchData= async (url, options)=>{
    const respons = await fetch (url,options);
    const data = await respons.json()
    return data
}