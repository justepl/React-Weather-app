import React, { Fragment } from 'react';
import sunSvg from '../assets/svg/sun-solid.svg'

const CardHeader = (props) => {
  const { city, temp } = props
  return (
    <Fragment>
      <img src={sunSvg} className="weather-card-img-top" alt="sun-logo" />
      <h5 className="card-title weather-card-title">{ city } - { temp }°</h5>
    </Fragment>
  )
}
export default CardHeader
