import {COLORS} from '@constants';
import {useAppDispatch} from '@hooks';
import {searchMovies} from '@store/movies/movies.actions';
import {FC, useEffect, useRef, useState} from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const SearchInput: FC = () => {
  const dispatch = useAppDispatch();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const textInput = useRef<TextInput>(null);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    if (value) {
      dispatch(searchMovies({query: value}));
    }
  }, [value, dispatch]);

  return (
    <View style={style.inputWrapper}>
      <Pressable
        onPress={() => textInput?.current?.focus()}
        style={[
          style.inputContainer,
          {
            borderColor: isFocused ? COLORS.gray : COLORS.dark,
          },
        ]}>
        <Icon name="magnify" style={style.leadingIcon} />
        <TextInput
          ref={textInput}
          style={style.input}
          defaultValue={value}
          placeholder={'Buscar...'}
          placeholderTextColor={COLORS.gray}
          onChangeText={setValue}
          autoCorrect={false}
          autoCapitalize="none"
          autoComplete="off"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
  },
  inputContainer: {
    alignItems: 'center',
    height: 45,
    backgroundColor: COLORS.darkLight,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 50,
  },
  input: {
    color: COLORS.gray2,
    flex: 1,
  },
  leadingIcon: {
    color: COLORS.medium,
    fontSize: 22,
    marginRight: 10,
  },
  trailingIcon: {
    color: COLORS.medium,
    fontSize: 22,
  },
});
