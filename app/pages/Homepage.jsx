import React, { useState, useEffect } from "react";
import {
    StyleSheet, View, Text,
    ScrollView, ActivityIndicator, KeyboardAvoidingView
} from "react-native";
// import MessageItem

const Homepage = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        setMessage("QUARANTINE CONFESSION");
    }, [message]);

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'black', width: '100%', borderWidth: 1, borderColor: 'white' }}>
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
                <ActivityIndicator size='large' color='white' />
            </View >
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
            </View >
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
            </View >
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
            </View >
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
            </View >
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
            </View >
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
            </View >
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
            </View >
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
            </View >
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
            </View >
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
            </View >
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
            </View >
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
            </View >
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
            </View >
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
            </View >
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
            </View >
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
            </View >
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
            </View >
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
            </View >
        </ScrollView>
    )

};

export default Homepage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'gray',
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 5,
        marginBottom: 3,
        width: '95%',
    },
    message: {
        textAlign: 'center',
        marginBottom: 10,
        color: 'white',
    }
})
