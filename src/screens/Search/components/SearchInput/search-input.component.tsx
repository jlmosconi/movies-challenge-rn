import {COLORS} from '@constants';
import {useAppDispatch, useAppSelector} from '@hooks';
import {clearSearchMovies, searchMovies} from '@store/movies/movies.actions';
import {FC, useEffect, useRef, useState} from 'react';
import {Pressable, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const SearchInput: FC = () => {
  const dispatch = useAppDispatch();
  const {searched} = useAppSelector(state => state.movies.searchMovies);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const textInput = useRef<TextInput>(null);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    if (query) {
      dispatch(searchMovies({query}));
    } else if (!query && searched) {
      dispatch(clearSearchMovies());
    }
  }, [query, dispatch, searched]);

  const clearInput = () => {
    setQuery('');
    textInput.current?.clear();
    dispatch(clearSearchMovies());
  };

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
          defaultValue={query}
          placeholder={'Buscar...'}
          placeholderTextColor={COLORS.gray}
          onChangeText={setQuery}
          autoCorrect={false}
          autoCapitalize="none"
          autoComplete="off"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {query ? (
          <TouchableOpacity onPress={clearInput}>
            <Icon name="close-circle" style={style.trailingIcon} />
          </TouchableOpacity>
        ) : null}
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    paddingVertical: 16,
    backgroundColor: COLORS.dark,
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
    color: COLORS.gray,
    opacity: 0.6,
    fontSize: 18,
  },
});
