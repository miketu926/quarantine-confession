import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";

const Homepage = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        setMessage("QUARANTINE CONFESSION");
    }, [message]);

    return (
        <View style={styles.container}>
            <Text style={styles.message}>{message}</Text>
            <ActivityIndicator size='large' color='white' />
        </View >
    )

};

export default Homepage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#4F6D7A',
        width: '100%',
    },
    message: {
        textAlign: 'center',
        marginBottom: 10,
        color: 'white',
    }
})
