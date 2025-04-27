import React from 'react'
import {data} from '../src/restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>You can find popular dishes like Spaghetti Carbonara, Lasagna, and Margherita Pizza from Italian cuisine. For Chinese favorites, there's Sweet and Sour Chicken, Kung Pao Chicken, and Peking Duck. From Indian cuisine, enjoy Butter Chicken, Biryani, and Paneer Tikka. You can also savor Tacos, Burritos, and Quesadillas for a taste of Mexico. For classic American comfort, there's Cheeseburgers, Fried Chicken, and Macaroni and Cheese.</p>  </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu