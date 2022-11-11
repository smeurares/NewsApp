import { useEffect, useState } from "react";

export function useFetch(){
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const fetchNews = (query = '', startDate = '', endDate = '') => {
    
    setLoading(true)
    let url = query.length !== 0 ? `https://newsapi.org/v2/everything?q=${query}&searchIn=title&apiKey=c046999cab95482ba5d06d78faf8dd4b` : 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c046999cab95482ba5d06d78faf8dd4b';
    if(startDate.length > 0){
      startDate = startDate.toISOString();
      endDate = endDate.toISOString();
      url = `https://newsapi.org/v2/everything?q=${query}&from=${startDate}&to=${endDate}&searchIn=title&apiKey=c046999cab95482ba5d06d78faf8dd4b`
    }

    fetch(url)
   .then(response => {
     if(response.ok){
       return response.json()
     }
     throw response
   })
   .then(data =>{ 
    console.log(data)
    setNews(data.articles)})
   .catch(error => {
     console.error("Error catching data: ", error)
     setError(error)
   })
   .finally( () => setLoading(false))
  
  }
  useEffect(() => {
   fetchNews()
  }, []);

  return {news, loading, error, fetchNews}

}