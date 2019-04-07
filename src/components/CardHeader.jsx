import React, { Fragment } from 'react';
import sunSvg from '../assets/svg/sun-solid.svg'
import convert from '../helpers/convert'

const CardHeader = (props) => {
  const { city, temp } = props
  return (
    <Fragment>
      <img src={sunSvg} className="weather-card-img-top" alt="sun-logo" />
      <h5 className="card-title weather-card-title">{ city } { convert(temp) }°</h5>
    </Fragment>
  )
}
export default CardHeader
