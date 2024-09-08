import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';

export default function Page() {
  const [todo, setTodo] = useState<string>('todo item');

  return (
    <View style={styles.container}>
      {/* TextInnput and button */}
      <View>
        <TextInput placeholder="todo item..." />
        <Button title="add todo" onPress={() => console.log(`${todo}`)} />
      </View>
      {/* List */}
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
});
