// Recipe data
const recipes = [
    {
        id: 1,
        name: "Avocado Toast with Poached Egg",
        description: "A delicious and nutritious breakfast option featuring creamy avocado and perfectly poached eggs.",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
        tags: ["Breakfast", "Healthy", "Vegetarian"],
        ingredients: [
            { name: "avocados", quantity: 2, unit: "medium" },
            { name: "eggs", quantity: 2, unit: "large" },
            { name: "sourdough bread", quantity: 2, unit: "slices" },
            { name: "salt", quantity: 0.5, unit: "tsp" },
            { name: "pepper", quantity: 0.25, unit: "tsp" },
            { name: "red pepper flakes", quantity: 0.25, unit: "tsp" }
        ],
        nutrients: { calories: 320, protein: 15, carbs: 28, fat: 18 },
        prepTime: 10,
        cookTime: 5,
        servings: 2,
        instructions: [
            "Toast the bread until golden and crisp",
            "Mash the avocado and spread on toast",
            "Poach the egg for 3 minutes",
            "Place egg on top of avocado",
            "Season with salt, pepper, and red pepper flakes"
        ]
    },
    {
        id: 2,
        name: "Mediterranean Quinoa Bowl",
        description: "A protein-packed quinoa bowl with fresh vegetables and feta cheese inspired by Mediterranean flavors.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
        tags: ["Lunch", "Vegetarian", "Mediterranean"],
        ingredients: [
            { name: "quinoa", quantity: 1, unit: "cup" },
            { name: "cucumber", quantity: 1, unit: "large" },
            { name: "cherry tomatoes", quantity: 2, unit: "cups" },
            { name: "red onion", quantity: 0.5, unit: "" },
            { name: "feta cheese", quantity: 4, unit: "oz" },
            { name: "olive oil", quantity: 3, unit: "tbsp" },
            { name: "lemon juice", quantity: 2, unit: "tbsp" }
        ],
        nutrients: { calories: 380, protein: 12, carbs: 45, fat: 16 },
        prepTime: 15,
        cookTime: 20,
        servings: 4,
        instructions: [
            "Cook quinoa according to package instructions",
            "Chop vegetables into bite-sized pieces",
            "Combine quinoa and vegetables in a bowl",
            "Crumble feta cheese on top",
            "Drizzle with olive oil and lemon juice"
        ]
    },
    {
        id: 3,
        name: "Chicken Tikka Masala",
        description: "A classic Indian dish featuring tender chicken in a creamy, spiced tomato sauce.",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        tags: ["Dinner", "Indian", "Spicy"],
        ingredients: [
            { name: "chicken breast", quantity: 1, unit: "lb" },
            { name: "yogurt", quantity: 1, unit: "cup" },
            { name: "garam masala", quantity: 2, unit: "tsp" },
            { name: "tomato sauce", quantity: 2, unit: "cups" },
            { name: "cream", quantity: 0.5, unit: "cup" },
            { name: "garlic", quantity: 3, unit: "cloves" },
            { name: "ginger", quantity: 1, unit: "inch" }
        ],
        nutrients: { calories: 450, protein: 35, carbs: 15, fat: 25 },
        prepTime: 30,
        cookTime: 40,
        servings: 4,
        instructions: [
            "Marinate chicken in yogurt and spices for at least 30 minutes",
            "Grill or bake chicken until cooked through",
            "Prepare sauce with tomatoes, cream, and spices",
            "Combine chicken with sauce and simmer for 10 minutes",
            "Serve with rice or naan bread"
        ]
    },
    {
        id: 4,
        name: "Berry Smoothie Bowl",
        description: "A refreshing and nutritious smoothie bowl topped with fresh fruits and granola.",
        image: "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80",
        tags: ["Breakfast", "Vegan", "Healthy"],
        ingredients: [
            { name: "mixed berries", quantity: 2, unit: "cups" },
            { name: "banana", quantity: 1, unit: "large" },
            { name: "almond milk", quantity: 0.5, unit: "cup" },
            { name: "granola", quantity: 0.25, unit: "cup" },
            { name: "chia seeds", quantity: 1, unit: "tbsp" },
            { name: "honey", quantity: 2, unit: "tbsp" }
        ],
        nutrients: { calories: 280, protein: 8, carbs: 52, fat: 5 },
        prepTime: 10,
        cookTime: 0,
        servings: 2,
        instructions: [
            "Blend berries, banana, and almond milk until smooth",
            "Pour into a bowl",
            "Top with fresh berries, granola, and chia seeds",
            "Drizzle with honey"
        ]
    },
    {
        id: 5,
        name: "Baked Salmon with Roasted Vegetables",
        description: "Flaky salmon fillet with colorful roasted vegetables and fresh herbs.",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        tags: ["Dinner", "Seafood", "Healthy"],
        ingredients: [
            { name: "salmon fillets", quantity: 4, unit: "" },
            { name: "bell peppers", quantity: 2, unit: "" },
            { name: "zucchini", quantity: 2, unit: "" },
            { name: "red onion", quantity: 1, unit: "" },
            { name: "olive oil", quantity: 3, unit: "tbsp" },
            { name: "lemon", quantity: 1, unit: "" },
            { name: "fresh dill", quantity: 2, unit: "tbsp" }
        ],
        nutrients: { calories: 420, protein: 32, carbs: 18, fat: 24 },
        prepTime: 15,
        cookTime: 25,
        servings: 4,
        instructions: [
            "Preheat oven to 400°F (200°C)",
            "Arrange vegetables on a baking sheet and drizzle with olive oil",
            "Place salmon on top of vegetables",
            "Season with salt, pepper, and herbs",
            "Bake for 20-25 minutes until salmon is cooked through"
        ]
    },
    {
        id: 6,
        name: "Vegetable Stir Fry",
        description: "A quick and colorful vegetable stir fry with a savory sauce, perfect for weeknight dinners.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        tags: ["Dinner", "Vegan", "Asian"],
        ingredients: [
            { name: "broccoli", quantity: 2, unit: "cups" },
            { name: "carrot", quantity: 2, unit: "" },
            { name: "bell pepper", quantity: 1, unit: "" },
            { name: "snap peas", quantity: 1, unit: "cup" },
            { name: "garlic", quantity: 3, unit: "cloves" },
            { name: "soy sauce", quantity: 3, unit: "tbsp" },
            { name: "ginger", quantity: 1, unit: "inch" }
        ],
        nutrients: { calories: 220, protein: 8, carbs: 35, fat: 5 },
        prepTime: 15,
        cookTime: 10,
        servings: 4,
        instructions: [
            "Chop all vegetables into bite-sized pieces",
            "Heat oil in a wok or large skillet",
            "Add garlic and ginger, stir for 30 seconds",
            "Add vegetables and stir fry for 5-7 minutes",
            "Add sauce and cook for another 2 minutes"
        ]
    },
    {
        id: 7,
        name: "Classic Beef Burger",
        description: "A juicy homemade beef burger with all the traditional toppings on a toasted bun.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80",
        tags: ["Lunch", "American", "Beef"],
        ingredients: [
            { name: "ground beef", quantity: 1, unit: "lb" },
            { name: "burger buns", quantity: 4, unit: "" },
            { name: "lettuce leaves", quantity: 4, unit: "" },
            { name: "tomatoes", quantity: 2, unit: "" },
            { name: "onion", quantity: 1, unit: "" },
            { name: "cheese slices", quantity: 4, unit: "" },
            { name: "ketchup", quantity: 2, unit: "tbsp" },
            { name: "mustard", quantity: 2, unit: "tbsp" }
        ],
        nutrients: { calories: 580, protein: 30, carbs: 40, fat: 32 },
        prepTime: 15,
        cookTime: 10,
        servings: 4,
        instructions: [
            "Form ground beef into patties",
            "Season with salt and pepper",
            "Grill or pan-fry until desired doneness",
            "Toast buns lightly",
            "Assemble burger with toppings and condiments"
        ]
    },
    {
        id: 8,
        name: "Chocolate Banana Smoothie",
        description: "A creamy, chocolatey smoothie that tastes like dessert but is packed with nutrients.",
        image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1898&q=80",
        tags: ["Breakfast", "Vegetarian", "Sweet"],
        ingredients: [
            { name: "bananas", quantity: 2, unit: "" },
            { name: "cocoa powder", quantity: 2, unit: "tbsp" },
            { name: "almond milk", quantity: 1, unit: "cup" },
            { name: "Greek yogurt", quantity: 0.5, unit: "cup" },
            { name: "honey", quantity: 2, unit: "tbsp" },
            { name: "ice", quantity: 1, unit: "cup" }
        ],
        nutrients: { calories: 250, protein: 12, carbs: 42, fat: 4 },
        prepTime: 5,
        cookTime: 0,
        servings: 2,
        instructions: [
            "Combine all ingredients in a blender",
            "Blend until smooth and creamy",
            "Pour into a glass and enjoy immediately"
        ]
    },
    {
        id: 9,
        name: "Caprese Salad",
        description: "A simple Italian salad with fresh tomatoes, mozzarella, and basil, drizzled with balsamic glaze.",
        image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
        tags: ["Appetizer", "Italian", "Vegetarian"],
        ingredients: [
            { name: "tomatoes", quantity: 4, unit: "" },
            { name: "fresh mozzarella", quantity: 8, unit: "oz" },
            { name: "fresh basil", quantity: 0.25, unit: "cup" },
            { name: "olive oil", quantity: 3, unit: "tbsp" },
            { name: "balsamic glaze", quantity: 2, unit: "tbsp" },
            { name: "salt", quantity: 0.5, unit: "tsp" },
            { name: "pepper", quantity: 0.25, unit: "tsp" }
        ],
        nutrients: { calories: 280, protein: 14, carbs: 10, fat: 20 },
        prepTime: 10,
        cookTime: 0,
        servings: 4,
        instructions: [
            "Slice tomatoes and mozzarella into rounds",
            "Arrange tomato and mozzarella slices on a plate, alternating",
            "Tuck fresh basil leaves between slices",
            "Drizzle with olive oil and balsamic glaze",
            "Season with salt and pepper"
        ]
    },
    {
        id: 10,
        name: "Mushroom Risotto",
        description: "A creamy Italian rice dish with sautéed mushrooms, white wine, and Parmesan cheese.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        tags: ["Dinner", "Italian", "Vegetarian"],
        ingredients: [
            { name: "arborio rice", quantity: 1.5, unit: "cups" },
            { name: "mushrooms", quantity: 1, unit: "lb" },
            { name: "onion", quantity: 1, unit: "" },
            { name: "garlic", quantity: 3, unit: "cloves" },
            { name: "white wine", quantity: 0.5, unit: "cup" },
            { name: "vegetable broth", quantity: 4, unit: "cups" },
            { name: "Parmesan cheese", quantity: 0.5, unit: "cup" },
            { name: "butter", quantity: 2, unit: "tbsp" }
        ],
        nutrients: { calories: 420, protein: 10, carbs: 58, fat: 15 },
        prepTime: 15,
        cookTime: 30,
        servings: 4,
        instructions: [
            "Sauté onion and garlic until soft",
            "Add mushrooms and cook until browned",
            "Add rice and toast for 1-2 minutes",
            "Add wine and simmer until absorbed",
            "Gradually add hot broth, stirring constantly",
            "Finish with butter and Parmesan cheese"
        ]
    }
];

