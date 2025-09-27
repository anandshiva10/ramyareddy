import React, { Component } from 'react'
import ServiceCard from './serviceCard'
import './services.css'
import {serviceData} from './ServiceData'
export default class Services extends Component {
  render() {
    return (
      <div className='services section' id='services'>
        <div className='section-heading services-background'>
            SERVICES
        </div>
        <p className='services-header '> We offer a range of portrait photography services that capture the essence of your special moments for a lifetime.</p>
        <div className='container'>
           {
            serviceData.map((item)=>{
                return <ServiceCard key={item.id} item={item} />
            })
            }
        </div>
      </div>
    )
  }
}
