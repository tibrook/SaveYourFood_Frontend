<template>
    <div class="d-flex componentContainer">
        <div class="illustration-container">
         
        </div>
        <div class="widgets-container">
            <div class="widgets-container">
                <!-- Inventory Widget -->
               
                <!-- Recipes Widget -->
                <div class="widget widget-green">
                    <div class="widget-title">{{ $t('recipes') }}</div>
                    <div class="widget-value">85</div>
                    <div class="widget-subtext">{{ $t('recipes_available') }}</div>
                </div>
                <!-- Weekly Meals Widget -->
                <div class="widget widget-red">
                    <div class="widget-title">{{ $t('weekly_meals') }}</div>
                    <div class="widget-value small">2</div>
                    <div class="widget-subtext">{{ $t('planned_meals') }}</div>
                </div>
                <div class="widget widget-green">
                    <div class="widget-title">{{ $t('inventory') }}</div>
                    <div class="widget-value large">320</div>
                    <div class="widget-subtext">{{ $t('planned_meals') }}Items stocked</div>
                </div>
                <!-- Shopping List Widget -->
                <div class="widget">
                    <div class="widget-title">{{ $t('shopping_list') }}</div>
                    <div class="widget-value valuegreen">15</div>
                    <div class="widget-subtext">Items to buy</div>
                </div>

                <!-- User Settings Widget -->
                <div class="widget widget-yellow">
                    <div class="widget-title">{{ $t('user_settings') }}</div>
                    <div class="widget-value small">4</div>
                    <div class="widget-subtext">Configurations set</div>
                </div>
            </div>
            <!-- Repeat for other widgets -->
        </div>
    </div>
   
   
</template>

<style>
.componentContainer{
    margin-top: 80px;
    margin-right: 0px;
    margin-bottom: 0px;
}
.widget-value.valueGreen{
    color: var(--primary-green);
}
.illustration-container {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 20px; 
  padding: 20px;
  background-color: #f5f5f5; 
}
.icon {
  width: 80px;
  height: 80px; 
  background-color: #e8e8e8; 
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 6px #00000029; 
}

.widgets-container {
    margin: auto;
    margin-right: 10px;
    width: auto;
    align-items: flex-end;
    display: flex;
    justify-content: space-between; 
    padding: 10px 20px;
    position: relative; 
}

.widget {
    background-color: var(--text-light);
  border-left: 5px solid var(--accent-tomato);
  border-radius: 8px;
  padding: 15px;
  margin: 0 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
  cursor: pointer;
}
.widget.widget-green{
  border-left: 5px solid var(--primary-green);
}
.widget.widget-red{
    border-left:5px solid #8B0000
}

.widget:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.widget-title {
  color: #333;
  font-size: 1.1em;
  font-weight: bold;
  margin-bottom: 5px;
}

.widget-value {
  color: #502C3E;
  font-size: 2em;
  line-height: 1;
}
.widget-value.large {
  font-weight: bold;
  color: #2C503E; 
  font-size: 2.5em;
}
.widget-value.small {
  color: #2C2C50;
  font-size: 1.5em;
}
.widget.widget-yellow{
    border-left: 5px solid #DAA520
}

.widget-subtext {
  color: #666;
  bottom: 10px;
  width: 100%;
  font-size: 0.85em;
  text-align: center;
}
</style>