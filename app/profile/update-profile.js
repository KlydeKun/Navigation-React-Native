import { Text, StyleSheet, View } from 'react-native'

export default function UpdateProfile() {
    return (
        <View style={styles.container}>
            <Text>Update Profile Screen</Text>
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