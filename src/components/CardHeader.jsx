import React, { Fragment } from 'react';
import sunSvg from '../assets/svg/sun-solid.svg'

const CardHeader = (props) => {
  return (
    <Fragment>
      <img src={sunSvg} className="weather-card-img-top" alt="sun-logo" />
      <h5 className="card-title weather-card-title">City - 15°</h5>
    </Fragment>
  )
}
export default CardHeader