// State management
let filteredRecipes = [...recipes];
let selectedTags = [];
let searchTerm = '';
let isPremium = false;
let currentServings = 4; // Default servings
let currentRecipe = null;

// DOM elements
const searchInput = document.getElementById('searchInput');
const tagFilters = document.getElementById('tagFilters');
const recipeGrid = document.getElementById('recipeGrid');
const resultsCount = document.getElementById('resultsCount');
const premiumMessage = document.getElementById('premiumMessage');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileCloseBtn = document.getElementById('mobileCloseBtn');
const sidebar = document.getElementById('sidebar');
const resetFiltersBtn = document.getElementById('resetFilters');
const recipeModal = document.getElementById('recipeModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    renderRecipes();
    updateResultsCount();
});

// Event listeners
function initializeEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Tag filters
    tagFilters.addEventListener('click', handleTagFilter);
    
    // Mobile menu
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    mobileCloseBtn.addEventListener('click', closeMobileMenu);
    
    // Reset filters
    resetFiltersBtn.addEventListener('click', resetFilters);
    
    // Modal
    modalClose.addEventListener('click', closeModal);
    recipeModal.addEventListener('click', function(e) {
        if (e.target === recipeModal) {
            closeModal();
        }
    });
    
    // Recipe grid clicks
    recipeGrid.addEventListener('click', handleRecipeClick);
    
    // Nutrition sliders
    const caloriesRange = document.getElementById('caloriesRange');
    const proteinRange = document.getElementById('proteinRange');
    
    caloriesRange.addEventListener('input', updateNutritionFilter);
    proteinRange.addEventListener('input', updateNutritionFilter);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (sidebar.classList.contains('active') && 
            !sidebar.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            closeMobileMenu();
        }
    });
}

