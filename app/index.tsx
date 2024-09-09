import { TextInput, View, Button, Alert, FlatList } from 'react-native';
import { useState } from 'react';
import { Todo } from '../types/todo';
import TodoCard from './components/TodoCard';
import { globalStyles } from '../styles/globalStyles';

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

  function addTodo(todoDesc: string): void {
    if (!todoDesc) {
      Alert.alert('empty string', 'please enter a todo');
      return;
    }

    const newTodo: Todo = {
      id: Math.random().toString(),
      description: input,
      isCompleted: false,
    };
    setTodoList([newTodo, ...todoList]);
    setInput('');
  }

  function deleteTodo(id: string) {
    setTodoList(todoList.filter((todo) => todo.id != id));
  }

  return (
    <View style={globalStyles.container}>
      {/* TextInput and button */}
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 20,
          }}
        >
          <TextInput
            placeholder="add task"
            onChangeText={setInput}
            value={input}
            style={{
              paddingVertical: 5,
              paddingHorizontal: 35,
              backgroundColor: '#F5F2F1',
              borderRadius: 6,
            }}
          />
          <Button title="add" onPress={() => addTodo(input)} />
        </View>
      </View>
      {/* List */}
      <View>
        <FlatList
          data={todoList}
          renderItem={({ item }) => (
            <TodoCard item={item} deleteTodo={deleteTodo} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
