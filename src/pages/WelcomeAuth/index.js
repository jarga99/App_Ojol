import React from 'react';
import { Dimensions, ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import { FooterWelcome, HeaderWelcome, LogoWelcome } from '../../assets';
import SliceButton from './SliceButton';
import { judul, putih } from '../../utils/constan';
import ButtonIcon from '../../components/ButtonIcon';

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
                <View style={styles.txtFooter}>
                    <Text style={styles.labelAbout}>About US</Text>
                    <Text style={styles.labelContact}>Contact US</Text>
                </View>
                <View style={styles.about}>
                    <View style={styles.icon}>
                        <ButtonIcon title="Instagram" />
                        <ButtonIcon title="Facebook" />
                        <ButtonIcon title="Youtube" />
                    </View>
                    <View style={styles.pembatas} >
                        <ButtonIcon title="" />
                    </View>

                    <View style={styles.info} >
                        <Text>WhatsApp : 082122223333</Text>
                        <Text>Email : o_jol@ojol.id</Text>
                        <Text>Telegram : @ojol_go</Text>
                    </View>
                </View>
            </ImageBackground>

        </View>
    )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default WelcomeAuth

const styles = StyleSheet.create({
    container: {
        //styling untuk mengatur page screen
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
        height: windowHeight * 0.2,
    },
    txtFooter: {
        flexDirection: 'row',
        marginTop: windowHeight * 0.06,

    },
    labelAbout: {
        justifyContent: 'space-between',
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    labelContact: {
        justifyContent: 'space-between',
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    about: {
        alignContent: 'center',
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        borderRadius: 10
    },
    icon: {
        justifyContent: 'space-between',
        flex: 1,
        marginHorizontal: windowWidth * 0.02,
        alignItems: 'center',
        flexDirection: 'row'
    },
    pembatas: {
        justifyContent: 'space-between',
        marginTop: 10,
        alignItems: 'center',
        marginHorizontal: windowWidth * 0.01
    },
    info: {
        justifyContent: 'space-between',
        flex: 1,
        marginHorizontal: windowWidth * 0.01,
        marginVertical: windowHeight * 0.015,
        flexDirection: 'column',
        alignItems: 'center'
    }
})
