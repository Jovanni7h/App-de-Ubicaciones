import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default ({ title, ...rest }) => {
  //  Rest operator: Recopila todos los elementos restantes en un un objeto que no han sido utilizadas por el destructuring en este caso y se las asigna al objeto "rest"

  //  Spread Operator: permite que los iterables (matrices / objetos / cadenas) se expandan en argumentos / elementos únicos (Separa todas las propiedades de un objeto y se las pasa a un componente)
  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
      <TextInput {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 40,
  },
});
