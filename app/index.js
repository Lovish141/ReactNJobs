import { useState } from 'react';
import {View,SafeAreaView,ScrollView} from 'react-native';
import { Stack,useRouter } from 'expo-router';

import {COLORS,SIZES,icons,images} from '../constants';

import{
   Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome
} from '../components';

const Home=()=>{
    const router=useRouter();
    const [searchTerm, SetSearchTerm] = useState("")

    return(
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}> 
            <Stack.Screen options={{
            headerStyle:{backgroundColor:COLORS.lightWhite},
            headerShadowVisible:false,
            headerLeft:()=>(<ScreenHeaderBtn iconUrl={icons.menu} dimensions='60%'/>),
            headerRight:()=>(<ScreenHeaderBtn iconUrl={images.profile} dimensions='100%'/>),
            headerTitle:''
            }}></Stack.Screen>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex:1,
                    padding:SIZES.medium
                }}>
                    <Welcome 
                    searchTerm={searchTerm}
                    setSearchTerm={SetSearchTerm}
                    handleClick={()=>{
                        if(searchTerm){
                            router.push(`/search/${searchTerm}`)
                        }
                    }}
                    />
                    <Popularjobs/>
                    <Nearbyjobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
       
    )
}

export default Home;