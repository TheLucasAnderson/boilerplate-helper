import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import apiClient from '../../services/api';
import * as S from './styles';

type UserType = {
  name: string;
};

export const Home = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState<UserType>();
  const api = apiClient;

  useEffect(() => {
    api
      .get('https://fake-json-api.mock.beeceptor.com/users')
      .then((response) => {
        const [firstUser] = response.data as Array<UserType>;
        setUser(firstUser);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <S.Text>{t('title')}</S.Text>
      <p>{user?.name} - Test Endpoint</p>
    </div>
  );
};
