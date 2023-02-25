import React from 'react'

const serviceCard = ({item}) => {
  console.log(item.text)
  return (
    <div class="card">
      <div class="card-header">
        <img src={item.img} alt="rover" />
      </div>
      <div class="card-body">
        
        <h4>
          {item.title}
        </h4>
        <p>
         {item.text}
        </p>
            
  
      </div>
    </div>
  )
}

export default serviceCard