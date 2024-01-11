<template>
    <HeaderApp />
    <div class="header-page">
        <div class="header-left">
            <h1 class="page-title">Inventory</h1>
            <div class="sorting-search-container">
            <select class="select-input button-class" v-model="selectedSort">
                <option value="location">Location</option>
                <option value="type">Type</option>
            </select>
            <div class="search-container">
                <input type="text" placeholder="Search..." v-model="searchQuery" class="button-class search-input">
                <i class="search-icon fas fa-search"></i> <!-- Font Awesome icon for example -->
            </div>
        </div>
        </div>
        <div class="header-right">
          <div class="card-title d-flex flex-column me-4">                
            <span class="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2 numberWidgets" :class="itemsUrgency">{{ totalItems }}</span>
            <span class="text-gray-500 pt-1 fw-semibold fs-6">Items Stored</span>
          </div>
           <div class="card-title d-flex flex-column me-4">                
            <span class="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2 numberWidgets" :class="consumeSoonUrgency">{{ consumeSoonCount }}</span>
            <span class="text-gray-500 pt-1 fw-semibold fs-6">Consume Soon</span>
          </div>
           <div class="card-title d-flex flex-column">                
            <span class="fs-2hx fw-bold text-gray-900  lh-1 ls-n2 numberWidgets" :class="availableDishesUrgency">{{ availableDishes }}</span>
            <span class="text-gray-500 pt-1 fw-semibold fs-6">Available Dishes</span>
          </div>
        </div>
       
    </div>
    <div class="inventory-page-container">
      <div class="container-inventory">
        <div class="d-flex flex-column w70">
            <template v-if="sortedAndFilteredItems?.length > 0">
                    <div  v-for="(group, index) in sortedAndFilteredItems" :key="index" class="mb-4">
                        <div class="category-header">
                            <h5 class="txtGroupe" v-if="group.group">{{ group.group }}</h5>
                            <h3 class="txtGroupe" v-else>All Items</h3>
                        </div>
                        <div class="inventory-container" ref="scrollContainer">
                            <!-- Inventory Items Section -->
                            <div class="inventory-item-card" v-for="ingredient in group.items" :key="ingredient.id">
                                <div class="card-header">
                                    <img :src="ingredient.image" alt="" class="inventory-item-image">
                                    <h4>{{ ingredient.name }}</h4>
                                </div>
                                <div class="card-body">
                                    <div class="urgency-indicator">
                                        <i v-bind="getUrgencyIcon(ingredient.urgency)"></i>
                                    <div class="urgency-block" 
                                        v-for="n in 10" 
                                        :key="`urgency-${ingredient.id}-${n}`" 
                                        :style="{ backgroundColor: ingredient.urgency === 0 ? '#58D68D' : (n <= ingredient.urgency ? getUrgencyColor(ingredient.urgency) : '#ddd') }">
                                    </div>
                                    </div>
                                </div>
                            </div> 
                            <span class="item-count">Total : {{ group.items.length }} items</span>
                        </div>

                    </div>
            </template>
            <p v-else class="inventory-container">Aucun aliment enregistré.</p>
        </div>
        <AddIngredient />
      
      </div>
 
      <FooterApp />
    </div>
  </template>
  <script>
