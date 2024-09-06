import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function ViewProfile() {
    const { id } = useLocalSearchParams();
    return (
        <View style={styles.container}>
            <Text>
                ViewProfile: {id}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
