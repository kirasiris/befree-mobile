import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Drawer } from 'expo-router/drawer';
import 'react-native-reanimated';

export default function DrawerLayout() {

  return <Drawer screenOptions={{
    headerShown: false,
    // headerLeft: () => (
    //   <TabBarIcon name={`menu`} color={`#fff`} />
    // )
  }}>
    <Drawer.Screen name='(tabs)' options={{
      drawerLabel: 'Home',
      title: 'Home'
    }} />
    {/* <Drawer.Screen name='blog/index' options={{
      drawerLabel: 'Blog',
      title: "Blog"
    }}/> */}
  </Drawer>
}
