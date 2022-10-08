import { View, Text, Button } from "react-native";
import React from "react";
import { multiple, divisble } from "./counterSlice1";
import { useSelector, useDispatch } from "react-redux";

export function Counter1() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View>
      <Button
        title="Multiple More"
        color="#841584"
        onPress={() => dispatch(multiple())}
      ></Button>
      <Text>{count}</Text>
      <Button
        title="Divisible More"
        color="#841584"
        onPress={() => dispatch(divisble())}
      ></Button>
      <Text>couter1</Text>
    </View>
  );
}
