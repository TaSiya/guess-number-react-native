import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Card = props => {
  return (
    <View style={{...styles.card, ...props.style}}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 3,
    shadowOpacity: 0.6,
    elevation: 6,
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 20
  },
})

export default Card
