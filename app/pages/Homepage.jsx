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
            <ActivityIndicator size='large' color='#000000' />
        </View >
    )

};

export default Homepage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        marginBottom: 10,
    }
})
