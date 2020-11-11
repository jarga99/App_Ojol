import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Facebook, Instagram, Pembatas, Youtube } from '../../assets'
import { txt_deskripsi } from '../../utils/constan'

const ButtonIcon = ({ title }) => {
    const Icon = () => {
        if (title === "Instagram") return <Instagram />

        if (title === "Facebook") return <Facebook />

        if (title === "Youtube") return <Youtube />

        if (title === "") return <Pembatas />

        return <Instagram />
    }
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.button}>
                <Icon />
            </View>
            <Text style={styles.nama}>{title}</Text>
        </TouchableOpacity>
    )
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ButtonIcon

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})
