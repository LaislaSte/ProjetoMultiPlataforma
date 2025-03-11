import moment from 'moment';
import db from './firebase';
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';

export async function addCurrentWeather(humidity, temperature) {
  moment.locale('pt-br');
  const currentDate = moment().format('L');
  const currentHour = moment().format('hh:mm');

  const docRef = await addDoc(collection(db, 'registers'), {
    date: currentDate,
    hour: currentHour,
    humidity: humidity,
    temperature: temperature,
  });
  console.log('Document written with ID: ', docRef.id);
}

export async function listWeather() {
  const querySnapshot = await getDocs(collection(db, 'registers'));
  const result = [];
  querySnapshot.forEach((doc) => {
    result.push(doc.data());
  });
  return result;
}

export async function searchFilter(date, hour) {
  const q = query(
    collection(db, 'registers'),
    or(where('date', '==', date), where('hour', '==', hour))
  );
  const querySnapshot = await getDocs(q);
  const result = [];
  querySnapshot.forEach((doc) => {
    result.push(doc.data());
  });
  return result;
}
