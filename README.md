# SaveYourFood

This project addresses two common issues:

- **Food Waste**
- **Difficulty of Making Different Meals Daily**
  The application generates recipes based on user preferences and available ingredients.

## Description

### /register:

- **Functionality:** User registration with email, last name, first name, and password.
- **Password Rules:** Adherence to backend complexity rules.
- **Email Validation:** Format validation required.
- **Admin Approval:** Admin validation with a confirmation code (popup) required.
- **Redirection:** Redirects to the homepage upon successful registration.

### /login:

- **Default Display:** Shown when the user is not connected.
- **Form Validation:** Submit button disabled if incomplete.
- **Authentication:** JWT received upon entering email and password.
- **Password Reset:** "Forget my password" link available.
- **Test Account Access:** Option to use a test account.
- **Error Handling:** "Invalid credentials" message for login errors.
- **New Account:** Link to /register for new users.

### Page Structure:

- **Header:** Contains project logo, name, and profile picture.
- **Dropdown Menu:** For User Settings and Logout.
- **Footer:** Language options and links to terms and security policies.
- **User Preferences:** Accessible from User Settings.

### /home:

- **Overview:** Brief description of features.
- **Navigation:** Descriptive icons/images for page redirection.
- **User Data:** Displays user-specific statistics.
- **Ingredient Entry:** Modal for ingredient input on first login.

### /inventory:

- **Display:** Ingredients sorted by location.
- **Location Options:** Up to 50 customizable locations.
- **Sorting Methods:** Options like type (liquid, paste, flour, etc.).
- **Addition Panel:** Sidebar for new ingredient entries.

### /recipe:

- **Suggestions:** Based on user preferences.
- **Addition Sidebar:** For inputting new recipes.
- **Tabs:** All Recipes, My Recipes, Upcoming Recipes.
- **Interaction:** Details view, adding to weekly menu, and notes.

### /weekly-menu:

- **Calendar View:** Shows meals for lunch and dinner.
- **Customization:** Editable via user settings.
- **Meal Management:** Drag & drop, add, or delete meals.
- **History:** Viewing previous menus.

### /shopping-list:

- **Integration:** Ingredients added from inventory and missing recipe items.
- **Management:** Add, delete, and validate items.
- **Partial Validation:** Highlight items for selective validation.
- **Synchronization:** Updates inventory quantities.

## Technologies

- VUE3
- Bootstrap 5 (to be removed)
- Javascript (to migrate to TypeScript)

## Upcoming Planned Features

- Migrate frontend to TypeScript and remove Bootstrap.
- Integrate with a new design.
- Additional authentication methods.
- Password management enhancements.
- Reporting based on consumption.
- Email export of menus.
- Add ingredient by flashing QrCode
## Project Setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```
