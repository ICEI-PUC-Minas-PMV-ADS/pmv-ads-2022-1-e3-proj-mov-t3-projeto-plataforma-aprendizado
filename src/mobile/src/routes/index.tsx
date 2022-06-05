import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartPage from '../pages/Home';
import StudentLogin from '../pages/Student/Login';
import StudentRegister from '../pages/Student/Register';
import TeacherLogin from '../pages/Teacher/Login';
import TeacherRegister from '../pages/Teacher/Register';
import TeacherCompleteRegister from '../pages/Teacher/CompleteRegister';
import StudentHome from '../pages/Student/Home';
import TeachersList from '../pages/Student/TeachersList';
import TeacherProfile from '../pages/Student/TeacherProfile';
import TeacherEditProfile from '../pages/Teacher/EditProfile';

const App = createNativeStackNavigator();

const Router = () => {
    return (
        <App.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <App.Screen name="StartPage" component={StartPage} />
            <App.Screen name="StudentLogin" component={StudentLogin} />
            <App.Screen name="StudentRegister" component={StudentRegister} />
            <App.Screen name="TeacherLogin" component={TeacherLogin} />
            <App.Screen name="TeacherRegister" component={TeacherRegister} />
            <App.Screen name="TeacherCompleteRegister" component={TeacherCompleteRegister} />
            <App.Screen name="StudentHome" component={StudentHome} />
            <App.Screen name="TeachersList" component={TeachersList} />
            <App.Screen name="TeacherProfile" component={TeacherProfile} />
            <App.Screen name="TeacherEditProfile" component={TeacherEditProfile} />
        </App.Navigator>
    )
}

export default Router;