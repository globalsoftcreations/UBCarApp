import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './style';
import StyleButton from '../StyleButton/index'
import cars from '../CarList/cars'

const CarItems = (props)=> {

    
    const { name, tagline, taglineCTA, image } = props.car;

    return (

        <View style={styles.carcontainer}>
            
            <ImageBackground 
                source={image}
                style={styles.carimages}
            />
            <View style={styles.titles} >
                 <Text style={styles.title}>{name}</Text>
                 <Text style={styles.subtitle}>{tagline}{' '}</Text>
                 <Text style={styles.taglineCTA}>{taglineCTA}</Text>
            </View>
            <View style={styles.buttonview}>
                <StyleButton 
                    type="primary"
                    content={"customer order"}
                    onpress={()=>{
                        console.warn("customer order press")
                }}
                />
                <StyleButton 
                    type="secondary"
                    content={"Existing inventory"}
                    onpress={()=>{
                        console.warn("Existing inventory press")
                    }}
                />
            </View>
      </View>
    );
}

export default CarItems;