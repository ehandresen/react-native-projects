import { TextInput, View, Button, Alert, FlatList } from 'react-native';
import { useState } from 'react';
import { Todo } from '../types/todo';
import TodoCard from './components/TodoCard';
import { globalStyles } from '../styles/globalStyles';

export default function Page() {
  const [input, setInput] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
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

  function addTodo(todoDesc: string): void {
    if (!todoDesc) {
      Alert.alert('empty string', 'please enter a todo');
      return;
    }

    const newTodo: Todo = {
      id: todoList.length.toString(),
      description: input,
      isCompleted: false,
    };
    setTodoList([newTodo, ...todoList]);
    setInput('');
  }

  return (
    <View style={globalStyles.container}>
      {/* TextInput and button */}
      <View>
        <TextInput
          placeholder="new todo..."
          onChangeText={setInput}
          value={input}
        />
        <Button title="add todo" onPress={() => addTodo(input)} />
      </View>
      {/* List */}
      <View>
        <FlatList
          data={todoList}
          renderItem={({ item }) => <TodoCard item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
