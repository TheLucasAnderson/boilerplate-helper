import { useTranslation } from 'react-i18next';
import * as S from './styles';

export const App = () => {
  const { t } = useTranslation();

  return <S.Text>{t('title')}</S.Text>;
};
