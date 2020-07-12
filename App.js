import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { v4 as uuid } from "uuid";
import { MaterialIcons } from "@expo/vector-icons";
import { Button, ListItem } from "react-native-elements";

const App = () => {
  const [input, setInput] = useState("");

  const [tasks, setTasks] = useState([
    { id: uuid(), title: "Lorem ipsum" },
    { id: uuid(), title: "Bonjour" },
    { id: uuid(), title: "Ceci est un test" },
    { id: uuid(), title: "BLa bla bla" },
    { id: uuid(), title: "Faire à manger" },
    { id: uuid(), title: "Faire la vaisselle" },
    { id: uuid(), title: "Sipper de l'eau" },
    { id: uuid(), title: "Geeker" },
    { id: uuid(), title: "Faire l'exo de JB" },
    { id: uuid(), title: "Dormir" },
    { id: uuid(), title: "Repeat" },
  ]);
  function changeInput(text) {
    setInput(text);
  }

  function addTask() {
    const newTasks = [...tasks];
    newTasks.unshift({
      id: uuid(),
      title: input,
    });
    // console.log(newTasks);
    setTasks(newTasks);
  }

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  renderItem = ({ item }) => (
    <ListItem
      title={
        <View style={styles.task}>
          <Text style={styles.taskText}>{item.title}</Text>
          <TouchableOpacity
            onPress={() => {
              handleDelete(item.id);
            }}
          >
            <MaterialIcons name="delete" size={24} color="black" />
          </TouchableOpacity>
        </View>
      }
      bottomDivider
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.header}>
          <TextInput
            placeholder="Add new goal"
            value={input.title}
            onChangeText={(text) => changeInput(text)}
            style={styles.textInput}
          />
          <Button title="Add" type="clear" onPress={addTask} />
        </View>

        <View>
          <FlatList
            style={styles.list}
            data={tasks}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 90,
  },
  taskText: {
    // margin: 20,
    padding: 20,
    width: "80%",
    alignSelf: "center",
    textAlign: "center",
  },
  task: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    marginBottom: 15,
    backgroundColor: "white",
    padding: 10,
  },
  main: {
    backgroundColor: "lightblue",
    width: "75%",
    borderWidth: 1,
  },
  list: {
    display: "flex",
  },
});

export default App;