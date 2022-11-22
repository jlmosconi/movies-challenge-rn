import {AppGenre} from '@models';
import {FC} from 'react';
import {FlatList} from 'react-native';
import {GenresItemComponent} from '../GenresItem/genres-item.component';

const genresList: AppGenre[] = [
  {
    id: 28,
    name: 'Acción',
    icon: 'sword-cross',
  },
  {
    id: 12,
    name: 'Aventura',
    icon: 'treasure-chest',
  },
  {
    id: 16,
    name: 'Animación',
    icon: 'animation',
  },
  {
    id: 35,
    name: 'Comedia',
    icon: 'emoticon-lol',
  },
  {
    id: 80,
    name: 'Crimen',
    icon: 'handcuffs',
  },
  {
    id: 99,
    name: 'Documental',
    icon: 'file-document-outline',
  },
  {
    id: 18,
    name: 'Drama',
    icon: 'drama-masks',
  },
  {
    id: 10751,
    name: 'Familia',
    icon: 'sofa',
  },
  {
    id: 14,
    name: 'Fantasía',
    icon: 'castle',
  },
  {
    id: 36,
    name: 'Historia',
    icon: 'fencing',
  },
  {
    id: 27,
    name: 'Terror',
    icon: 'halloween',
  },
  {
    id: 10402,
    name: 'Música',
    icon: 'music',
  },
  {
    id: 9648,
    name: 'Misterio',
    icon: 'magnify-scan',
  },
  {
    id: 10749,
    name: 'Romance',
    icon: 'heart-multiple-outline',
  },
  {
    id: 878,
    name: 'Ciencia ficción',
    icon: 'alien',
  },
  {
    id: 53,
    name: 'Suspenso',
    icon: 'movie-open-outline',
  },
  {
    id: 10752,
    name: 'Bélica',
    icon: 'shield-airplane',
  },
  {
    id: 37,
    name: 'Western',
    icon: 'account-cowboy-hat',
  },
];

export const GenresList: FC = () => {
  return (
    <FlatList
      data={genresList}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      renderItem={({item}) => <GenresItemComponent item={item} />}
    />
  );
};
