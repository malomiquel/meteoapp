import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { format } from 'date-fns/esm';
import { fr } from 'date-fns/esm/locale';
import Weather from './Weather';


export default function Forecasts({ data }) {
  const [forecasts, setForecasts] = useState([])

  useEffect(() => {
    const forecasts = data.list.map(f => {
      const dt = new Date(f.dt * 1000);
      return ({
        date: dt,
        hour: dt.getHours(),
        temp: Math.round(f.main.temp),
        icon: f.weather[0].icon,
        name: format(dt, 'EEEE', { locale: fr })
      })
    })
    setForecasts(forecasts)
  }, [data])

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {forecasts.map(f => (
        <Weather forecast={f} />
      ))}
    </ScrollView >
  )
}

const styles = StyleSheet.create({
});