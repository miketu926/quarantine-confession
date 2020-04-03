import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
    // const [message, setMessage] = useState('');

    // useEffect(() => {
    //     setMessage('QUARANTINE CONFESSION');
    // }, [message]);

    return (
        <View style={styles.container}>
            <Text style={styles.message}>QC</Text>
            <Text style={styles.message}>Messages</Text>
            <Text style={styles.message}>QC</Text>
        </View >
    )

};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'gray',
        width: '100%',
        height: 100,
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
    },
    topLeftLogo: {

    },
    message: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
    },
    topRightSettings: {

    },
})
