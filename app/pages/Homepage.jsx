import React, { useState, useEffect } from "react";
import {
    StyleSheet, View, Text, StatusBar,
    ScrollView, ActivityIndicator, KeyboardAvoidingView
} from "react-native";
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import LatestTab from './LatestTab';
import AllTimeBestTab from './AllTimeBestTab';
import LazyPlaceholder from '../components/LazyPlaceholder/LazyPlaceholder';
// import MessageItem

const Homepage = () => {
    const [message, setMessage] = useState('');
    const [index, setIndex] = useState(0);
    const [routes, setRoutes] = useState([
        { key: 'first', title: 'FIRST' },
        { key: 'second', title: 'SECOND' },
    ]);

    useEffect(() => {
        setMessage("QUARANTINE CONFESSION");
    }, [message]);

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'black', width: '100%', borderWidth: 1, borderColor: 'white' }}>
            <TabView
                style={{ marginTop: StatusBar.currentHeight }}
                navigationState={{ index, routes }}
                renderScene={SceneMap({
                    first: LatestTab,
                    second: AllTimeBestTab,
                })}
                renderLazyPlaceholder={<LazyPlaceholder />}
                onIndexChange={(index) => setIndex(index)}
                initialLayout={{ width: Dimensions.get('window').width }}
                lazy
            />
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
