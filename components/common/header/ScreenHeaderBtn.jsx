import React from 'react'
import { View,TouchableOpacity,Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = (props) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={props.handlePress} >
      <Image 
      source={props.iconUrl} 
      resizeMode='cover'
      style={styles.btnImg(props.dimensions)}
      /> 
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn