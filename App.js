import { Text, View, SafeAreaView, ScrollView, Image } from "react-native";

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="py-6 px-2 h-full">
        <View
          className="
          w-full 
          bg-gray-500 
          rounded-xl 
          shadow-black 
          shadow-2xl
          flex
          flex-col
          min-h-0
          overflow-hidden
        "
        >
          <Image
            source={{
              uri: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
            }}
            className="w-full h-40"
          />
          <View className="px-4 py-8 min-h-0">
            <Text className="font-bold">Heading</Text>
            <Text className="">description</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
