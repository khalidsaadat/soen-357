import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import pancake from "../static/images/pancakes.jpg";
import pizza from "../static/images/pizza.jpg";
import ramen from "../static/images/ramen.jpg";
import salad from "../static/images/salad.jpg";
import meal from "../static/images/meal.jpg";
import mag from "../static/images/mag.jpg";
import { Link } from "react-router-dom";

const Recipe = () => {
  return (
    <div
      id="page"
      className="grid grid-cols-3 gap-12 h-screen bg-light-pink p-6"
    >
      <div
        id="recipe"
        className="grid grid-cols-2 col-span-2 bg-white shadow-md justify-center rounded-lg mx-auto py-4 px-2 md:mx-12"
      >
        <div id="left" className="flex flex-col px-4 py-8">
          <img width="350px" alt="Food" src={ramen} />
          <div>
            <h2 className="text-xl font-bold">Ramen</h2>
            <div className="font-sm text-[#979797]">
              <p>lunch/20min</p>
              <p>Nutrition Information (per serving)</p>
              <p>Calories</p>
              <p>Fat 20g</p>
              <p>Carbohydrates</p>
              <p>Protein</p>
            </div>
          </div>
          <div>
            <p className="text-xl">Ingredients</p>
            <ul className="list-disc">
              <li>2 boneless, skinless chicken breasts </li>
              <li>4 cups chicken broth (low-sodium)</li>
              <li>2 cups water</li>
              <li>
                4 packs (3 oz each) of ramen noodles,
                <p>discard seasoning packet</p>
              </li>
              <li>2 cups frozen corn kernels</li>
              <li>2 tablespoons soy sauce</li>
              <li>1 tablespoon mirin</li>
              <li>1 tablespoon sesame oil</li>
              <li>1/2 tablespoon minced garlic</li>
              <li>1/2 tablespoon minced ginger</li>
              <li>4 soft boiled eggs, halved</li>
              <li>2 green onions, thinly sliced</li>
              <li>1/2 tablespoon minced ginger</li>
              <li>1/2 tablespoon minced ginger</li>
            </ul>
          </div>
        </div>

        <div id="right">
          <div className="flex flex-col justify-between items-center p-6">
            <div className="rounded-3xl bg-light-pink p-6 px-8 mb-8">
              <span className="font-bold">Instructions:</span>
              <ul className="list-decimal text-s">
                <li>
                  Heat the vegetable oil in a large pot over medium heat. Add
                  the minced garlic and ginger, and sauté for 1 minute, until
                  fragrant.
                </li>
                <li>
                  Pour in the chicken broth and water. Bring to a boil, then
                  reduce the heat to low and let it simmer.
                </li>
                <li>
                  While the broth is simmering, season the chicken breasts with
                  salt and black pepper. In a separate pan, heat 1 tablespoon of
                  sesame oil over medium heat. Add the chicken breasts and cook
                  for 5-6 minutes per side, until fully cooked. Remove from the
                  pan, let them rest for a few minutes, then slice into thin
                  strips.
                </li>
                <li>
                  In a small saucepan, bring water to a boil. Cook the frozen
                  corn for 5-7 minutes until tender. Drain and set aside.
                </li>
                <li>
                  Cook the ramen noodles according to package instructions.
                  Drain and rinse under cold water to stop the cooking process.
                  Divide the noodles among 4 serving bowls.
                </li>
                <li>
                  In the simmering broth, add soy sauce and mirin. Stir to
                  combine. Taste and adjust seasoning with salt, if needed.
                </li>
                <li>
                  To assemble the ramen bowls, pour an equal amount of broth
                  over the noodles in each bowl. Top with chicken strips, corn,
                  soft boiled eggs, green onions, and bean sprouts.
                </li>
                <li>
                  Serve immediately and enjoy your delicious Chicken, Corn &
                  Boiled Egg Ramen!
                </li>
              </ul>
            </div>

            <button
              href="#"
              className="rounded-lg bg-blue-500 text-white px-4 font-semibold h-10"
            >
              Add to meal plan
            </button>
          </div>

          <span className="flex justify-end">
            <span className="font-sm">CAD 9.75 per / two servings</span>
          </span>
        </div>
      </div>

      <div id="recommendations" className="flex flex-col justify-between">
        <div className="flex align-items-center col-span-1 bg-white shadow-md justify-center rounded-full h-20">
          <img src={mag}></img>
          <input
            type="text"
            className="border-0 focus:border-0"
            placeholder="Search for meals..."
            required
          />
        </div>
        <div className="flex flex-col gap-5 items-center">
          <h1 className="font-bold text-3xl">Other Meal suggestions</h1>
          <div class="grid grid-cols-2 gap-3 mb-10">
            <a href="#">
              <img
                className="rounded-t-lg object-cover h-92 w-48"
                src={pizza}
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="rounded-t-lg object-cover h-92 w-48"
                src={meal}
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="rounded-t-lg object-cover h-92 w-48"
                src={salad}
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="rounded-t-lg object-cover h-92 w-48"
                src={pancake}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
