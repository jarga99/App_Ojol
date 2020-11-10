import React from 'react';
import { Dimensions, ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import { FooterWelcome, HeaderWelcome, LogoWelcome } from '../../assets';
import SliceButton from './SliceButton';
import { judul, putih } from '../../utils/constan';

const WelcomeAuth = ({ navigation }) => {
    const handleGoTo = (screen) => {
        navigation.navigate(screen);
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={HeaderWelcome} style={styles.header}>
                <Text style={styles.judul}>Selamat Datang Di O-JOL</Text>
                <Image source={LogoWelcome} style={styles.logo} />
                <SliceButton
                    desc="Login,
Jika sudah punya akun"
                    title="Login"
                    onPress={() => handleGoTo('Login')}
                />
                <SliceButton
                    desc="Atau Register,
Jika belum punya akun"
                    title="Register"
                    onPress={() => handleGoTo('Register')}
                />
            </ImageBackground>
            <ImageBackground source={FooterWelcome} style={styles.footer}>
            </ImageBackground>

        </View>
    )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default WelcomeAuth

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: putih,

    },
    header: {
        width: windowWidth,
        height: windowHeight * 0.25,
        alignItems: 'center',
    },
    judul: {
        marginTop: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: judul,
        fontSize: windowWidth * 0.09,
        width: windowWidth * 0.70
    },
    logo: {
        marginTop: windowHeight * 0.04,
        width: windowWidth * 0.7,
        height: windowHeight * 0.285
    },
    footer: {
        width: windowWidth,
        height: windowHeight * 0.2
    }
})
