import React from 'react'
import { StyleSheet, View } from 'react-native'
import WidgetSlider from '../../components/macro'
import Meals from '../../components/meals'

export default function App() {
  return (
    <View>
      <View style={styles.background}>
        <WidgetSlider/>
      </View>
      <View style={styles.blue}>
        <Meals></Meals>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: "#D9D9D9",
  },
  background: {
    backgroundColor: "#D9D9D9",
    borderRadius: 12,
    margin: 12,
    paddingTop: 12,
    paddingBottom: 12,
    overflow: "visible",
  },
  blue: {
    padding: 12,
    backgroundColor: "#D9D9D9",
    borderRadius: 12,
    margin: 12,
  },
  pager: {
    height: 300,
    backgroundColor: '#2c2c2e',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    overflow: 'hidden',
  },
})