
//The purpose of this Lab is to get a solid understanding of the .filter() and .map() advanced array methods.
//These methods will be used extensively on future projects


//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 15,
        "name": "Pho",
        "cuisine": "Vietnamese",
        "servings": 4,
        "ingredients": ["beef", "ginger"]
    },
]

//Example function
//IMPORTANT: Take the time to step through this example function with a breakpoint until you could explain what is going on to someone else before starting this lab.

function filterExample(){
    //Debug tip: Use a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties! This helps you to know what you can access with dot notation inside the filter. Do this every time you use a .filter or else you are working in the dark!
    let results;
    results = dishes.filter(function(el){
        console.log("el inside filterExample's filter: ", el)
        if(el.cuisine === "Mexican"){
            return true;
        }
        else{
            return false;
        }})

    return results;
}

let mexicanFood = filterExample();
console.log('mexicanFood from filterExample', mexicanFood)



//Reminder: Do not move on to problem one until understand the example completely!!
//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function problemOne(){

    let results;
    results = dishes.filter(function(el){
     console.log("el inside problemOne's filter: ", el)
     if(el.cuisine === "Vegetarian"){
        return true;
     }
     else{
        return false;
    }})

    return results;
}

let vegetarianFood = problemOne();
console.log('vegetarian food from problem one', vegetarianFood)

//2. Create a function that will prompt the user to enter a cuisine type and then return all dishes that match that type
//Filter

function problemTwo(){
    userInput = prompt("What cuisine type are you looking for?")
    let results;
    results = dishes.filter(function(el){
        console.log("el inside problemTwo's filter: ", el)
        if(el.cuisine === userInput){
            return true;
        }
        else{
            return false;
        }})
        return results
}

let cuisineChoice = problemTwo();
console.log('The cuisine of your choice that we have on the menu', cuisineChoice)


//3. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

function problemThree(){
    let results;
    results = dishes.filter(function(el){
        console.log("el inside problemThree's filter: ", el)
        if(el.cuisine === "Italian" && el.servings > 5){
            return true;
        }
        else{
            return false;
        }})
        return results
    }

let bigItalianMeal = problemThree();
console.log("Here are our big Italian meals", bigItalianMeal)

//4. Create a function that will return only dishes whose id number matches their serving count.
//Filter

function problemFour(){
    let results;
    results = dishes.filter(function(el){
        console.log("el inside problemFour's filter: ", el)
        if(el.id == el.servings){
            return true;
        }
        else{
            return false;
        }})
        return results
}

let idServingsMatch = problemFour();
console.log("Here are the meals where the id matches the serving size", idServingsMatch)

//5. Create a function that will return only dishes whose serving count is even.
//Filter

function problemFive(){
    let results;
    results = dishes.filter(function(el){
    console.log("el inside problemFive's filter: ", el)
    if(el.servings %  2 == 0){
        return true;
    }
    else{
        return false;
    }})
    return results;
}

let evenServingCount = problemFive();
console.log("Here are the dishes where the serving count is even", evenServingCount)


//6. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Double Hint: Research 'javascript does array include item'
//Filter

function problemSix(){
    let results;
    results = dishes.filter(function(el){
        console.log("el inside problemSix's filter: ", el)
        if(el.ingredients.includes("chickpea")){
            return el;
        }})
        return results
}

let chickpeaDishes = problemSix();
console.log("Here are the dishes that have chickpea as an ingredient", chickpeaDishes)

//7. Create a function that will prompt the user to type the name of one ingredient. Then use a filter to find all the dishes whose ingredients array INCLUDES that ingredient. Return the new array.
//Filter

function problemSeven(){
    userInput = prompt("What ingredient are you looking to have in your meal?")
    let results;
    results = dishes.filter(function(el){
        console.log("el inside problemSeven's filter: ", el)
        if(el.ingredients.includes(userInput)){
            return el;
        }})
        return results
}

let userChoiceIngredient = problemSeven();
console.log("Here are the dishes that have that ingredient in them", userChoiceIngredient)

//8a. Create a function that will return an array of the string cuisine types. Ie, ["Italian", "Italian", "Mexican", ...]
//Map

function problemEight(){
    let results;
    results = dishes.map(function(el){
        return el.cuisine
    })
    return results
}

let cuisineTypes = problemEight();
console.log("Here are the cuisine types on the menu:", cuisineTypes)


//9. Create a function that will return an array of strings, with the cuisine type appended to the start of the dish's name. Ie, ["Italian Pizza", "Italian Spaghetti", ...]
//Map 

function problemNine(){
    let results;
    results = dishes.map(function(el){
        fullMenuName = el.cuisine + " " + el.name
        return fullMenuName
    })
    return results
}

let cuisinePlusName = problemNine();
console.log("This is the full menu:", cuisinePlusName)


//10. Create a function that will use advanced array methods on the 'dishes' array and return the result ["Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"]


function problemTen(){
    let results;
    results = dishes.filter(function(el){
    if(el.cuisine === "Vegetarian"){
        return true
    }
    else{
        return false;
    }})
    veggieDishes = results.map(function(el){
        fullMenuName = el.cuisine + " " + el.name
        return fullMenuName
    })
    return veggieDishes;
}

let veggies = problemTen()
console.log("You were looking for our vegetarian options? Here they are!", veggies)


//BONUS

//8b. Use the filter method to eliminate duplicate from problem 8a.

function problemEightB(){
    let results;
    results = dishes.map(function(el){
        return el.cuisine
    })
    noDupes= results.filter(function(el, pos, self){
        return self.indexOf(el) == pos
    })
    return noDupes;
}

let cuisineTypes2 = problemEightB();
console.log("Here are the cuisine types on the menu:", cuisineTypes2)

//11. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

function problemEleven(){
    let results;
    results = dishes.filter(function(el){
        if(el.ingredients.includes("tomato") || el.ingredients.includes("cheese")){
            return el;
        }})
        return results
}

let cheeseOrTomato = problemEleven();
console.log("Here are the menu items that have cheese or tomato in them", cheeseOrTomato)



//12. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

function problemTwelve(){
    let results;
    results = dishes.map(function(el){
        return el.servings
    })

    let sum;
    sum = results.reduce(function(total, el){
        return total + el
    })
    return sum
}

totalServings = problemTwelve();
console.log("Our menu can serve up to this many people: ", totalServings)

//13. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.

function problemThirteen(){
    let results;
    results = dishes.filter(function(el, self){
        if(self.indexOf(el.cuisine) != self){
            return el
        }})
}

uniqueDishes = problemThirteen();
console.log("our unique cuisines are:", uniqueDishes)
