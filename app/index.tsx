import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import { Todo } from '../types/todo';

export default function Page() {
  const [todo, setTodo] = useState<string>('todo item');
  const [todoList, setTodoList] = useState<Todo[]>([
    {
      id: '1',
      description: 'item 1',
      isCompleted: false,
    },
    {
      id: '2',
      description: 'item 2',
      isCompleted: false,
    },
    {
      id: '3',
      description: 'item 3',
      isCompleted: true,
    },
  ]);

  return (
    <View style={styles.container}>
      {/* TextInnput and button */}
      <View>
        <TextInput placeholder="todo item..." />
        <Button title="add todo" onPress={() => console.log(`${todo}`)} />
      </View>
      {/* List */}
      <ScrollView>
        {todoList.map((todo) => (
          <View>
            <Text>{todo.description}</Text>
          </View>
        ))}
      </ScrollView>
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
