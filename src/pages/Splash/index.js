import React, { useEffect } from 'react'
import { ImageBackground, Image, StyleSheet, View, Text, Dimensions } from 'react-native'
import { FooterSplash, HeaderSplash, LogoSplash } from '../../assets';

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('WelcomeAuth');
        }, 3000)
    }, [navigation]);

    return (
        <View style={styles.container}>
            <ImageBackground source={HeaderSplash} style={styles.header}>
                <Image source={LogoSplash} style={styles.image} />
            </ImageBackground>
            <View style={styles.konten}>
                <Text style={styles.nama} >O-JOL</Text>
                <Text style={styles.loading} >Loading. . .</Text>
            </View>
            <ImageBackground source={FooterSplash} style={styles.footer} />
        </View>
    )
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Splash

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    image: {
        marginTop: windowHeight * 0.3,
        zIndex: 10
    },
    konten: {
        marginTop: windowHeight * 0.55,
        alignItems: 'center',
        zIndex: 1

    },
    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: windowWidth * 1,
        height: windowHeight * 0.19,
        zIndex: 0,
    },
    nama: {
        fontSize: 55,
        fontWeight: 'bold'
    },
    loading: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    footer: {
        width: windowWidth,
        height: windowHeight * 0.6,
        marginTop: windowHeight * -0.4,
        zIndex: -1
    }
})
