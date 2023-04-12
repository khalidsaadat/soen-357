import React, { useEffect, useState } from "react"
import Helmet from "helmet";

import background_img from '../static/images/teahub.png'

function Home() { 
    return (
        <div style={{backgroundImage: `url(${background_img})`, height: '90vh'}} className='bg-cover'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>

           <div className="container mx-auto ">
                <div className="text-white mb-[50rem]">
                    &nbsp;
                </div>
                <h1 className="text-white text-6xl pt-[20rem] homeBgTitle">
                    Simplify Your Meal Prep with Personalized Plans and Delicious Recipes.
                </h1>

                <a href="#" class="inline-flex items-center justify-center px-5 py-3 mt-8 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Browse Meal Plans
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
           </div>

        </div>

    );
}


export default Home;