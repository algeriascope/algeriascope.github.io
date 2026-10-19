import { PiMoney, PiMapPin, PiEnvelope, PiScroll} from 'react-icons/pi';
import { BsPostage } from 'react-icons/bs';
import  data  from './algeria_data.json';
import { LuScroll } from "react-icons/lu";

const totalPostcodes = data.reduce((acc, w) => acc + w.postcodes.length, 0).toLocaleString('en-US');

export const services = [
  {
    id: 'wilayas',
    path: '/wilayas',
    icon: PiMapPin,
  },
  {
    id: 'rates',
    path: '/rates',
    icon: PiMoney,
  },
  {
    id: 'postcodes',
    path: '/postcodes',
    icon: PiEnvelope,
  },{
    id: 'history',
    path: '/history',
    icon: PiScroll,
  }
];
