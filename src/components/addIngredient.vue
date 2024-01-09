<template>
  <div class="side-panel">
        <!-- Side Panel to Add Items -->
        <div class="add-item-form">
            <h2>Add Ingredient</h2>
            <div class="ingredient-image-upload">
                <img src="@/assets/cereales.png" alt="Ingredient Image" class="ingredient-image-preview">
                <input type="file" @change="onImageChange" class="input-field">
            </div>
            <input type="text" placeholder="Enter ingredient name" v-model="newItem.name" class="input-field">
            <input type="number" placeholder="Enter quantity" v-model="newItem.quantity" class="input-field">
            <input type="text" placeholder="Storage location" v-model="newItem.location" class="input-field">
            <select v-model="newItem.type" class="input-field">
            <option disabled value="">Select type</option>
            <option>Fruit</option>
            <option>Vegetable</option>
            </select>
            <input type="number" placeholder="Urgency level (1-10)" v-model="newItem.urgency" min="1" max="10" class="input-field">
            <button @click="addItem()" class="btn-add">Add to Inventory</button>
        </div>
        <!-- Selected Ingredient Details -->
        <div v-if="selectedIngredient" class="ingredient-details">
            <h2>{{ selectedIngredient.name }}</h2>
            <p>Quantity: {{ selectedIngredient.quantity }}</p>
            <p>Location: {{ selectedIngredient.location }}</p>
            <p>Type: {{ selectedIngredient.type }}</p>
            <p>Urgency: {{ selectedIngredient.urgency }}</p>
        </div>
    </div>
</template>

<script>
export default ({
    name: 'addIngredient',
    data() {
        return {
            newItem: {
                id: '', // This will be assigned when adding the item
                image: '',
                name: '',
                quantity: 0,
                location: '',
                type: '',
                urgency: 1
            },  
        }
      
    }
})
</script>
<style>
.side-panel {
max-height: 70vh;
width: 30%;
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky; 
}
.add-item-form::after {
  content: '';
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #f9f9f9; 
  position: absolute;
  right: 50px; 
  top: -20px; 
  clear: both;
}
.add-item-form {
  background-color: #fff;
  border-radius: 8px; /* Slightly rounded corners */
  box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* Subtle shadow */
  padding: 20px;
  transition: all 0.3s ease; /* Smooth transitions */
}
.add-item-form h2 {
  margin-bottom: 1rem;
  color: #333;
  font-size: 1.5em;
}
.ingredient-image-upload {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.ingredient-image-preview {
  height: 150px;
  width: auto;
  border-radius:10px; 
  margin-right: 1rem;
  object-fit: cover;
  background-color: #eee; 
}
.input-field {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
}
.btn-add {
  padding: 0.5rem 1rem;
  background: var(--accent-tomato); 
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  cursor: pointer;
  width: 100%; 
  font-weight: 600;
}

.btn-add:hover {
    background-color: #43A047; 
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);

}
</style>