// Search functionality
function handleSearch(e) {
    searchTerm = e.target.value.toLowerCase();
    filterRecipes();
}

// Tag filter functionality
function handleTagFilter(e) {
    if (e.target.classList.contains('tag-btn')) {
        const tag = e.target.dataset.tag;
        
        if (selectedTags.includes(tag)) {
            selectedTags = selectedTags.filter(t => t !== tag);
            e.target.classList.remove('active');
        } else {
            selectedTags.push(tag);
            e.target.classList.add('active');
        }
        
        filterRecipes();
    }
}

// Nutrition filter functionality
function updateNutritionFilter() {
    filterRecipes();
}

// Filter recipes based on current filters
function filterRecipes() {
    filteredRecipes = recipes.filter(recipe => {
        // Search filter
        const matchesSearch = !searchTerm || 
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm);
        
        // Tag filter
        const matchesTags = selectedTags.length === 0 || 
            selectedTags.some(tag => recipe.tags.includes(tag));
        
        // Nutrition filters
        const caloriesMax = parseInt(document.getElementById('caloriesRange').value);
        const proteinMax = parseInt(document.getElementById('proteinRange').value);
        
        const matchesNutrition = recipe.nutrients.calories <= caloriesMax &&
            recipe.nutrients.protein <= proteinMax;
        
        return matchesSearch && matchesTags && matchesNutrition;
    });
    
    renderRecipes();
    updateResultsCount();
}

