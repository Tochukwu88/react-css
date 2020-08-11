import React from "react";
import './Note.css'
import exclusive from '../img/exclusive.png'
import buy_one from '../img/buy-1.jpg'
import buy_two from '../img/buy-2.jpg'
import buy_three from '../img/buy-3.jpg'
import cart from '../img/category-1.jpg'
function Note() {
    return(
    <>
    <section>
        <div className="note">
        
           <div className="note-text">
           <h2>Surface deals</h2>
            <p>Shop for all your quality items and get some percentage off</p>
            <a href='/' className='btn'>shop now</a>
           </div>

           <div className='note-img'>
          <img src={exclusive} alt='img'></img>
          </div>
        </div> 
        </section>
        <section className='first-grid-container'>
        <div className='grid-content1'>
        <img  className='grid-img' src={buy_two} alt='buy one'></img>
        <h3>new shoes</h3>
        <p>n the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire</p>
        <a href="/#">learn more</a>
        

        </div>
        <div className='grid-content3'>
        <img className='grid-img' src={buy_three} alt='buy one'></img>
        <h3>new joggers</h3>
        <p>n the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire</p>
        <a href="/#">learn more</a>
        

        </div>
        <div className='grid-content4'>
        <img className='grid-img' src={cart} alt='buy one'></img>
        <h3>new pant</h3>
        <p>n the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire</p>
        <a href="/#">learn more</a>
        

        </div>
        <div className='grid-content1'>
        <img className='grid-img' src={buy_one} alt='buy one'></img>
        <h3>new shirt</h3>
        <p>n the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire</p>
        <a href="/#">learn more</a>
        

        </div>


        </section>
        <section className='ocean'>
            <div className='ocean-content'>
            <h3>The standard Lorem Ipsum passage</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio</p>
            <a href='/#'>lean more</a>
            </div>
        </section>

        </>
    )
}
export default Note;