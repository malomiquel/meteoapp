import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import { isSameDay } from "date-fns";

const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

export default function CurrentWeather({ data }) {

  const [currentWeather, setCurrentWeather] = useState(null)

  useEffect(() => {
    const currentW = data.list.filter(forecast => {
      const today = new Date().getTime() + Math.abs(data.city.timezone * 1000);
      const forecastDate = new Date(forecast.dt * 1000);
      return isSameDay(today, forecastDate);
    })
    setCurrentWeather(currentW[0])
  }, [data])

  return (
    <>
      <Text>{data?.city?.name}</Text>
      <Text>Aujourd'hui</Text>

      <Image
        source={{ uri: getIcon(currentWeather?.weather[0].icon) }}
        style={{ width: 100, height: 100 }}
      />

      <Text>{Math.round(currentWeather?.main.temp)}°C</Text>
      <Text>{currentWeather?.weather[0].description}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  city: {}
})