// Render recipes
function renderRecipes() {
    const recipesToShow = isPremium ? filteredRecipes : filteredRecipes.slice(0, 5);
    
    recipeGrid.innerHTML = recipesToShow.map(recipe => `
        <div class="recipe-card" data-recipe-id="${recipe.id}">
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
                <div class="recipe-tag">${recipe.tags[0]}</div>
                <div class="recipe-actions">
                    <button class="action-btn" 
                            onclick="handleDownload(event, ${recipe.id})"
                            title="Download recipe">
                        <i class="fas fa-download"></i>
                    </button>
                </div>
            </div>
            <div class="recipe-content">
                <div class="recipe-meta">
                    <i class="fas fa-clock"></i>
                    <span>${recipe.prepTime}m</span>
                    <span>•</span>
                    <i class="fas fa-fire"></i>
                    <span>${recipe.cookTime}m</span>
                </div>
                <h3 class="recipe-title">${recipe.name}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-tags">
                    ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    // Show/hide premium message
    if (!isPremium && filteredRecipes.length > 5) {
        premiumMessage.style.display = 'block';
    } else {
        premiumMessage.style.display = 'none';
    }
}

// Update results count
function updateResultsCount() {
    const count = filteredRecipes.length;
    resultsCount.textContent = `${count} ${count === 1 ? 'recipe' : 'recipes'} found`;
}

// Handle recipe card clicks
function handleRecipeClick(e) {
    const recipeCard = e.target.closest('.recipe-card');
    if (recipeCard && !e.target.closest('.action-btn')) {
        const recipeId = parseInt(recipeCard.dataset.recipeId);
        showRecipeDetail(recipeId);
    }
}

// Format quantity for display
function formatQuantity(quantity, servingRatio) {
    const adjustedQuantity = quantity * servingRatio;
    
    // Handle fractions
    if (adjustedQuantity < 1) {
        if (adjustedQuantity <= 0.125) return '1/8';
        if (adjustedQuantity <= 0.25) return '1/4';
        if (adjustedQuantity <= 0.33) return '1/3';
        if (adjustedQuantity <= 0.5) return '1/2';
        if (adjustedQuantity <= 0.67) return '2/3';
        if (adjustedQuantity <= 0.75) return '3/4';
        return Math.round(adjustedQuantity * 10) / 10;
    }
    
    // Handle whole numbers and decimals
    const rounded = Math.round(adjustedQuantity * 4) / 4; // Round to nearest quarter
    const whole = Math.floor(rounded);
    const fraction = rounded - whole;
    
    if (fraction === 0) {
        return whole.toString();
    } else {
        let fractionStr = '';
        if (fraction === 0.25) fractionStr = '1/4';
        else if (fraction === 0.5) fractionStr = '1/2';
        else if (fraction === 0.75) fractionStr = '3/4';
        else fractionStr = fraction.toString();
        
        return whole > 0 ? `${whole} ${fractionStr}` : fractionStr;
    }
}

// Calculate macro percentages
function calculateMacroPercentages(nutrients, servingRatio) {
    const adjustedNutrients = {
        protein: Math.round(nutrients.protein * servingRatio),
        carbs: Math.round(nutrients.carbs * servingRatio),
        fat: Math.round(nutrients.fat * servingRatio)
    };
    
    const totalMacros = adjustedNutrients.protein + adjustedNutrients.carbs + adjustedNutrients.fat;
    
    return {
        protein: {
            grams: adjustedNutrients.protein,
            percentage: totalMacros > 0 ? Math.round((adjustedNutrients.protein / totalMacros) * 100) : 0
        },
        carbs: {
            grams: adjustedNutrients.carbs,
            percentage: totalMacros > 0 ? Math.round((adjustedNutrients.carbs / totalMacros) * 100) : 0
        },
        fat: {
            grams: adjustedNutrients.fat,
            percentage: totalMacros > 0 ? Math.round((adjustedNutrients.fat / totalMacros) * 100) : 0
        }
    };
}

// Update ingredient quantities and nutrition based on servings
function updateIngredientQuantities() {
    if (!currentRecipe) return;
    
    const servingRatio = currentServings / currentRecipe.servings;
    const ingredientsList = document.querySelector('.ingredients-list');
    
    if (ingredientsList) {
        const ingredientItems = ingredientsList.querySelectorAll('li');
        ingredientItems.forEach((item, index) => {
            const ingredient = currentRecipe.ingredients[index];
            if (ingredient) {
                const label = item.querySelector('label');
                const formattedQuantity = formatQuantity(ingredient.quantity, servingRatio);
                const unit = ingredient.unit ? ` ${ingredient.unit}` : '';
                label.innerHTML = `<strong>${formattedQuantity}${unit}</strong> ${ingredient.name}`;
            }
        });
    }
    
    // Update nutrition info
    updateNutritionInfo(servingRatio);
}

// Update nutrition information display
function updateNutritionInfo(servingRatio) {
    if (!currentRecipe) return;
    
    const adjustedCalories = Math.round(currentRecipe.nutrients.calories * servingRatio);
    const macros = calculateMacroPercentages(currentRecipe.nutrients, servingRatio);
    
    // Update calories
    const caloriesElement = document.querySelector('.calories-value');
    if (caloriesElement) {
        caloriesElement.textContent = adjustedCalories;
    }
    
    // Update macro values and progress bars
    const proteinValue = document.querySelector('.protein-value');
    const proteinBar = document.querySelector('.protein-fill');
    if (proteinValue && proteinBar) {
        proteinValue.textContent = `${macros.protein.grams}g (${macros.protein.percentage}%)`;
        proteinBar.style.width = `${macros.protein.percentage}%`;
    }
    
    const carbsValue = document.querySelector('.carbs-value');
    const carbsBar = document.querySelector('.carbs-fill');
    if (carbsValue && carbsBar) {
        carbsValue.textContent = `${macros.carbs.grams}g (${macros.carbs.percentage}%)`;
        carbsBar.style.width = `${macros.carbs.percentage}%`;
    }
    
    const fatValue = document.querySelector('.fat-value');
    const fatBar = document.querySelector('.fat-fill');
    if (fatValue && fatBar) {
        fatValue.textContent = `${macros.fat.grams}g (${macros.fat.percentage}%)`;
        fatBar.style.width = `${macros.fat.percentage}%`;
    }
}

// Handle serving counter changes
function handleServingChange(change) {
    const newServings = Math.max(1, currentServings + change);
    currentServings = newServings;
    
    // Update the display
    const servingDisplay = document.getElementById('servingCount');
    if (servingDisplay) {
        servingDisplay.textContent = currentServings;
    }
    
    // Update serving buttons
    const minusBtn = document.querySelector('.serving-btn[onclick*="-1"]');
    if (minusBtn) {
        minusBtn.disabled = currentServings <= 1;
    }
    
    // Update ingredient quantities and nutrition
    updateIngredientQuantities();
}

// Generate and download recipe PDF
function generateRecipePDF(recipe) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const servingRatio = currentServings / recipe.servings;
    const macros = calculateMacroPercentages(recipe.nutrients, servingRatio);
    
    // Colors
    const primaryColor = [59, 130, 246]; // Blue
    const secondaryColor = [107, 114, 128]; // Gray
    const accentColor = [16, 185, 129]; // Green
    const textColor = [17, 24, 39]; // Dark gray
    
    let yPosition = 20;
    
    // Header with brand
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, 210, 25, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('FoodSense', 15, 16);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Recipe Collection', 150, 16);
    
    yPosition = 40;
    
    // Recipe title
    doc.setTextColor(...textColor);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    const titleLines = doc.splitTextToSize(recipe.name, 180);
    doc.text(titleLines, 15, yPosition);
    yPosition += titleLines.length * 8 + 5;
    
    // Description
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...secondaryColor);
    const descLines = doc.splitTextToSize(recipe.description, 180);
    doc.text(descLines, 15, yPosition);
    yPosition += descLines.length * 5 + 10;
    
    // Recipe info boxes
    const boxWidth = 40;
    const boxHeight = 20;
    const boxSpacing = 45;
    
    // Prep time box
    doc.setFillColor(249, 250, 251);
    doc.rect(15, yPosition, boxWidth, boxHeight, 'F');
    doc.setDrawColor(229, 231, 235);
    doc.rect(15, yPosition, boxWidth, boxHeight);
    
    doc.setTextColor(...primaryColor);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text('PREP TIME', 17, yPosition + 6);
    doc.setTextColor(...textColor);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`${recipe.prepTime}m`, 17, yPosition + 14);
    
    // Cook time box
    doc.setFillColor(249, 250, 251);
    doc.rect(15 + boxSpacing, yPosition, boxWidth, boxHeight, 'F');
    doc.setDrawColor(229, 231, 235);
    doc.rect(15 + boxSpacing, yPosition, boxWidth, boxHeight);
    
    doc.setTextColor(...primaryColor);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text('COOK TIME', 17 + boxSpacing, yPosition + 6);
    doc.setTextColor(...textColor);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`${recipe.cookTime}m`, 17 + boxSpacing, yPosition + 14);
    
    // Servings box
    doc.setFillColor(249, 250, 251);
    doc.rect(15 + boxSpacing * 2, yPosition, boxWidth, boxHeight, 'F');
    doc.setDrawColor(229, 231, 235);
    doc.rect(15 + boxSpacing * 2, yPosition, boxWidth, boxHeight);
    
    doc.setTextColor(...primaryColor);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text('SERVINGS', 17 + boxSpacing * 2, yPosition + 6);
    doc.setTextColor(...textColor);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`${currentServings}`, 17 + boxSpacing * 2, yPosition + 14);
    
    // Calories box
    doc.setFillColor(249, 250, 251);
    doc.rect(15 + boxSpacing * 3, yPosition, boxWidth, boxHeight, 'F');
    doc.setDrawColor(229, 231, 235);
    doc.rect(15 + boxSpacing * 3, yPosition, boxWidth, boxHeight);
    
    doc.setTextColor(...primaryColor);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text('CALORIES', 17 + boxSpacing * 3, yPosition + 6);
    doc.setTextColor(...textColor);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`${Math.round(recipe.nutrients.calories * servingRatio)}`, 17 + boxSpacing * 3, yPosition + 14);
    
    yPosition += 35;
    
    // Tags
    if (recipe.tags && recipe.tags.length > 0) {
        doc.setTextColor(...secondaryColor);
        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.text(`Tags: ${recipe.tags.join(' • ')}`, 15, yPosition);
        yPosition += 15;
    }
    
    // Ingredients section
    doc.setTextColor(...primaryColor);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Ingredients', 15, yPosition);
    yPosition += 10;
    
    doc.setTextColor(...textColor);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    
    recipe.ingredients.forEach((ingredient, index) => {
        const formattedQuantity = formatQuantity(ingredient.quantity, servingRatio);
        const unit = ingredient.unit ? ` ${ingredient.unit}` : '';
        const ingredientText = `• ${formattedQuantity}${unit} ${ingredient.name}`;
        
        doc.text(ingredientText, 20, yPosition);
        yPosition += 6;
        
        // Check if we need a new page
        if (yPosition > 250) {
            doc.addPage();
            yPosition = 20;
        }
    });
    
    yPosition += 10;
    
    // Instructions section
    if (yPosition > 200) {
        doc.addPage();
        yPosition = 20;
    }
    
    doc.setTextColor(...primaryColor);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Instructions', 15, yPosition);
    yPosition += 10;
    
    doc.setTextColor(...textColor);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    
    recipe.instructions.forEach((instruction, index) => {
        // Step number circle
        doc.setFillColor(...primaryColor);
        doc.circle(18, yPosition - 2, 3, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(8);
        doc.setFont('helvetica', 'bold');
        doc.text(`${index + 1}`, 16.5, yPosition + 1);
        
        // Instruction text
        doc.setTextColor(...textColor);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        const instructionLines = doc.splitTextToSize(instruction, 165);
        doc.text(instructionLines, 25, yPosition);
        yPosition += instructionLines.length * 5 + 8;
        
        // Check if we need a new page
        if (yPosition > 250) {
            doc.addPage();
            yPosition = 20;
        }
    });
    
    yPosition += 10;
    
    // Nutrition section
    if (yPosition > 180) {
        doc.addPage();
        yPosition = 20;
    }
    
    doc.setTextColor(...primaryColor);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Nutrition (per serving)', 15, yPosition);
    yPosition += 15;
    
    // Nutrition bars
    const barWidth = 60;
    const barHeight = 8;
    
    // Protein bar
    doc.setTextColor(...textColor);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Protein: ${macros.protein.grams}g (${macros.protein.percentage}%)`, 15, yPosition);
    
    doc.setFillColor(229, 231, 235);
    doc.rect(15, yPosition + 3, barWidth, barHeight, 'F');
    doc.setFillColor(...accentColor);
    doc.rect(15, yPosition + 3, (barWidth * macros.protein.percentage) / 100, barHeight, 'F');
    yPosition += 18;
    
    // Carbs bar
    doc.setTextColor(...textColor);
    doc.text(`Carbohydrates: ${macros.carbs.grams}g (${macros.carbs.percentage}%)`, 15, yPosition);
    
    doc.setFillColor(229, 231, 235);
    doc.rect(15, yPosition + 3, barWidth, barHeight, 'F');
    doc.setFillColor(251, 146, 60);
    doc.rect(15, yPosition + 3, (barWidth * macros.carbs.percentage) / 100, barHeight, 'F');
    yPosition += 18;
    
    // Fat bar
    doc.setTextColor(...textColor);
    doc.text(`Fat: ${macros.fat.grams}g (${macros.fat.percentage}%)`, 15, yPosition);
    
    doc.setFillColor(229, 231, 235);
    doc.rect(15, yPosition + 3, barWidth, barHeight, 'F');
    doc.setFillColor(239, 68, 68);
    doc.rect(15, yPosition + 3, (barWidth * macros.fat.percentage) / 100, barHeight, 'F');
    yPosition += 25;
    
    // Disclaimer
    doc.setTextColor(...secondaryColor);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    const disclaimerText = '* Nutritional information is an estimate and will vary depending on ingredient choices and preparation.';
    const disclaimerLines = doc.splitTextToSize(disclaimerText, 180);
    doc.text(disclaimerLines, 15, yPosition);
    
    // Footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFillColor(...primaryColor);
        doc.rect(0, 285, 210, 12, 'F');
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.text(`Downloaded from FoodSense on ${new Date().toLocaleDateString()}`, 15, 292);
        doc.text(`Page ${i} of ${pageCount}`, 180, 292);
    }
    
    // Save the PDF
    const fileName = `${recipe.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_recipe.pdf`;
    doc.save(fileName);
}

