import { Text, View, SafeAreaView, ScrollView, Image } from "react-native";

const items = [
  {
    heading: "Heading 1",
    description: "description 1",
  },
  {
    heading: "Heading 2",
    description: "description 2",
  },
  {
    heading: "Heading 3",
    description: "description 3",
  },
];

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="py-6 px-2 h-full">
        {items.map((item) => (
          <View
            key={item.heading}
            className="
          w-full 
          bg-white 
          rounded-xl 
          shadow-black 
          shadow-2xl
          flex
          flex-col
          min-h-0
          overflow-hidden
          mb-4
        "
          >
            <Image
              source={{
                uri: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
              }}
              className="w-full h-40"
            />
            <View className="px-4 py-8 min-h-0">
              <Text className="font-bold">{item.heading}</Text>
              <Text className="">{item.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
