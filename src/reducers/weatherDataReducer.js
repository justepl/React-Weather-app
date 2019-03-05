const initialState = {
  weatherData: null,
}

const NEW_WEATHER_DATA = "NEW_WEATHER_DATA"

export const newWeatherData = form => ({
  type: NEW_WEATHER_DATA,
  payload: form.city,
})

export default function weatherDataReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_WEATHER_DATA:
      return {
        city: action.payload,
      }

    default:
      return state
  }
}