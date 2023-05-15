import Head from 'next/head';
import BaseLayout from '@Layout/BaseLayout';
import { HomeContainer } from '@entities/home/components';

export const HomePage = () => (
  <BaseLayout>
    <Head>
      <title>Главная</title>
    </Head>

    <HomeContainer />
  </BaseLayout>
);
