'use client'
import { Provider } from 'react-redux';
import Image from 'next/image';
import Booking from './booking/page';
import Header from './components/Header';
import store from './redux/store';

export default function Home() {
  return (
    <Provider store={store} > 
      <Header/>
      <Booking/>
    </Provider>
  )
}
