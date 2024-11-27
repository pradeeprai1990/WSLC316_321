import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Accordion } from "flowbite-react";

export default function MovieCompontent() {

    let [movie, setMovie] = useState([])

    let getMovieList = () => {
        //API data
        axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`)
            .then((apiRes) => apiRes.data) //API Data Return

            .then((finalRes) => {
                setMovie(finalRes.results)
            })




    }

    useEffect(() => {
        getMovieList()
    }, [])

    return (
        <div>

            <div className='max-w-[1320px] mx-auto'>
                <Accordion>

                    {
                    movie.map((movieItems) => {

                        return (
                            <Accordion.Panel>
                                <Accordion.Title>
                                    {movieItems.title}
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    {movieItems.overview}
                                    </p>
                                    
                                   
                                </Accordion.Content>
                            </Accordion.Panel>
                        )
                    })}


                </Accordion>
            </div>





            <h1 className='text-center text-3xl font-bold py-5'>Movie App</h1>

            <form className='max-w-[1000px] mx-auto'>
                <input type="text" className='w-[100%] pl-3 border-2 h-12 rounded-[15px]' placeholder='Search Movie' />
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
            <img src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} />
            <h3 className='text-[20px] p-3'> {title} </h3>
        </div>

    )
}