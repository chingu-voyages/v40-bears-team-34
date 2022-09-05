import React from 'react'
import SearchForm from '../components/SearchForm'

const backgrounds = [
    'home-one',
    'home-two',
    'home-three',
    'home-four',
    'home-five',
    'home-six',
]
const background = Math.floor(Math.random() * backgrounds.length)

const Home = () => {
    return (
        <div
            className={`text-2xl min-h-[90vh] flex flex-col items-center justify-center bg-[#f2f2f2] bg-${backgrounds[background]} bg-no-repeat bg-center bg-cover bg-fixed`}
        >
            <SearchForm />
        </div>
    )
}

export default Home
