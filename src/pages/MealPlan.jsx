import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../static/css/login.css";
import breakfast from '../static/images/breakfast.jpeg'
import lunch from '../static/images/lunch.jpg'
import dinner from '../static/images/dinner.jpeg'
import { Link } from "react-router-dom";

const MealPlan = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem("loggedIn", 1);
    
    navigate("/");
  };

  return (
    <div className="container" style={{padding: '3rem 0rem 0rem 3rem'}}>

        <div className="h-screen bg-gray-100 p-6">
            <h1 className="text-3xl mb-4 font-bold">Meal Plan</h1>
            <div  class='flex bg-white shadow-md justify-center rounded-lg overflow-x-scroll mx-auto py-4 px-2  md:mx-12'>
                
                <div class='flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
                    <div class='flex items-center px-4 py-4'>
                        <div class='text-center'>
                            <p class='text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300'> Sun </p>
                            <p class='text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300'> 23 </p>
                        </div>
                    </div>
                </div>
                
                <div class='flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
                    <div class='flex items-center px-4 py-4'>
                        <div class='text-center'>
                            <p class='text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300'> Mon </p>
                            <p class='text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300'> 24 </p>
                        </div>
                    </div>
                </div>
                
                <div class='flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
                    <div class='flex items-center px-4 py-4'>
                        <div class='text-center'>
                            <p class='text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300'> Tue </p>
                            <p class='text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300'> 25</p>
                        </div>
                    </div>
                </div>
                
                <div class='flex group bg-purple-300 shadow-lg light-shadow rounded-lg mx-1 cursor-pointer justify-center relative w-16 content-center'>
                    <span class="flex h-3 w-3 absolute -top-1 -right-1">
                    <span class="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-purple-400 "></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                    </span>
                    <div class='flex items-center px-4 py-4'>
                        <div class='text-center'>
                            <p class='text-purple-900 text-sm'> Wed </p>
                            <p class='text-purple-900  mt-3 font-bold'> 26 </p>
                        </div>
                    </div>
                </div>
                
                <div class='flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300 content-center	 cursor-pointer justify-center w-16'>
                    <div class='flex items-center px-4 py-4'>
                        <div class='text-center'>
                            <p class='text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300'> Thu </p>
                            <p class='text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300'> 27 </p>
                        </div>
                    </div>
                </div>
                
                <div class='flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
                    <div class='flex items-center px-4 py-4'>
                        <div class='text-center'>
                            <p class='text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300'> Fri </p>
                            <p class='text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300'> 28 </p>
                        </div>
                    </div>
                </div>
                
                <div class='flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
                    <div class='flex items-center px-4 py-4'>
                        <div class='text-center'>
                            <p class='text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300'> Sat </p>
                            <p class='text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300'> 29 </p>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
            <div className="mt-6">
                <div className="text-lg font-bold">
                    Wednesday, 26 Apri 2023
                </div>
            </div>

            <div className="flex gap-12 p-4">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={breakfast} alt="" />
                    </a>
                    <span className="text-lg p-5 bg-white rounded-lg" style={{position: 'absolute', top: '30rem'}}>
                        Breakfast
                    </span>
                    <div className="p-5">
                        <a href="#" className="">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Pancake with honey
                            </h5>
                            <h2 className="text-sm text-gray-500">
                                512cal
                            </h2>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-4">Pancake with honey, a good combination to start your day. Have this meal and feel the positive energy throughout the day.</p>
                        
                        <div className="flex gap-12">
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Buy Ingredient
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </a>
                            <Link to="/recipe">
                                <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Review Recipe
                                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </a>
                            </Link>

                        </div>

                    </div>
                </div>
                
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={lunch} alt="" />
                    </a>
                    <span className="text-lg p-5 bg-white rounded-lg" style={{position: 'absolute', top: '30rem'}}>
                        Lunch
                    </span>
                    <div className="p-5">
                        <a href="#" className="">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                High Protein Vege Salad
                            </h5>
                            <h2 className="text-sm text-gray-500">
                                300cal
                            </h2>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-4">
                            High protein salad includes tomatoes, cucumbers, onions, olives, and much more to help you stay fit.
                        </p>
                        
                        <div className="flex gap-12">
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Buy Ingredient
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </a>
                            <Link to="/recipe">
                                <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Review Recipe
                                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </a>
                            </Link>

                        </div>

                    </div>
                </div>
                
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={dinner} alt="" />
                    </a>
                    <span className="text-lg p-5 bg-white rounded-lg" style={{position: 'absolute', top: '30rem'}}>
                        Dinner
                    </span>
                    <div className="p-5">
                        <a href="#" className="">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Salmon Vege
                            </h5>
                            <h2 className="text-sm text-gray-500">
                                736cal
                            </h2>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-4">
                            Freshly cooked salmon with vege on the side to end your day with a perfect balanced diet.
                        </p>
                        
                        <div className="flex gap-12">
                            <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Buy Ingredient
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </a>
                            <Link to="/recipe">
                                <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Review Recipe
                                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </a>
                            </Link>

                        </div>

                    </div>
                </div>

                

            </div>
        
        </div>
    </div>
  );
};

export default MealPlan;
