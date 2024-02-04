import { useLocalSearchParams, Link } from "expo-router";

import { Text, View, Image } from "react-native";
import Animated from "react-native-reanimated";

export default function Page() {
  const { post } = useLocalSearchParams();

  return (
    <View>
      <Animated.Image
        sharedTransitionTag={`image${post}`}
        source={{
          uri: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        }}
        className="w-full h-40"
      />
      <Link href="/">
        <Text>Back</Text>
      </Link>
      <Text>
        {post} {`image${post}`}
      </Text>
    </View>
  );
}
