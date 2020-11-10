//Mendesain Component Button Login dan Register

import React from 'react'
import { StyleSheet, Text, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { btn_deafult, putih } from '../../utils/constan'

const ButtonAksi = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.btnComponent} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ButtonAksi

const styles = StyleSheet.create({

    btnComponent: {
        paddingVertical: windowHeight * 0.013,
        width: windowWidth * 0.6,
        backgroundColor: btn_deafult,
        borderRadius: 25,

    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: putih,
        textAlign: 'center',
        textTransform: 'capitalize'
    },

})
