import {AppText} from '@components';
import {FC} from 'react';
import {View, StyleSheet} from 'react-native';

interface MovieDetailsSectionTitleProps {
  title: string;
}

export const MovieDetailsSectionTitle: FC<MovieDetailsSectionTitleProps> = ({title}) => {
  return (
    <View>
      <AppText style={styles.title} textType="bold">
        {title}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    marginBottom: 6,
    textTransform: 'uppercase',
    opacity: 0.5,
    letterSpacing: 0.5,
  },
});
