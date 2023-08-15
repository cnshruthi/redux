import React from 'react'

const Home = ()=> {
  return (
    <div>
        <div className="cart">
            <img src="https://img.freepik.com/premium-vector/shopping-carts-shopping-malls-placing-products-payment_68708-2172.jpg?w=1480"></img>
            <span>Add to Cart</span>
        </div>
        <h1>Home Component</h1>
        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img className='img' src="https://img.freepik.com/free-photo/businessman-holding-phone-captures-stunning-cityscape-dusk-generated-by-ai_188544-13483.jpg?t=st=1692058007~exp=1692061607~hmac=f3832c13fe3fdcecd8cffeb1c591ed6c7f5088dd51a82e733d279b6a08bbef9a&w=2000"/>
            </div>
            <div className="text-wrapper item">
                <span className='iphn'>iPhone </span>
                
                <span>  Price: $1000.00</span>
            </div>
            <div className="btn-wrapper item">
               <button className="btn">Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Home;