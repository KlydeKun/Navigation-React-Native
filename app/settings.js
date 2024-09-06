import { router } from 'expo-router';
import { Text, StyleSheet, View, Button } from 'react-native'

export default function SettingScreen() {
    return (
        <View style={styles.container}>
            <Text style={{ padding: 10 }}>Setting Screen</Text>
            <Button
                title="Back to home"
                onPress={() => router.back()} />
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