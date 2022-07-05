import { AppNavigation } from './src/navigation/AppNavigation';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import store from './src/store/store';
import { useEffect } from 'react';
import { setDB } from './src/db';


export default function App() {
  const [loaded] = useFonts({
    'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Medium': require('./assets/fonts/OpenSans-Medium.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
  })

  useEffect(() => {
    setDB()
  }, [])

  if (!loaded) return null

  return (
    <Provider store={store}>
      <AppNavigation/>
    </Provider>
    )
}

