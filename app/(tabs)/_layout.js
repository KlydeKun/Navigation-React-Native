import { Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title:"Home"
        }}/>
        <Tabs.Screen
          name="person"
          options={{
            title: "Person"
          }}
        />
    </Tabs>
  )
}