import { defineComponent } from 'vue';
import HeaderApp from "./header.vue";
import AddIngredient from './AddIngredient.vue';
import FooterApp from "./FooterApp.vue";
import _ from 'lodash';
  // ... your existing script
  export default defineComponent({
    name: 'InventoryList', 
    components: {
        FooterApp,
        HeaderApp,AddIngredient
    },
    data() {
        return {
            inventoryItems: [
                { id: '1', image: require('@/assets/ham.png'), name: 'Jambon', quantity: 2, location: 'Refrigerator', type: 'Meat', urgency: 9 },
                { id: '2', image: require('@/assets/salmon.png'), name: 'Saumon', quantity: 4, location: 'Refrigerator', type: 'Fish', urgency: 4 },
                { id: '3', image:  require('@/assets/flour.png'), name: 'Farine', quantity: 1, location: 'Pantry', type: 'Baking', urgency: 2 },
                { id: '4', image: require('@/assets/brownSugar.png'), name: 'Sucre Roux', quantity: 3, location: 'Pantry', type: 'Sweeteners', urgency: 0 },
                { id: '5', image: require('@/assets/vanilla.png'), name: 'Vanille', quantity: 15, location: 'Pantry', type: 'Spices', urgency: 1 },
                { id: '5', image: require('@/assets/vanilla.png'), name: 'Vanille', quantity: 15, location: 'Pantry', type: 'Spices', urgency: 1 },
                { id: '5', image: require('@/assets/vanilla.png'), name: 'Vanille', quantity: 15, location: 'Pantry', type: 'Spices', urgency: 1 },
                { id: '5', image: require('@/assets/vanilla.png'), name: 'Vanille', quantity: 15, location: 'Pantry', type: 'Spices', urgency: 1 },
                { id: '5', image: require('@/assets/vanilla.png'), name: 'Vanille', quantity: 15, location: 'Pantry', type: 'Spices', urgency: 1 },
                { id: '5', image: require('@/assets/vanilla.png'), name: 'Vanille', quantity: 15, location: 'Pantry', type: 'Spices', urgency: 1 },
                { id: '5', image: require('@/assets/vanilla.png'), name: 'Vanille', quantity: 15, location: 'Pantry', type: 'Spices', urgency: 1 },
                { id: '5', image: require('@/assets/vanilla.png'), name: 'Vanille', quantity: 15, location: 'Pantry', type: 'Spices', urgency: 1 },

                { id: '5', image: require('@/assets/vanilla.png'), name: 'Vanille', quantity: 15, location: 'Pantry', type: 'Spices', urgency: 1 },

                { id: '5', image: require('@/assets/vanilla.png'), name: 'Vanille', quantity: 15, location: 'Pantry', type: 'Spices', urgency: 1 },

                { id: '6', image: require('@/assets/zucchini.png'), name: 'Courgettes', quantity: 6, location: 'Freezer', type: 'Vegetable', urgency: 3 },
                { id: '7', image: require('@/assets/lasagna.png'), name: 'Lasagnes', quantity: 2, location: 'Freezer', type: 'Prepared Meal', urgency: 3 },
                { id: '8', image: require('@/assets/milk.png'), name: 'Lait', quantity: 2, location: 'Refrigerator', type: 'Dairy', urgency: 7 },
                { id: '9', image: require('@/assets/pastry-dough.png'), name: 'Pâte Brisée', quantity: 2, location: 'Refrigerator', type: 'Baking', urgency: 0 },
                { id: '10', image: require('@/assets/chocolate.png'), name: 'Chocolat', quantity: 5, location: 'Pantry', type: 'Confectionery', urgency: 1 },
                { id: '11', image: require('@/assets/semolina.png'), name: 'Semoule', quantity: 1, location: 'Pantry', type: 'Grains', urgency: 2 },
                { id: '12', image: require('@/assets/rice.png'), name: 'Riz', quantity: 10, location: 'Pantry', type: 'Grains', urgency: 2 }
            ],
            threshold: {
                items: { danger: 25, alert: 40 },
                consumeSoon: { danger: 5, alert: 10 },
                availableDishes: { danger: 2, alert: 5 },
            },
            currentPage: 1,
            itemsPerPage: 6,
          
            selectedIngredient: null,
            selectedSort: 'location',
            searchQuery: '',
            defaultImage: '../assets/cereales.png',
        };
    },
    mounted() {
       
    },
 
    methods: {
     
        onImageChange(e) {
            const file = e.target.files[0];
            this.newItem.image = URL.createObjectURL(file);
        },
      
        addItem() {
            // Generate a unique ID for the new item. This is a placeholder and should be replaced with your ID generation logic.
            this.newItem.id = Date.now().toString();
            
            // Normally you would send this data to the backend here.
            
            // Add the new item to the local inventory list (for mockup purposes)
            this.inventoryItems.push({ ...this.newItem });
            
            // Reset the form fields
            this.newItem = {
                id: '',
                image: '',
                name: '',
                quantity: 0,
                location: '',
                type: '',
                urgency: 1
            };
        },
        
        selectIngredient(ingredient) {
            this.selectedIngredient = ingredient;
        },
        getUrgency(count, threshold) {
            if (count <= threshold.danger) {
            return 'danger';
            } else if (count <= threshold.alert) {
            return 'iconAlert';
            }
            return 'safe';
        },
        getUrgencyColor(urgency) {
            if (urgency === 0) return '#58D68D'; // green for non-urgent items
            const redIntensity = Math.round((urgency / 10) * 255);
            const greenIntensity = 255 - redIntensity;
            return `rgb(${redIntensity}, ${greenIntensity}, 0)`;
        },
        getUrgencyIcon(urgency) {
            const color = this.getUrgencyColor(urgency);
            let iconClass = urgency < 7 ? 'fas fa-check-circle icon-other' : 'fas fa-exclamation-circle icon-exclamation';
            return {
            'class': iconClass,
            'style': `color: ${color}`
            };
        },
        previousPage() {
            if (this.currentPage > 1) this.currentPage--;
        },
        nextPage() {
            if ((this.currentPage * this.itemsPerPage) < this.sortedAndFilteredItems.reduce((acc, group) => acc + group.items.length, 0)) {
                this.currentPage++;
            }
        },
    },
    computed: {
        totalItems() {
            // Sum the quantity of all inventory items
            return this.inventoryItems.reduce((sum, item) => sum + item.quantity, 0);
        },
        itemsUrgency() {
            const count = this.totalItems; // assuming this is calculated somewhere else
            return this.getUrgency(count, this.threshold.items);
        },
        consumeSoonUrgency() {
            const count = this.consumeSoonCount; // assuming this is calculated somewhere else
            return this.getUrgency(count, this.threshold.consumeSoon);
        },
        consumeSoonCount() {
            return this.inventoryItems.filter(item => item.urgency >= 7).length;
        },
        availableDishesUrgency() {
            //*********** MOCKUPS*********//
            // To BE REPLACED
            const count = 3
            return this.getUrgency(count, this.threshold.availableDishes);
        },
        availableDishes() {
            // This needs to be calculated based on your application's logic
            return 3; // Placeholder value
        },
        pagedItems() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.sortedAndFilteredItems.map(group => ({
                ...group,
                items: group.items.slice(start, end)
            }));
        },
        filteredItems() {
            // Implement search logic here based on `searchQuery`
            return this.inventoryItems.filter((item) => 
                item.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
            },
        sortedAndFilteredItems() {
            // First, filter items based on the search query
            let result = this.inventoryItems.filter((item) => 
            item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
            console.log('result' , result)
            // Apply sorting only if a sorting method is selected
            if (this.selectedSort === 'location') {
                result = _.groupBy(result, 'location');
            } else if (this.selectedSort === 'type') {
                result = _.groupBy(result, 'type');
            } else {
            // If no sorting is selected, return the filtered list as-is
                return [{
                    group: '',
                    items: result.sort((a, b) => b.urgency - a.urgency) // Tri par urgence décroissante
                }];
            }
            // Tri chaque groupe par urgence décroissante
            for (let key in result) {
                result[key] = result[key].sort((a, b) => b.urgency - a.urgency);
                }

                return Object.keys(result).length > 0 ? Object.keys(result).map(key => {
                return {
                    group: key.toUpperCase(), // Transformez en majuscules
                    items: result[key]
                };
                }) : [];
        },
    }
  });
  </script>
  
  <style scoped>
  .icon-exclamation {
    margin-right:5px;
        color: #FF0000; 
    }

    .icon-other {
        margin-right:5px;

        color: #008000; 
    }
  .page-title {
    margin-right: 80px;
    text-align: left; 
  margin-left: 2rem;
  font-size: 2em;
  color: #333;
}
.sorting-search-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.header-page {
  display: flex;
  justify-content: space-around; 
  align-items: center;
  padding: 1rem 2rem;
}
.header-left,
.header-right {
  display: flex;
  align-items: center;
}
.header-right .info-item {
    display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
}

.select-input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.info-item {
border-radius: 10px;
font-size: var(--info-font-size);
  font-weight: var(--info-font-weight);
  padding: var(--info-padding);
  color: #fff;
  margin-right: 10px; 
  transition: background-color 0.3s ease;
}
.select-input,
.search-container {
  margin-right: 10px; 
}
.titleWidgets{
    color:#2C3E50;
}
.card-body {
    padding: 0.5rem;
  display: flex;
  flex-direction: column; 
  justify-content: flex-end;
}
.search-container {
  position: relative;
  display: inline-block;
}

.search-icon {
  position: absolute;
  right: 30px;
  color: #17a2b8;
  top: 50%;
  font-size: 1.2rem;
  transform: translateY(-50%);
  pointer-events: none; 
}
.button-class {
    background-color: white;
    border: 1px solid #17a2b8; /* theme color for border */
    border-radius: 4px;
    padding: 10px 20px;
    text-transform: uppercase;
    transition: background-color 0.3s, color 0.3s;
}

.urgency-indicator {
    display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
}
.category-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
}
.text-gray-500{
  color:#071437
}
.text-gray-900{
  color:#99A1B7
}
.txtGroupe {
    margin: 0 15px;
    font-weight: bold;
    padding: 2rem 1rem;
  font-weight: 400;
  color: var(--primary-dark);
  display: inline-block;
  border-top-left-radius: 10px; 
    border-top-right-radius: 10px;  
    border-bottom-right-radius: 0px;  
    border-bottom-left-radius: 0px;  
      margin-bottom: 0;
  padding: 1rem; 
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f4f4; 
}
.urgency-block {
    width: 10%;
  margin: 0 1%;
  transition: background-color 0.3s ease;
  height: 8px; 
  border-radius: 5px; 
    flex: 1;
  background-color: #ddd; 
  &:last-child {
    margin-right: 0;
  }
}
.card-text {
  color: #333; 
}
.w70{
    width: 70%
}
.header-page{
  background-color: white; 
    width: 100%; 
  padding: 2rem; 
  display: flex;
  justify-content: space-between; 
  align-items: center;
   padding: 85px 8% 0px 8%;
}
.header-with-background {
  background-size: cover;
  background-position: center;
}
.inventory-page-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 1rem;
  width: 100%;
}



