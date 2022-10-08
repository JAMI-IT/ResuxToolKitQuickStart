import React from "react";
import { View, Text, Button, TextInput, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { update, user } from "./counterSlice";
import { useState } from "react";

export function Counter() {
  const count3 = useSelector((state) => state.counter.names);
  const udata = useSelector((state) => state.counter.userData);

  const [name, setname] = useState("");
  const [emails, setemails] = useState("");

  const dispatch = useDispatch();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginHorizontal: 10,
        justifyContent: "space-around",
        paddingVertical: 5,
      }}
    >
      <View>
        <View>
          <TextInput
            style={{ backgroundColor: "white", borderWidth: 1, padding: 5 }}
            value={name}
            onChangeText={setname}
          />

          <TextInput
            style={{ backgroundColor: "white", borderWidth: 1, padding: 5 }}
            value={emails}
            onChangeText={setemails}
          />
          <Button
            title="email"
            color="#841584"
            onPress={() => dispatch(user({ name, emails }))}
          ></Button>
          <Text>E-Mail :{udata.emails}</Text>
          <Text>Name :{udata.name}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