// Show recipe detail modal
function showRecipeDetail(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    currentRecipe = recipe;
    currentServings = recipe.servings; // Reset to default servings
    
    const servingRatio = currentServings / recipe.servings;
    const macros = calculateMacroPercentages(recipe.nutrients, servingRatio);
    
    modalBody.innerHTML = `
        <div class="recipe-detail-hero">
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-detail-overlay"></div>
            <div class="recipe-detail-content">
                <h1 class="recipe-detail-title">${recipe.name}</h1>
                <p class="recipe-detail-description">${recipe.description}</p>
            </div>
        </div>
        
        <div class="recipe-detail-info">
            <div class="info-card">
                <div class="info-icon">
                    <i class="fas fa-clock"></i>
                </div>
                <div class="info-text">
                    <h4>Prep Time</h4>
                    <p>${recipe.prepTime} min</p>
                </div>
            </div>
            <div class="info-card">
                <div class="info-icon">
                    <i class="fas fa-fire"></i>
                </div>
                <div class="info-text">
                    <h4>Cook Time</h4>
                    <p>${recipe.cookTime} min</p>
                </div>
            </div>
            <div class="info-card serving-card">
                <div class="info-icon">
                    <i class="fas fa-utensils"></i>
                </div>
                <div class="info-text">
                    <h4>Servings</h4>
                    <div class="serving-controls">
                        <button class="serving-btn" onclick="handleServingChange(-1)" ${currentServings <= 1 ? 'disabled' : ''}>
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="serving-count" id="servingCount">${currentServings}</span>
                        <button class="serving-btn" onclick="handleServingChange(1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="info-card download-card">
                <div class="info-icon">
                    <i class="fas fa-download"></i>
                </div>
                <div class="info-text">
                    <h4>Download</h4>
                    <button class="download-recipe-btn" onclick="downloadCurrentRecipe()">
                        <i class="fas fa-download"></i>
                        Recipe
                    </button>
                </div>
            </div>
        </div>
        
        <div class="recipe-sections">
            <div class="recipe-section-card">
                <h3>Ingredients</h3>
                <ul class="ingredients-list">
                    ${recipe.ingredients.map((ingredient, index) => {
                        const formattedQuantity = formatQuantity(ingredient.quantity, servingRatio);
                        const unit = ingredient.unit ? ` ${ingredient.unit}` : '';
                        return `
                            <li>
                                <input type="checkbox" id="ingredient-${index}">
                                <label for="ingredient-${index}"><strong>${formattedQuantity}${unit}</strong> ${ingredient.name}</label>
                            </li>
                        `;
                    }).join('')}
                </ul>
            </div>
            
            <div class="recipe-section-card">
                <h3>Instructions</h3>
                <ol class="instructions-list">
                    ${recipe.instructions.map((instruction, index) => `
                        <li>
                            <div class="step-number">${index + 1}</div>
                            <div class="step-text">${instruction}</div>
                        </li>
                    `).join('')}
                </ol>
            </div>
            
            <div class="recipe-section-card">
                <h3>Nutrition</h3>
                <div class="nutrition-info">
                    <div class="calories-section">
                        <div class="calories-header">
                            <h4>Calories</h4>
                            <span class="calories-value">${Math.round(recipe.nutrients.calories * servingRatio)}</span>
                        </div>
                        <div class="calories-bar">
                            <div class="calories-fill"></div>
                        </div>
                    </div>
                    
                    <div class="macros-section">
                        <div class="macro-item">
                            <div class="macro-header">
                                <h4>Protein</h4>
                                <span class="macro-value protein-value">${macros.protein.grams}g (${macros.protein.percentage}%)</span>
                            </div>
                            <div class="macro-bar">
                                <div class="macro-fill protein-fill" style="width: ${macros.protein.percentage}%"></div>
                            </div>
                        </div>
                        
                        <div class="macro-item">
                            <div class="macro-header">
                                <h4>Carbohydrates</h4>
                                <span class="macro-value carbs-value">${macros.carbs.grams}g (${macros.carbs.percentage}%)</span>
                            </div>
                            <div class="macro-bar">
                                <div class="macro-fill carbs-fill" style="width: ${macros.carbs.percentage}%"></div>
                            </div>
                        </div>
                        
                        <div class="macro-item">
                            <div class="macro-header">
                                <h4>Fat</h4>
                                <span class="macro-value fat-value">${macros.fat.grams}g (${macros.fat.percentage}%)</span>
                            </div>
                            <div class="macro-bar">
                                <div class="macro-fill fat-fill" style="width: ${macros.fat.percentage}%"></div>
                            </div>
                        </div>
                    </div>
                    
                    <p class="nutrition-disclaimer">
                        * Nutritional information is an estimate and will vary depending on ingredient choices and preparation.
                    </p>
                </div>
            </div>
        </div>
    `;
    
    // Update modal header to remove download button
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <button class="modal-close" id="modalClose">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Re-attach modal close event listener
    document.getElementById('modalClose').addEventListener('click', closeModal);
    
    recipeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Download current recipe from modal
function downloadCurrentRecipe() {
    if (currentRecipe) {
        generateRecipePDF(currentRecipe);
    }
}

// Close modal
function closeModal() {
    recipeModal.classList.remove('active');
    document.body.style.overflow = '';
    currentRecipe = null;
    currentServings = 4;
}

// Handle download from recipe cards
function handleDownload(e, recipeId) {
    e.stopPropagation();
    
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe) {
        // Set current recipe and servings for download
        currentRecipe = recipe;
        currentServings = recipe.servings;
        generateRecipePDF(recipe);
    }
}

