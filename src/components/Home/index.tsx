import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import apiClient from '../../services/api';
import * as S from './styles';

export const Home = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState<string>('');
  const api = apiClient;

  useEffect(() => {
    api
      .get('https://fake-json-api.mock.beeceptor.com/users')
      .then((response) => {
        const [firstUser] = response.data as Array<any>;
        setUser(firstUser);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <S.Text>{t('title')}</S.Text>
      <p>{user} - Test Endpoint</p>
    </div>
  );
};
