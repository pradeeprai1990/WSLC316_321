import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Accordion } from "flowbite-react";

export default function MovieCompontent() {

    let [title,setTitle]=useState('')

    let [movie, setMovie] = useState([])

    let getMovieList = () => {
        //API data
        let apiUrl;
        if(title===''){ 
            apiUrl=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`
        }
        else{
            apiUrl=`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${title}`
        }
        
       

        axios.get(apiUrl)
            .then((apiRes) => apiRes.data) //API Data Return

            .then((finalRes) => {
                setMovie(finalRes.results)
            })




    }

    // let getValue=(event)=>{
    //     setTitle(event.target.value)
    // }




    useEffect(() => {
        getMovieList()
    }, [title])

    return (
        <div>

           




            <h1 className='text-center text-3xl font-bold py-5'>Movie App</h1>

            <form className='max-w-[1000px] mx-auto'>
                <input onChange={(event)=>setTitle(event.target.value)}   type="text" value={title} className='w-[100%] pl-3 border-2 h-12 rounded-[15px]' placeholder='Search Movie' />
            </form>

            <div className='max-w-[1320px] mx-auto mt-6 grid grid-cols-4 gap-5'>

                {movie.length >= 1
                    ?
                    movie.map((items, index) => <MovieItems movieData={items} />)

                    :

                    "Loading..."

                }




            </div>
        </div>
    )
}


function MovieItems({ movieData }) {
    let { title, poster_path } = movieData

    return (
        <div className='shadow-lg'>
            {
                poster_path!==null 
                ?
                <img src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} />
                :
                <img src={`https://www.wscubetech.com/_next/image?url=https%3A%2F%2Fdeen3evddmddt.cloudfront.net%2Fimages%2Fhome-images%2Fjodhpur-team.webp&w=640&q=75`} />
            }
            
            <h3 className='text-[20px] p-3'> {title} </h3>
        </div>

    )
}