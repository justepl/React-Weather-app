import React from 'react';
import tempSvg from '../assets/svg/thermometer-three-quarters-solid.svg'
import tintSvg from '../assets/svg/tint-solid.svg'
import locationSvg from '../assets/svg/location-arrow-solid.svg'

const CardBody = (props) => {
  const { min, max, humidity, wind } = props
  return (
    <div className="card-body weather-card-body">
      <ul className="list-group list-group-horizontal weather-list-group">
        <li className="list-group-item col">
          <img src={tempSvg} className="card-item-icon" alt="" /> Temp.
          <div>{ min }°</div>
          <div>{ max }°</div>
        </li>
        <li className="list-group-item col">
          <img src={tintSvg} className="card-item-icon" alt="" /> Humidity
          <div>{ humidity }%</div>
        </li>
        <li className="list-group-item col">
          <img src={locationSvg} className="card-item-icon" alt="" /> Vent
          <div>{ wind } km/h</div>
        </li>
      </ul>
      <button 
        className="btn btn-warning"
        type="submit"
      >
        Supprimer l'élément
      </button>
    </div>
  )
}
export default CardBody
