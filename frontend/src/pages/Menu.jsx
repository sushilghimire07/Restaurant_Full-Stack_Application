import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Menu = () => {
  // 50 food items for the menu
  const menuItems = [
    { name: 'Burger', description: 'A delicious beef patty with lettuce and cheese', price: '$5.99' },
    { name: 'Cheeseburger', description: 'Burger with cheese, lettuce, tomato, and special sauce', price: '$6.99' },
    { name: 'Chicken Burger', description: 'Grilled chicken patty with lettuce and mayo', price: '$7.99' },
    { name: 'Veggie Burger', description: 'A veggie patty with avocado and tomato', price: '$6.49' },
    { name: 'BBQ Burger', description: 'Burger with BBQ sauce, bacon, and cheese', price: '$7.99' },
    { name: 'Pizza Margherita', description: 'Classic cheese pizza with fresh basil and tomato sauce', price: '$8.99' },
    { name: 'Pepperoni Pizza', description: 'Pizza topped with pepperoni and cheese', price: '$9.49' },
    { name: 'Mushroom Pizza', description: 'Pizza with mushrooms, olives, and mozzarella', price: '$9.99' },
    { name: 'BBQ Chicken Pizza', description: 'BBQ chicken with red onions, cheese, and BBQ sauce', price: '$10.99' },
    { name: 'Hawaiian Pizza', description: 'Ham, pineapple, and cheese pizza', price: '$9.49' },
    { name: 'Pasta Alfredo', description: 'Creamy Alfredo pasta with chicken and mushrooms', price: '$8.99' },
    { name: 'Pasta Bolognese', description: 'Pasta with a rich beef and tomato sauce', price: '$9.99' },
    { name: 'Lasagna', description: 'Layered pasta with beef, cheese, and tomato sauce', price: '$12.99' },
    { name: 'Spaghetti Carbonara', description: 'Spaghetti with creamy sauce, pancetta, and parmesan', price: '$10.49' },
    { name: 'Mac and Cheese', description: 'Classic mac and cheese with creamy cheese sauce', price: '$6.99' },
    { name: 'Caesar Salad', description: 'Crisp romaine with Caesar dressing, croutons, and parmesan', price: '$4.99' },
    { name: 'Greek Salad', description: 'Mixed greens with feta, olives, and cucumber', price: '$5.99' },
    { name: 'Garden Salad', description: 'Fresh salad with mixed greens, tomatoes, and cucumbers', price: '$3.99' },
    { name: 'Cobb Salad', description: 'Salad with chicken, avocado, bacon, and eggs', price: '$7.99' },
    { name: 'Tuna Salad', description: 'Mixed greens with tuna, egg, and a tangy dressing', price: '$6.49' },
    { name: 'Chicken Caesar Salad', description: 'Grilled chicken on top of Caesar salad', price: '$7.49' },
    { name: 'Fish Tacos', description: 'Crispy fish fillets in soft tacos with cilantro and lime', price: '$8.49' },
    { name: 'Chicken Tacos', description: 'Grilled chicken with lettuce, cheese, and salsa in a taco shell', price: '$7.99' },
    { name: 'Beef Tacos', description: 'Ground beef with lettuce, cheese, and salsa in a soft taco shell', price: '$7.99' },
    { name: 'Shrimp Tacos', description: 'Shrimp with avocado, salsa, and sour cream', price: '$9.49' },
    { name: 'Chicken Wings', description: 'Crispy fried chicken wings with buffalo sauce', price: '$8.99' },
    { name: 'Buffalo Wings', description: 'Spicy buffalo sauce coated crispy chicken wings', price: '$9.49' },
    { name: 'BBQ Ribs', description: 'Tender baby back ribs with BBQ sauce', price: '$14.99' },
    { name: 'Grilled Salmon', description: 'Salmon fillet grilled to perfection with lemon', price: '$15.99' },
    { name: 'Steak', description: 'Grilled steak served with mashed potatoes', price: '$18.99' },
    { name: 'Steak and Fries', description: 'Juicy steak with crispy French fries', price: '$17.99' },
    { name: 'Fried Chicken', description: 'Crispy fried chicken served with coleslaw', price: '$11.99' },
    { name: 'Chicken Parmesan', description: 'Breaded chicken with marinara and melted cheese', price: '$12.49' },
    { name: 'Grilled Chicken', description: 'Juicy grilled chicken served with vegetables', price: '$12.99' },
    { name: 'Sushi Rolls', description: 'Assorted sushi rolls with fresh fish', price: '$14.99' },
    { name: 'Shrimp Tempura', description: 'Crispy shrimp with a light batter, served with dipping sauce', price: '$13.99' },
    { name: 'Spring Rolls', description: 'Fresh vegetables wrapped in rice paper with dipping sauce', price: '$5.99' },
    { name: 'Fried Rice', description: 'Stir-fried rice with vegetables, eggs, and choice of protein', price: '$8.49' },
    { name: 'Egg Rolls', description: 'Crispy egg rolls stuffed with vegetables and pork', price: '$4.99' },
    { name: 'Dim Sum', description: 'Steamed dumplings filled with pork or shrimp', price: '$6.49' },
    { name: 'Pad Thai', description: 'Thai stir-fried noodles with peanuts, egg, and lime', price: '$9.99' },
    { name: 'Pho', description: 'Vietnamese noodle soup with beef and fresh herbs', price: '$11.49' },
    { name: 'Ramen', description: 'Japanese ramen noodles in a rich broth', price: '$9.99' },
    { name: 'Grilled Shrimp', description: 'Shrimp grilled and served with a lemon garlic butter sauce', price: '$13.99' },
    { name: 'Chicken Satay', description: 'Skewered grilled chicken served with peanut sauce', price: '$7.99' },
    { name: 'Chow Mein', description: 'Stir-fried noodles with vegetables and choice of protein', price: '$8.49' },
    { name: 'Cheese Quesadilla', description: 'Flour tortilla with melted cheese, served with salsa', price: '$5.99' },
    { name: 'Beef Quesadilla', description: 'Quesadilla filled with seasoned ground beef and cheese', price: '$6.99' },
    { name: 'Veggie Quesadilla', description: 'Quesadilla with grilled vegetables and cheese', price: '$5.49' },
    { name: 'Tacos Al Pastor', description: 'Marinated pork tacos with pineapple and salsa', price: '$8.99' },
    { name: 'Burrito', description: 'Flour tortilla filled with rice, beans, and your choice of protein', price: '$9.99' },
    { name: 'Nachos', description: 'Tortilla chips topped with melted cheese, jalapenos, and sour cream', price: '$6.99' },
    { name: 'Cheese Fries', description: 'Crispy fries topped with melted cheese and bacon', price: '$5.99' },
    { name: 'Sweet Potato Fries', description: 'Crispy sweet potato fries served with dipping sauce', price: '$4.99' },
    { name: 'Chocolate Cake', description: 'Decadent chocolate cake with a rich ganache', price: '$3.99' },
    { name: 'Vanilla Ice Cream', description: 'Creamy vanilla ice cream topped with chocolate syrup', price: '$2.99' },
    { name: 'Apple Pie', description: 'Warm apple pie with a flaky crust and cinnamon', price: '$4.49' },
  ];

  return (
    <section className="menu">
      <div className="container">
      <div className="back-to-home">
        <Link to={'/'}>
          Back to Home <HiArrowNarrowRight />
        </Link>
      </div>
        <h1>Our Delicious Menu</h1>
        <p>Explore our variety of dishes crafted with love!</p>

        <div className="menu-items">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Back to Home Button */}
      
    </section>
  );
};

export default Menu;
