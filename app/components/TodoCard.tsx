import { globalStyles } from '../../styles/globalStyles';
import { View, Text, StyleSheet } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Todo } from '../../types/todo';
import { useState } from 'react';

type TodoCardProps = {
  item: Todo;
};

const TodoCard = ({ item }: TodoCardProps) => {
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
