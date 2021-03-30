import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Map, Modal, Panel, Input, List } from "./components";

export default function App() {
  const [puntos, setPuntos] = useState([]);
  const [puntoTemp, setPuntoTemp] = useState({});
  const [nombre, setNombre] = useState("");
  const [visibilityFilter, setVisibilityFilter] = useState("new_punto"); //new_punto / all_puntos
  const [visibility, setVisibility] = useState(false);
  const [pointsFilter, setPointsFilter] = useState(true);

  //  Cambiara de false a true
  const togglePointsFilter = () => setPointsFilter(!pointsFilter);

  const heandleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter("new_punto");
    setPuntoTemp(nativeEvent.coordinate);
    setVisibility(true);
  };

  const handleChangeText = (text) => {
    setNombre(text);
  };

  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre };
    setPuntos(puntos.concat(newPunto));
    setVisibility(false);
    setNombre("");
  };

  const handleLista = () => {
    setVisibilityFilter("all_puntos");
    setVisibility(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Map
        onLongPress={heandleLongPress}
        puntos={puntos}
        pointsFilter={pointsFilter}
      />
      <Panel
        onPressLeft={handleLista}
        color="gray"
        textLeft="Lista"
        togglePointsFilter={togglePointsFilter}
      />
      <Modal visibility={visibility}>
        {visibilityFilter === "new_punto" ? (
          //Fragment
          <>
            <View style={styles.form}>
              <Input
                title="Nombre:"
                placeholder="Nombre del punto"
                onChangeText={handleChangeText}
              />
            </View>
            <View>
              <Button
                style={styles.button}
                title="Aceptar"
                onPress={handleSubmit}
              />
            </View>
          </>
        ) : (
          <List puntos={puntos} closeModal={() => setVisibility(false)} />
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingTop: 10,
  },
  form: {
    padding: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
