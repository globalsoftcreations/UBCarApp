import React from 'react';
import { Text, View, ImageBackground, Pressable } from 'react-native';
import styles from './style';

const StyleButton = (props)=> {

//    const type = props.type;
//    const content = props.content;
//    const onpress = props.onpress;
   const{type, content, onpress}= props;

   const backgroundcolor = type === "primary" ? "black": "white";
   const fontcolor = type === "primary" ? "white": "black";
    return (
        <View style={styles.container}>
           <Pressable
              style={[styles.button, {backgroundColor:backgroundcolor}]}
              onPress={()=>onpress()}
           >
           <Text style={[styles.text, {color:fontcolor}]}>{content}</Text>
           </Pressable>
       </View>
    );
}

export default StyleButton;