import { globalStyles } from '../../styles/globalStyles';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Todo } from '../../types/todo';
import { useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AntDesign from '@expo/vector-icons/AntDesign';

type TodoCardProps = {
  item: Todo;
  onDelete: (id: string) => void;
};

const TodoCard = ({ item, onDelete }: TodoCardProps) => {
  const [isCompleted, setIsCompleted] = useState(item.isCompleted);

  const style = isCompleted ? styles.lineThrough : {};

  return (
    <View style={globalStyles.card}>
      <BouncyCheckbox
        isChecked={isCompleted}
        onPress={() => setIsCompleted((prevState) => !prevState)}
      />

      <Text style={style}>{item.description}</Text>

      <Pressable onPress={() => onDelete(item.id)}>
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
    opacity: 0.5,
  },
});

export default TodoCard;
