import React from "react";
import {
    StyleSheet, View, Text,
    ScrollView, ActivityIndicator, KeyboardAvoidingView
} from "react-native";

const LazyPlaceholder = () => (
    <View>
        <ActivityIndicator size='large' color='white' />
    </View>
);

export default LazyPlaceholder;