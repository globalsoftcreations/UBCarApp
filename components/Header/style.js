import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    carcontainer:{
        position:'absolute',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        padding:20,
        top:50,
        zIndex: -1,
    },
    logo:{
      width:100,
      height:20,
      resizeMode:'contain'
    },
    menu:{
       width:25,
       height:25
    },
})

export default styles;