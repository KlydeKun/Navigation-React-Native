import { router } from 'expo-router';
import { Text, StyleSheet, View, Button } from 'react-native'

export default function Person() {
    return (
        <View style={styles.container}>
            <Text style={{ padding: 10 }}>Person Screen</Text>
            <Button
                title="Back to home"
                onPress={() => router.back()}>
            </Button>
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