.container-inventory {
    margin: 10px 4%;
    display: flex;
    width: 100%;
}
.numberWidgets{
  font-size: 2.5rem;
}
.numberWidgets.safe {
  color : var(--color-safe);
}

.numberWidgets.iconAlert {
  color :  var(--color-warning);
}

.numberWidgets.danger {
  color :  var(--color-danger);
}
.item-count {
    position: absolute;
    right: 1rem; 
  bottom: 1rem; 
  background-color: #2C3E50;
  color: var(--text-light);
  height: 27px;
    margin-right: 0px;
    margin-left: auto;
    margin-bottom: 0px;
    margin-top: auto;
    padding: 4px;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: normal;
}

.inventory-container {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 10px;
    overflow-x: auto; /* Horizontal scroll for overflow */
    overflow-y: auto; /* Vertical scroll if content exceeds max-height */
    max-height: 500px; 
    margin: 0 15px;
    padding: 2rem ;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    border: 1px solid #e7e7e7;
    border-top-left-radius: 0px;
    border-top-right-radius: 10px; 
    border-bottom-left-radius: 10px; 
    border-bottom-right-radius: 10px; 
    background-color: #f4f4f4; 
}

.expiration-icon {
  margin-right: 5px;
  color: #CB4335;
}
.ingredient-details {
  background: #ffffff;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.button-class {
  margin-right: 10px; 
}
.button-class:last-child {
  margin-right: 0;
}

.inventory-item-name {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0.5rem 0;
}
.card-header h4 {
    font-weight: bold;

    position: absolute; 
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  margin: 0;
  padding: 0.5rem;
  font-size: 1rem; 
  text-transform: uppercase;
  font-weight: 600; 
}
.inventory-item-image {
    width: 100%; 
  height: auto;
}
.card-header {
  position: relative; 
  background: #f9f9f9;
  border-bottom: 1px solid #eee; 
}
.inventory-item-card {
   cursor: pointer;
  background-color: #fff;
  border: 1px solid #e0e0e0; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
  border-radius: 10px; 
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
}


.inventory-item-card:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transform: translateY(-3px);
}
  </style>
  