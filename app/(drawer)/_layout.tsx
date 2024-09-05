import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Drawer } from 'expo-router/drawer';
import 'react-native-reanimated';

export default function DrawerLayout() {
  

  return (
    <Drawer screenOptions={{
      headerShown: true,
      // headerRight: () => {
      //   return <TabBarIcon name='menu' color={'#000'} />
      // },
      // headerLeft: () => (
      //   <TabBarIcon name={`menu`} color={`#000`} />
      // )
        
    }}>
      <Drawer.Screen name='(tabs)' options={{
        drawerLabel: 'beFree',
        title: 'beFree'
      }} />
      <Drawer.Screen name='auth/login' options={{
        drawerLabel: 'Login',
        title: 'Login'
      }} />
      <Drawer.Screen name='auth/register' options={{
        drawerLabel: 'Register',
        title: 'Register'
      }} />
      <Drawer.Screen name='settings' options={{
        drawerLabel: 'Settings',
        title: 'Settings'
      }} />
      <Drawer.Screen name='blog' options={{
        drawerLabel: 'Blog',
        title: 'Blog'
      }} />
    </Drawer>
  );
}