// Mobile menu functionality
function toggleMobileMenu() {
    sidebar.classList.toggle('active');
}

function closeMobileMenu() {
    sidebar.classList.remove('active');
}

// Reset filters
function resetFilters() {
    // Reset search
    searchInput.value = '';
    searchTerm = '';
    
    // Reset tags
    selectedTags = [];
    document.querySelectorAll('.tag-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Reset nutrition sliders
    document.getElementById('caloriesRange').value = 580;
    document.getElementById('proteinRange').value = 35;
    updateNutritionLabels();
    
    // Re-filter recipes
    filterRecipes();
}

// Update nutrition labels
function updateNutritionLabels() {
    const caloriesValue = document.getElementById('caloriesValue');
    const proteinValue = document.getElementById('proteinValue');
    const caloriesRange = document.getElementById('caloriesRange');
    const proteinRange = document.getElementById('proteinRange');
    
    if (caloriesValue && caloriesRange) {
        caloriesValue.textContent = `220 - ${caloriesRange.value}`;
    }
    
    if (proteinValue && proteinRange) {
        proteinValue.textContent = `8 - ${proteinRange.value}g`;
    }
}

// Update nutrition labels on slider change
document.addEventListener('input', function(e) {
    if (e.target.id === 'caloriesRange' || e.target.id === 'proteinRange') {
        updateNutritionLabels();
    }
});

// Initialize nutrition labels
updateNutritionLabels();

// Handle escape key for modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && recipeModal.classList.contains('active')) {
        closeModal();
    }
});