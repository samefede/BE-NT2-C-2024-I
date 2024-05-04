import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { vibrate, vibrateLong } from "./utils";

export default function App() {
  const [estaIniciado, setEstaIniciado] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [tiempo, setTiempo] = useState(25 * 60);
  const [isWorking, setIsWorking] = useState(true);

  useEffect(() => {
    isWorking ? setTiempo(25 * 60) : setTiempo(5 * 60);
    vibrate();
  }, [isWorking]);

  const iniciar = () => {
    setEstaIniciado(true);
    const timer = setInterval(() => {
      setTiempo((prevTime) => {
        if (prevTime === 0) {
          setIsWorking((prevIsWorking) => {
            return !prevIsWorking;
          });
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    setIntervalId(timer);
    return () => clearInterval(timer);
  };

  const pause = () => {
    clearInterval(intervalId);
    setEstaIniciado(false);
  };

  const reiniciar = () => {
    clearInterval(intervalId);
    setEstaIniciado(false);
    setIsWorking(true);
    setTiempo(25 * 60);
  };

  const minutes = Math.floor(tiempo / 60);
  const seconds = tiempo % 60;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isWorking ? "red" : "green" },
      ]}
    >
      <Text style={styles.font}>
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </Text>
      <Text style={styles.statusText}>
        {isWorking ? "Trabajando" : "Descansando"}
      </Text>
      <StatusBar style="auto" />
      {!estaIniciado ? (
        <Button title="Comenzar" onPress={iniciar} />
      ) : (
        <>
          <Button title="Pausar" onPress={pause} />
          <Button title="Reiniciar" onPress={reiniciar} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  font: {
    fontFamily: "Helvetica Neue",
    fontSize: 120,
  },
  button: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#1E6738",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
});
