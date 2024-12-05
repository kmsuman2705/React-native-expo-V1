import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }} >
        <Stack.Screen name="welcome" />
        <Stack.Screen name="campus/CampusLogin" />
        <Stack.Screen name="company/CompanyLogin" />
        <Stack.Screen name="student/StudentLogin.tsx" />
        </Stack>
  
  );
};

export default RootLayout;
