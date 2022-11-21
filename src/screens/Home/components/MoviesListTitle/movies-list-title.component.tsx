import {AppText} from '@components';
import {FC} from 'react';

interface MoviesListTitleProps {
  title: string;
}

export const MoviesListTitle: FC<MoviesListTitleProps> = ({title}) => {
  return <AppText textType="bold">{title}</AppText>;
};
