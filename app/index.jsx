import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white"> 
       {/* View is called as div in native */}
      <Text className="text-3xl font-pblack">Hello World</Text>
      <StatusBar style="auto" />
      <Link href={"/profile"} style={{ color: "blue" }}>  {/* To add Link */}
        Go to Profile
      </Link>
    </View>
  );
}
