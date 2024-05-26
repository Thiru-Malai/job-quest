import React, { useState } from 'react'
import { View, Text,  SafeAreaView, ScrollView } from 'react-native'
import { Stack, useRouter } from 'expo-router'

import { COLORS, SIZES, icons, images, FONT } from './constants'
import ScreenHeaderBtn from './components/common/header/ScreenHeaderBtn'
import NearbyJobs from './components/home/nearby/NearByJobs'
import PopularJobs from './components/home/popular/PopularJobs'
import Welcome from './components/home/welcome/Welcome'

const Home = () => {

    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("")  

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={ icons.menu } dimension="60%" handlePress={onclick = () => {}}/>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={ images.profile } dimension="100%" handlePress={onclick = () => {}}/>
                    ),
                    headerTitle: "",
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, padding: SIZES.medium}}>
                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick = {() => {
                            if(searchTerm){
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />
                    <PopularJobs/>
                    <NearbyJobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;