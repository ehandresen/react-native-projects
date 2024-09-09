import { globalStyles } from '../../styles/globalStyles';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Todo } from '../../types/todo';
import { useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AntDesign from '@expo/vector-icons/AntDesign';

type TodoCardProps = {
  item: Todo;
  deleteTodo: (id: string) => void;
};

const TodoCard = ({ item, deleteTodo }: TodoCardProps) => {
  const [isCompleted, setIsCompleted] = useState(item.isCompleted);

  const style = isCompleted ? styles.lineThrough : {};

  return (
    <View style={globalStyles.card}>
      <BouncyCheckbox
        isChecked={isCompleted}
        onPress={() => setIsCompleted((prevState) => !prevState)}
      />
      <Text style={style}>{item.description}</Text>
      {/* TODO add delete button to each todo item */}

      <Pressable onPress={() => deleteTodo(item.id)}>
        <AntDesign
          style={{ marginLeft: 10 }}
          name="delete"
          size={16}
          color="grey"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  lineThrough: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});

export default TodoCard;
