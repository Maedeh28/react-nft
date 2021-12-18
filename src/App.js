import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x4c1d82f6C4F56922465BA141657585ca57FCabDf')
      console.log(openSeaData);
      setPunkListData(openSeaData.data.assets)
    }
    return getMyNfts();
  }, [])

  return (
    <div className='app'>
      <Header />
      <PunkList punkListData={punkListData} />
    </div>
  )
}

export default App;
