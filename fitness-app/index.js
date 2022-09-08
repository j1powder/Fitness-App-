const displayVal = document.getElementById('btn');
const getWeight = document.getElementById('show-weight');
const pressBtn = document.getElementById('workout-grabber');
const getMeal = document.getElementById('get-meal');
const getForm = document.querySelector('form');
const nameArray = [];
const heavyWorkouts = ["10 push-ups", "10 sit-ups", "10 Lunges", "10 chin-ups"];
const mediumWorkouts = ["7 push-ups", "9 sit-ups", "8 Lunges", "7 chin-ups"];
const midLightWorkouts =["6 push-up", "7 sit-ups", "8 Lunges", "6 chin-ups"];
const lightWorkouts = ["5 push-ups", "5 sit-ups", "5 pull-ups", "5 chin-ups"];

const testArray = ['<iframe width="560" height="315" src="https://www.youtube.com/embed/M0uO8X3_tEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 
'<iframe width="560" height="315" src="https://www.youtube.com/embed/-YJXpabrX4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 
'<iframe width="560" height="315" src="https://www.youtube.com/embed/IvmaekQfKiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="560" height="315" src="https://www.youtube.com/embed/13ggcvTHETw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="560" height="315" src="https://www.youtube.com/embed/M0uO8X3_tEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="560" height="315" src="https://www.youtube.com/embed/50kH47ZztHs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="560" height="315" src="https://www.youtube.com/embed/QPKXw8XEQiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="560" height="315" src="https://www.youtube.com/embed/IU913YMDXCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="560" height="315" src="https://www.youtube.com/embed/xngUfoWLkFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="560" height="315" src="https://www.youtube.com/embed/kZDvg92tTMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="560" height="315" src="https://www.youtube.com/embed/ZllXIKITzfg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="560" height="315" src="https://www.youtube.com/embed/QxIjxD42TWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="560" height="315" src="https://www.youtube.com/embed/8JpKOczCPHU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="560" height="315" src="https://www.youtube.com/embed/gC_L9qAHVJ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="560" height="315" src="https://www.youtube.com/embed/VHyGqsPOUHs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="560" height="315" src="https://www.youtube.com/embed/Jzgqjb16Oek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="560" height="315" src="https://www.youtube.com/embed/xVc3nSKWg74" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="560" height="315" src="https://www.youtube.com/embed/Ck1pvGQ8_nQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
];
const lightMeal = [
        'breakfast: 1 serving avocado toast(271 calories)',
        'snack: 1 cup berries(blueberries 84 calories)',
        'lunch: 1 serving Loaded Black Bean Nacho Soup(374 calories)',
        'dinner: 1 serving Seared Salman, and 1 cup steamed green beans(457 calories)',
];
const heavyMeal = [
    'breakfast: 2 servings vegan breakfast burritos(704 calories)',
    'snack: 1 serving alomond-honey power bar(246 calories)',
    'lunch: 2 servings vegetable and tuna pasta salad(649 calories)',
    'dinner: 1 serving sheet-pan maple mustard pork chops and carrots and 1 cup brown rice(716 calories)'
]
console.log(lightMeal);

getMeal.addEventListener('click', getMealPlan);
pressBtn.addEventListener('click', getVideo);

function getVideo() {
    const testItem = testArray[Math.floor(Math.random()*testArray.length)];

    return document.getElementById("get-ytworkout").innerHTML = testItem;
  }
//let workoutList = document.getElementById('textgoeshere');
/*Workouts.forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item;
    workoutList.appendChild(li);
})*/

getForm.addEventListener('submit', displayForm);
//displayVal.addEventListener('click', showText);

function displayForm(event){
displayVal.disabled = true;
event.preventDefault();
const formData = new FormData(event.target);
const dayData = formData.get('day').trim();
const nameData = formData.get('name').trim();
const ageData = formData.get('age').trim();
const weightData = formData.get('weight').trim();
let workoutList = document.getElementById('textgoeshere');

nameArray.push(" age: " + ageData, "weight: " + weightData);

if (ageData < 35 && 
    weightData > 160 &&
    dayData !== "Tuesday" && 
    dayData !== "Thursday" ){
   return heavyWorkouts.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        workoutList.appendChild(li);
    }), document.getElementById('name-here').innerHTML = "Hello " + nameData + ", Today is " + dayData + ", Here's Your Workout!";
}else if(
    ageData > 35 && 
    weightData > 160 && 
    dayData !== "Tuesday" && 
    dayData !== "Thursday") {
  return  mediumWorkouts.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        workoutList.appendChild(li);
    }), document.getElementById('name-here').innerHTML = "Hello " + nameData + ", Today is " + dayData + ", Here's Your Workout!";
} 
else if( ageData < 35 && 
    weightData < 160 && 
    dayData !== "Tuesday" && 
    dayData !== "Thursday") {
        return  midLightWorkouts.forEach((item)=>{
            let li = document.createElement("li");
            li.innerText = item;
            workoutList.appendChild(li);
        }), document.getElementById('name-here').innerHTML = "Hello " + nameData + ", Today is " + dayData + ", Here's Your Workout!";
}
else if(
    dayData == "Tuesday" || 
    dayData == "Thursday") {
        return  lightWorkouts.forEach((item)=>{
            let li = document.createElement("li");
            li.innerText = item;
            workoutList.appendChild(li);
        }), document.getElementById('name-here').innerHTML = "Hello " + nameData + ", Today is " + dayData + ", Here's Your Workout!";
}
else {
    return  lightWorkouts.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        workoutList.appendChild(li);
    }), document.getElementById('name-here').innerHTML = "Hello " + nameData + ", Today is " + dayData + ", Here's Your Workout!";
}
}


function getMealPlan() {
    const showMeal = document.getElementById('meals').value
    let MealList = document.getElementById('meal-plan');
    document.getElementById('get-meal').disabled = true;

    if(showMeal == 'Lose Weight'){
    return document.getElementById('display-text').innerHTML = "Let's Lose Some Pounds!",
        lightMeal.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        MealList.appendChild(li);
    });
} else {
    return document.getElementById('display-text').innerHTML = "Pack on those Calories!", 
        
    heavyMeal.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        MealList.appendChild(li);
});
    
    /*const showMeal = document.getElementById('meals').value;
    console.log(showMeal);
    if(showMeal == 'Lose Weight'){
    return document.getElementById('meal-plan').innerHTML = "Breakfast: " + lightMeal.breakfast 
    } else {
        return document.getElementById('meal-plan').innerHTML = heavyMeal.breakfast;
    }*/
    
}
}


/*function showText() {
const ageVal = document.getElementById('age').value;
const weightVal = document.getElementById('weight').value;

console.log(nameArray.push(ageVal));

return document.getElementById('textgoeshere').innerHTML = nameArray;
}*/

