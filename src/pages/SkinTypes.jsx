import React from 'react'
import dark from '../assets/dark.jpg'
import acne from '../assets/acne.jpg'
import shine from '../assets/shine.jpg'
import all from '../assets/all.jpg'
import '../styles/SkinTypes.css'
export default function SkinTypes() {
  return (
    <div className='skintype'>
      <div className='title'>
        <h1>Know your skin</h1>
        <h3>Do's and Dont's</h3>
      </div>
      <div className='cards'>
      <div className='skintype-card'>
              <img src={dark}/>
              <div className='skintype-text'>
                <h1>
                  Darker skin tones
                </h1>
              </div> 
              <div className='skintype-body'>
                <p className='tips'>
                The high amount of melanin uses products containing vitamin C, and do not contain ingredients that cause skin irritation, such as alcohol.               
                </p>
              </div> 
        </div>
        <div className='skintype-card'>
              <img src={acne}/>
              <div className='skintype-text'>
                <h1>
                  Acne skin 
                </h1>   
              <div className='skintype-body'>
                <p className='tips'>
                  Acne is a common skin condition characterized by pimples, blackheads, and whiteheads due to overproduction of oil, clogged hair follicles, and bacterial growth.
                  Applying retinol products will be useful in this case.
                </p>
              </div> 
            
          </div>
        </div>
        <div className='skintype-card'>
              <img src={shine}/>
              <div className='skintype-text'>
                <h1>
                  Oily skin / Dry skin 
                </h1>
              </div> 
              <div className='skintype-body'>
              <p className='tips'>
                 To keep the skin healthy and hydrated, use a gentle cleanser, moisturize regularly with oil-free moisturizer, in which it won't clog pores for Oily skin & thick ,oil-based cream for dry skin.
               </p>
              </div> 
         
        </div>
        <div className='skintype-card'>
          
              <img src={all}/>
              <div className='skintype-text'>
                <h1>
                Simple skin care routine for all skin types                </h1>
              </div> 
            
                        
              <div className='skintype-body'>
                <h3 className='tips'>
                  Basic routine for all skin types
                  </h3>
                
                  <ul >
                  <li> Cleanser: Choose a gentle cleanser that suits your skin type.</li>
                  <li> Serum: Use serums that are packed full of beneficial skincare ingredients like vitamin C, retinol, alpha hydroxy acids, and others, to solve your skin problem.</li>
                  <li> Moisturizer: Choose a gentle Moisturizer that suits your skin type.</li>
                  <li> Sunscreen: Using sunscreen regularly can help guard against free radicals induced by UV radiation, which can cause skin damage and aging.</li>
                </ul>
               
              </div> 
           
        </div>
      </div>
    </div>
  )
}
