import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, Button } from 'react-native';

export default function App() {

  useEffect(() => {
    
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Link href="/settings" style={styles.link}>Go to settings</Link>
      <Link href="/profile" style={styles.link}>Go to profile</Link>
      <Link href="/profile/update-profile" style={styles.link}>Go to update profile</Link>
      <Link href="/(tabs)" style={styles.link}>Go to tabs</Link>

      <Button
        title="View Profile"
        onPress={() => router.push("/profile/" + 1)}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    color: "blue",
    fontWeight: "bold",
    margin: 5
  }
});


