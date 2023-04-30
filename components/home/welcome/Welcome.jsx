import {React,useReducer,useState} from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons,SIZES } from '../../../constants'


const jobTypes=['Full-Time','Part-Time','Contractor'];

const Welcome = ({searchTerm,setSearchTerm,handleClick}) => {
  const router=useRouter();
  const [activeJobType,setActiveJobtype]=useState('Full-Time');
  
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Lovish</Text> 
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
          style={styles.searchInput}
          value={searchTerm}
          onChangeText={(text)=>setSearchTerm(text) } 
          placeholder='What are you looking for?'/>
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
          source={icons.search}
          resizeMode='contain'
          style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
        data={jobTypes}
        renderItem={({item})=>{
          return(
        <TouchableOpacity 
        style={styles.tab(activeJobType,item)}
        onPress={( )=>{
          setActiveJobtype(item);
          router.push(`/search/${item}`)
        }}
        >
          <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
        </TouchableOpacity>
          );
        }}
        keyExtractor={item=>item}
        contentContainerStyle={{columnGap:SIZES.small}}
        horizontal

        />

      </View>

      
    </View>
  )
}

export default Welcome