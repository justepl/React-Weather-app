import React from 'react';
import tempSvg from '../assets/svg/thermometer-three-quarters-solid.svg'
import tintSvg from '../assets/svg/tint-solid.svg'
import locationSvg from '../assets/svg/location-arrow-solid.svg'

const CardBody = (props) => {
  return (
    <div className="card-body">
      <ul className="list-group list-group-horizontal weather-list-group">
        <li className="list-group-item col">
          <img src={tempSvg} className="card-item-icon" alt="" /> Temp.
          <div>2°</div>
          <div>22°</div>
        </li>
        <li className="list-group-item col">
          <img src={tintSvg} className="card-item-icon" alt="" /> Humidity
          <div>35%</div>
        </li>
        <li className="list-group-item col">
          <img src={locationSvg} className="card-item-icon" alt="" /> Vent
          <div>50 km/h</div>
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