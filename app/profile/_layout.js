import { Stack } from "expo-router";

export default function AppLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: "Profile",
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="update-profile"
                options={{
                    title: "Update Profile",
                }}
            />
            <Stack.Screen
                name="[id]"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    )
}
