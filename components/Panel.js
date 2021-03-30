import React from "react";
import { StyleSheet, Dimensions, Button, View } from "react-native";

export default ({ onPressLeft, textLeft, togglePointsFilter, color }) => {
  return (
    <View style={styles.panel}>
      <Button onPress={onPressLeft} title={textLeft} color={color} />
      <Button title="Mostrar/Ocultar" onPress={togglePointsFilter} />
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
