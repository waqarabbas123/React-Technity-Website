import React from 'react'
import './ServiceCard.css'
import { FaArrowRight } from "react-icons/fa"; //icons
function ServiceCard(props) {
  return (
    <>
        <div className="card">
            <h2>{props.heading}</h2>
            <h3>{props.price}<span>montly</span></h3>
            <p>per subscriber per year</p>
            <ul>
                <li>
                    <span><FaArrowRight /></span>
                    Static responsive website
                </li>
                <li>
                    <span><FaArrowRight /></span>
                    Static responsive website
                </li>
                <li>
                    <span><FaArrowRight /></span>
                    Static responsive website
                </li>
                <li>
                    <span><FaArrowRight /></span>
                    Static responsive website
                </li>
                <li>
                    <span><FaArrowRight /></span>
                    Static responsive website
                </li>
                <li>
                    <span><FaArrowRight /></span>
                    Static responsive website
                </li>
            </ul>
            <a href="">Purchase Now <span> <FaArrowRight /></span></a>
        </div>
    </>
  )
}

export default ServiceCard
