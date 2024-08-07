import React from 'react'
import './add.css'
import { assets } from '../../assets/assets'


const add = () => {
  return (
    <div className='add'>
        <form className='flex-col'>
            <div className="add-img-upload" flex-col>
                <p>upload Image</p>
                <label htmlFor="image">
                    <img src={assets.upload_area} alt="" />
                </label>
                <input type="file" id='image' hidden required />
            </div>
            <div className="add-product-name" flex-col>
                <p>Product Name</p>
                <input type="text" name="name" placeholder="Type here" />
            </div>
            <div className="add-product-description" flex-col>
                <p>Product Production</p>
                <textarea name="description" rows="6" placeholder='Write content here' required></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category" flex-col>
                    <p>product category</p>
                    <select name="category">
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Desert">Desert</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noddles</option>
                    </select>
                </div>
                <div className="add-price" lex-col>
                    <p>Product price</p>
                    <input type="Number" name='price' placeholder='$20' />
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>
    </div>
  )
}

export default add