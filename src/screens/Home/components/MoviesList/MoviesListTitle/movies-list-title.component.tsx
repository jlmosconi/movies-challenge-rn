import {AppText} from '@components';
import {FC} from 'react';
import {StyleSheet} from 'react-native';

interface MoviesListTitleProps {
  title: string;
}

export const MoviesListTitle: FC<MoviesListTitleProps> = ({title}) => {
  return (
    <AppText textType="bold" style={style.text}>
      {title}
    </AppText>
  );
};

const style = StyleSheet.create({
  text: {
    opacity: 0.8,
  },
});
