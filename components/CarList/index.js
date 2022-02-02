import React from 'react';
import { Text, View, FlatList, Dimensions } from 'react-native';
import styles from './style';
import StyleButton from '../StyleButton/index'
import cars from './cars'
import CarItems from '../CarItems/index'

const CarList = (props)=> {
    // console.log("malli"+ props)
    return (
        <View style={styles.carcontainer}>
            <FlatList
                data={cars}
                renderItem={({item})=> <CarItems car= {item}/>}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
            />
       </View>
    );
}

export default CarList;














