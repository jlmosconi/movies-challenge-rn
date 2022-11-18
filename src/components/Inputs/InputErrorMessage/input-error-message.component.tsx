import {AppText} from '@components';
import {COLORS, GENERIC_ERRORS} from '@constants';
import {GenericErrors, InputValidator} from '@models';
import {FC} from 'react';
import {FieldError} from 'react-hook-form';
import {StyleSheet} from 'react-native';

interface ErrorMessage {
  tipo: InputValidator;
  mensaje: string;
}
interface InputErrorMessageProps {
  errors: FieldError | undefined;
  errorsMessages?: ErrorMessage[];
}

export const InputErrorMessage: FC<InputErrorMessageProps> = ({errors, errorsMessages = GENERIC_ERRORS}) => {
  const renderMessage = (): string | undefined => {
    const errorType = errors?.type;

    switch (errorType) {
      case GenericErrors.MIN:
        const num = errors?.message?.replace(/\D/g, '') || '';
        return errorsMessages.find((x: ErrorMessage) => x.tipo === GenericErrors.MIN)?.mensaje.replace('{min}', num);
    }

    return errorsMessages.find((x: ErrorMessage) => x.tipo === errorType)?.mensaje || errors?.message;
  };

  return <>{errors?.type ? <AppText style={styles.containerStyle}>{renderMessage()}</AppText> : null}</>;
};

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    marginBottom: 8,
    color: COLORS.danger,
  },
});
