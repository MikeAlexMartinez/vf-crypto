import React from 'react';

import Header from '../../components/Header/Header';
import Logo from '../../components/Logo/Logo';
import TopTenList from '../../components/TopTenList/TopTenList';
import CurrencyDropdown from '../../components/CurrencyDropdown/CurrencyDropdown';

const Home = () => {
  const LeftContents = () => <Logo withPadding />;
  const RightContents = () => <CurrencyDropdown />;

  return  (
    <>
      <Header LeftContents={LeftContents} RightContents={RightContents} />
      <main>
        <TopTenList />
      </main>
    </>
  )
}

export default Home;
