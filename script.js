// Daily Motivational Quotes
const quotes = [
    "Your body can stand almost anything. It’s your mind that you have to convince.",
    "Believe in yourself and all that you are.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "The only bad workout is the one that didn’t happen."
  ];
  
  // Display a random quote on page load
  function getDailyQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').textContent = randomQuote;
  }
  
  // Water Intake Tracker
  let totalWaterIntake = 0;
  const waterGoal = 2000;
  
  function logWater() {
    const waterAmount = parseInt(document.getElementById('waterAmount').value);
    if (!isNaN(waterAmount)) {
      totalWaterIntake += waterAmount;
      updateWaterProgress();
    }
    document.getElementById('waterAmount').value = ''; // Clear input
  }
  
  function updateWaterProgress() {
    const progressPercentage = (totalWaterIntake / waterGoal) * 100;
    document.getElementById('progressBar').style.width = progressPercentage + '%';
    document.getElementById('currentIntake').textContent = `Current intake: ${totalWaterIntake} ml`;
  }
  
  // Meal Tracker
  let meals = [];
  let totalCalories = 0;
  
  function logMeal() {
    const mealDescription = document.getElementById('mealDescription').value;
    const mealCalories = parseInt(document.getElementById('mealCalories').value);
  
    if (mealDescription && !isNaN(mealCalories)) {
      meals.push({ description: mealDescription, calories: mealCalories });
      totalCalories += mealCalories;
      updateMealCards();
      updateTotalCalories();
    }
  
    document.getElementById('mealDescription').value = '';
    document.getElementById('mealCalories').value = '';
  }
  
  function updateMealCards() {
    const mealCardsContainer = document.getElementById('mealCardsContainer');
    mealCardsContainer.innerHTML = ''; // Clear existing cards
    meals.forEach((meal) => {
      const card = document.createElement('div');
      card.classList.add('card', 'slide-up');
      card.innerHTML = `
        <h3>${meal.description}</h3>
        <p>Meal</p>
        <p class="calories">${meal.calories} kcal</p>
      `;
      mealCardsContainer.appendChild(card);
    });
  }
  
  function updateTotalCalories() {
    document.getElementById('totalCalories').textContent = `Total Calories: ${totalCalories} kcal`;
  }
  
  // Calorie Goal Tracker
  let calorieGoal = 0;
  
  function setCalorieGoal() {
    calorieGoal = parseInt(document.getElementById('calorieGoalInput').value);
    if (!isNaN(calorieGoal)) {
      updateRemainingCalories();
    }
    document.getElementById('calorieGoalInput').value = '';
  }
  
  function updateRemainingCalories() {
    const remainingCalories = calorieGoal - totalCalories;
    document.getElementById('remainingCalories').textContent = `Remaining Calories: ${remainingCalories} kcal`;
  }
  
  // Dark Mode Toggle
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  // Call functions when page loads
  getDailyQuote();
  