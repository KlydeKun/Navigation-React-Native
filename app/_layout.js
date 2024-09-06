import { Stack } from "expo-router"

export default function _layout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="profile"
                options={{
                    title: "Home",
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="(tabs)"
                options={{
                    title: "My Tabs",
                    headerShown: false,
                }}
            />
        </Stack>
    )
}
