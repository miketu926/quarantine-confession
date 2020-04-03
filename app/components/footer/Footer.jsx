import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Footer = () => {
    // const [message, setMessage] = useState('');

    // useEffect(() => {
    //     setMessage('QUARANTINE CONFESSION');
    // }, [message]);

    return (
        <View style={styles.container}>
            <Text style={styles.message}>Add a comment</Text>
        </View >
    )

};

export default Footer;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'gray',
        width: '100%',
        height: 60,
    },
    message: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
})
