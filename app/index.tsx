import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  Alert,
  FlatList,
} from 'react-native';
import { useState } from 'react';
import { Todo } from '../types/todo';

export default function Page() {
  const [input, setInput] = useState<string>('');
  const [todoList, setTodoList] = useState<Todo[]>([
    {
      id: '0',
      description: 'item 1',
      isCompleted: false,
    },
    {
      id: '1',
      description: 'item 2',
      isCompleted: false,
    },
    {
      id: '2',
      description: 'item 3',
      isCompleted: true,
    },
  ]);

  console.log(input);

  function addTodo(todoDesc: string): void {
    if (!todoDesc) {
      Alert.alert('please enter a todo');
      return;
    }

    const newTodo: Todo = {
      id: todoList.length.toString(),
      description: input,
      isCompleted: false,
    };

    setTodoList([newTodo, ...todoList]);
  }

  return (
    <View style={styles.container}>
      {/* TextInnput and button */}
      <View>
        <TextInput
          placeholder="new todo..."
          onChangeText={setInput}
          // value={todo}
        />
        <Button title="add todo" onPress={() => addTodo(input)} />
      </View>
      {/* List */}
      <View>
        <FlatList
          data={todoList}
          renderItem={({ item }) => (
            <View>
              {/* TODO add checkbox, delete item */}
              <Text>{item.description}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
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
