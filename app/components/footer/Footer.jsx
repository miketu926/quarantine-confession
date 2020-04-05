import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, Text, TextInput,
    KeyboardAvoidingView
} from 'react-native';

const Footer = () => {
    // const [message, setMessage] = useState('');

    // useEffect(() => {
    //     setMessage('QUARANTINE CONFESSION');
    // }, [message]);

    return (
        <KeyboardAvoidingView
            style={styles.keyboardAvoidingContainer}
            behavior='padding'
        >
            <View style={styles.outerWrapper}>
                <View style={styles.messageWrapper}>
                    <TextInput
                        style={styles.messageInput}
                        placeholder='Add a comment...'
                        placeholderTextColor='lightgray'
                        onChangeText={() => { return }}
                        enablesReturnKeyAutomatically={true}
                        keyboardAppearance={'dark'}
                        maxLength={500}
                        multiline={true}
                    />
                </View >
            </View>
        </KeyboardAvoidingView>
    )

};

export default Footer;

const styles = StyleSheet.create({
    keyboardAvoidingContainer: {
        backgroundColor: 'black',
        width: '100%',
    },
    outerWrapper: {
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: 'gray',
    },
    messageWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'gray',
        margin: 15,
        marginBottom: 20,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'gray',
        width: '90%',

    },
    messageInput: {
        color: 'white',
        width: '95%',
        height: '100%',
        paddingBottom: 5,
    }
})
