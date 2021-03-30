import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  Dimensions,
} from "react-native";

export default ({ puntos, closeModal }) => {
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={puntos.map((x) => x.name)}
          renderItem={({ item }) => (
            <>
              <View style={styles.item}>
                <Text>{item}</Text>
                <Button
                  style={styles.eliminar}
                  title="Eliminar"
                  color="#CA5858"
                />
              </View>
            </>
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={styles.button}>
        <Button title="Cerrar" onPress={closeModal} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  eliminar: {
    backgroundColor: "#C91B1B",
  },
  button: {
    paddingBottom: 15,
    width: 100,
    alignSelf: "center",
  },
  list: {
    height: Dimensions.get("window").height - 250,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
});
