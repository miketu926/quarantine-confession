import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
const LOGO_IMAGE_PATH = '../../../ios/QuarantineConfession/Images.xcassets/SplashIcon.imageset/QClogo.png';

const Header = () => {
    // const [message, setMessage] = useState('');

    // useEffect(() => {
    //     setMessage('QUARANTINE CONFESSION');
    // }, [message]);

    return (
        <View style={styles.container}>
            <Image
                style={styles.topLeftLogo}
                source={require(LOGO_IMAGE_PATH)}
            />
            <Text style={styles.message}>Messages</Text>
            <Image
                style={styles.topLeftLogo}
                source={require(LOGO_IMAGE_PATH)}
            />
        </View >
    )

};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        width: '100%',
        height: 110,
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
    },
    topLeftLogo: {
        resizeMode: 'contain',
        width: 45,
    },
    message: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
    },
    topRightSettings: {

    },
})
