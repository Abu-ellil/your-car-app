# Your Car App 
[](https://abu-ellil.github.io/your-car-app/)
![Capture](https://github.com/Abu-ellil/your-car-app/assets/94858304/0eb1fd2b-95d0-4dde-902c-ba65d8b92d61)

# Shop

Shop is a React component that displays a carousel of cars with interactive features such as adding cars to a shopping cart and managing the cart contents. It utilizes the Framer Motion library for animations and drag interactions.


## Features

- Carousel: The component displays a carousel of cars with images, names, descriptions, and additional information such as the number of seats and luggage capacity. Users can navigate through the carousel using left and right arrow buttons or by clicking on circle indicators.
- Shopping Cart: Users can add cars to the shopping cart by clicking the plus button on each car. The cart keeps track of the added cars and their quantities. Users can also remove cars from the cart or delete all cars at once.
- Drag and Drop: The shopping cart can be opened and closed by clicking on a cart icon. The cart can also be dragged up and down on the screen for better visibility.
- Local Storage: The component persists the cart contents and the car list in the local storage of the browser, ensuring that the data is preserved even when the page is refreshed.

## Installation

1. Clone the repository.
2. Install the required dependencies by running `npm install`.
3. Start the development server with `npm start`.

## Usage

To use the Shop component in your project, follow these steps:

1. Import the Shop component: `import Shop from './Shop'`.
2. Add the `<Shop />` component to your JSX code.

#Dependencies
The Shop component relies on the following dependencies:

React: ^16.8.0
Draggable: ^4.4.3
Framer Motion: ^3.3.0
Font Awesome: ^5.15.3
Make sure to install these dependencies before using the Shop component.

License
This project is licensed under the MIT License. See the LICENSE file for details.


Feel free to copy the above markdown code and save it as `README.md` in your project's root directory.


```jsx
import React from 'react';
import Shop from './Shop';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Shop />
    </div>
  );
};

export default App;


