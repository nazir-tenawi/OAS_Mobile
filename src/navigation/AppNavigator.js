import React, { Component } from 'react';
import { Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import { Router, Stack, Scene, Drawer, ActionConst, Tabs } from 'react-native-router-flux';

// Common
import Login from '../components/login/Login';
import AuthLoading from '../components/login/AuthLoading';
import DrawerContent from '../components/menuDrawer/DrawerContent';
import ForgotPassword from '../components/login/forgotPassword';

// Dashboard
import Dashboard from '../components/dashboard/Dashboard';


//Admin

import AdminTodayAttendance from '../components/screen/adminScreen/attendance/AdminTodayAttendance';
import LiveTracking from '../components/screen/adminScreen/liveTracking/LiveTracking';
import ReportScreen from '../components/screen/adminScreen/reports/ReportScreen';
import DetailScreen from '../components/screen/adminScreen/reports/DetailScreen';
import DailyAttendanceDetails from '../components/screen/adminScreen/attendance/DailyAttendanceDetails';
import LeaveList from '../components/screen/adminScreen/leaves/LeaveList'
import LeaveDetails from '../components/screen/adminScreen/leaves/LeaveDetails'
import DailyAttendanceLocation from '../components/screen/adminScreen/attendance/DailyAttendanceLocation';
//User

import UserAttendance from '../components/screen/userScreen/attendance/UserAttendance';
import MyPanel from '../components/screen/userScreen/myPanel/MyPanel';
import UserLeaveList from '../components/screen/userScreen/leaves/LeaveList'
import LeaveApply from '../components/screen/userScreen/leaves/LeaveApply'
import LeaveCorrection from '../components/screen/userScreen/leaves/LeaveCorrection'
import ApproveLeaveList from '../components/screen/userScreen/leaves/ApproveLeaveList' 
import ProxyPanel from '../components/screen/userScreen/proxyPanel/ProxyPanel' 
import SettingScreen from '../components/screen/adminScreen/setting/Setting'
import SettingScreenUser from '../components/screen/userScreen/setting/Setting' 




export default class AppNavigator extends Component {

  render() {
    return (

      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="auth" component={AuthLoading} hideNavBar={true} />
          <Scene key="login" component={Login} title="Login" back={false} hideNavBar={true} />
          <Scene key="ForgotPassword" component={ForgotPassword} title="ForgotPassword" hideNavBar={true} />
          <Scene key="DrawerContent" component={DrawerContent} hideNavBar={true} />

          <Drawer key="drawer" drawerImage={{ uri: null }} contentComponent={DrawerContent} type={ActionConst.RESET} hideDrawerButton={false} hideNavBar={true}>
            <Scene key="auth" component={AuthLoading} hideNavBar={true} />
            <Scene key="Dashboard" component={Dashboard} hideNavBar={true} />
            <Scene key="AdminTodayAttendance" component={AdminTodayAttendance} hideNavBar={true} />
            <Scene key="LiveTracking" component={LiveTracking} hideNavBar={true} />
            {/* <Scene key="DailyAttendanceDetails" component={DailyAttendanceDetails} hideNavBar={true} /> */}
           
            <Scene key="UserAttendance" component={UserAttendance} hideNavBar={true} />

            <Scene key="MyPanel" component={MyPanel} hideNavBar={true} />
            <Scene key="UserLeaveList" component={UserLeaveList} hideNavBar={true} />
            <Scene key="ApproveLeaveList" component={ApproveLeaveList} hideNavBar={true} />
            <Scene key="SettingScreen" component={SettingScreen} hideNavBar={true} />

           
         
         
            <Tabs
              key="TabForLeaveApprove"
              tabs={true}
              tabBarStyle={{ backgroundColor: '#FFFFFF', }}
              tabStyle={{ flexDirection: 'row', }}
              labelStyle={{ fontSize: 14, marginTop: 12, marginRight: 60, }}
              activeBackgroundColor="white"
              activeTintColor="#26065c"
              inactiveBackgroundColor=" #FFFFFF"
              inactiveTintColor="#9e9e9e"
            >
              <Scene key="UserLeaveList" title="Leave List" hideNavBar={true}
                icon={({ focused }) => (
                  focused ?
                    <Image source={require('../assets/images/list_s.png')} style={{ height: 20, width: 20, marginTop: 15, marginLeft: 25, }} resizeMode="contain"></Image>
                    :
                    <Image source={require('../assets/images/list_a.png')} style={{ height: 20, width: 20, marginTop: 15, marginLeft: 25, }} resizeMode="contain"></Image>
                )}>
                <Scene
                  key="UserLeaveList"
                  component={UserLeaveList}
                  title="Leave List"
                  initial
                  titleStyle={{ color: "red" }}
                />
              </Scene>
              <Scene key="ApproveLeaveList" title="Approve part" hideNavBar={true}

                icon={({ focused }) => (
                  focused ?
                    <Image source={require('../assets/images/com.png')} resizeMode='contain' style={{ height: 20, width: 20, marginTop: 15, marginLeft: 5, }}></Image>
                    :
                    <Image source={require('../assets/images/com_a.png')} resizeMode='contain' style={{ height: 20, width: 20, marginTop: 15, marginLeft: 5, }}></Image>
                )}>
                <Scene
                  key="ApproveLeaveList"
                  component={ApproveLeaveList}
                  title="Approve part"
                />
              </Scene>
            </Tabs>


          </Drawer>
          
          <Tabs
              key="TabAdmin"
              tabBarStyle={{ backgroundColor: '#FFFFFF', }}
              labelStyle={{ fontSize: 14, padding: 5 }}
              activeBackgroundColor="white"
              activeTintColor="#26065c"
              inactiveBackgroundColor=" #FFFFFF"
              inactiveTintColor="#9e9e9e"
            >
               <Scene key="AdminTodayAttendance" title="Home" hideNavBar={true}
                icon={({ focused }) => (
                  focused ?
                  <Entypo name="home" size={23} color="#2c82a1"
                  style={{ marginTop: 10 }} />
                :
                <Entypo name="home" size={23} color="#26065c"
                  style={{ marginTop: 10 }} />
                )}>
                <Scene
                  key="AdminTodayAttendance"
                  component={AdminTodayAttendance}
                  title="Attendance"
                  initial
                  titleStyle={{ color: "red" }}
                />
              </Scene>
              <Scene key="LiveTracking" title="Location" hideNavBar={true}

                icon={({ focused }) => (
                  focused ?
                  <Entypo name="location-pin" size={23} color="#2c82a1"
                  style={{ marginTop: 10 }} />
                :
                <Entypo name="location-pin" size={23} color="#26065c"
                  style={{ marginTop: 10 }} />
                )}>
                <Scene
                  key="Location"
                  component={LiveTracking}
                  title="Map View"
                />
              </Scene>
              <Scene key="More" title="More" hideNavBar={true}
                icon={({ focused }) => (
                  focused ?
                  <Entypo name="dots-three-horizontal" size={23} color="#2c82a1"
                  style={{ marginTop: 10 }} />
                :
                <Entypo name="dots-three-horizontal" size={23} color="#26065c"
                  style={{ marginTop: 10 }} />
                )}>
                <Scene
                  key="More"
                  component={SettingScreen}

                  title="More"
                  initial
                />
              </Scene>

            </Tabs>

            <Tabs
              key="TabUser"
              tabBarStyle={{ backgroundColor: '#FFFFFF', }}
              labelStyle={{ fontSize: 14, padding: 5 }}
              activeBackgroundColor="white"
              activeTintColor="#26065c"
              inactiveBackgroundColor=" #FFFFFF"
              inactiveTintColor="#9e9e9e"
            >
               <Scene key="MyPanel" title="My Feed" hideNavBar={true}
                icon={({ focused }) => (
                  focused ?
                  <Entypo name="check" size={23} color="#2c82a1"
                  style={{ marginTop: 10 }} />
                :
                <Entypo name="check" size={23} color="#26065c"
                  style={{ marginTop: 10 }} />
                )}>
                <Scene
                  key="MyPanel"
                  component={MyPanel}
                  title="My Feed"
                  initial
                />
              </Scene>
              <Scene key="UserLeaveList" title="Leave" hideNavBar={true}

                icon={({ focused }) => (
                  focused ?
                  <Entypo name="calendar" size={19} color="#2c82a1"
                  style={{ marginTop: 10 }} />
                :
                <Entypo name="calendar" size={19} color="#26065c"
                  style={{ marginTop: 10 }} />
                )}>
                <Scene
                  key="Leave"
                  component={UserLeaveList}
                  title="Leave"
                />
              </Scene>
      
              <Scene key="More" title="More" hideNavBar={true}
                icon={({ focused }) => (
                  focused ?
                  <Entypo name="dots-three-horizontal" size={23} color="#2c82a1"
                  style={{ marginTop: 10 }} />
                :
                <Entypo name="dots-three-horizontal" size={23} color="#26065c"
                  style={{ marginTop: 10 }} />
                )}>
                <Scene
                  key="More"
                  component={SettingScreenUser}

                  title="More"
                  initial
                />
              </Scene>

            </Tabs>



            <Tabs
              key="DetailsContainer"
              tabBarStyle={{ backgroundColor: '#FFFFFF', }}
              labelStyle={{ fontSize: 14, padding: 5 }}
              activeBackgroundColor="white"
              activeTintColor="#26065c"
              inactiveBackgroundColor=" #FFFFFF"
              inactiveTintColor="#9e9e9e"
            >
              <Scene key="DailyAttendanceDetails" title="Time Line" hideNavBar={true}

                icon={({ focused }) => (
                  focused ?
                    <Image source={require('../assets/images/goal.png')} resizeMode='contain' style={{ height: 20, width: 20, marginTop: 15 }}></Image>
                    :
                    <Image source={require('../assets/images/goal.png')} resizeMode='contain' style={{ height: 20, width: 20, marginTop: 15 }}></Image>
                )}>
                <Scene
                  key="DailyAttendanceDetails"
                  component={DailyAttendanceDetails}
                  title="Time Line"
                  initial
                />
              </Scene>

               <Scene key="DailyAttendanceLocations" title="Map View" hideNavBar={true}

                icon={({ focused }) => (
                  focused ?
                    <Image source={require('../assets/images/pin_s.png')} resizeMode='contain' style={{ height: 20, width: 20, marginTop: 15 }}></Image>
                    :
                    <Image source={require('../assets/images/pin.png')} resizeMode='contain' style={{ height: 20, width: 20, marginTop: 15 }}></Image>
                )}>
                <Scene
                  key="DailyAttendanceLocation"
                  component={DailyAttendanceLocation}
                  title="Map View"
                />
              </Scene>
              {

              }


            </Tabs>
          
         
         
{

          }



          <Scene key="ReportScreen" component={ReportScreen} hideNavBar={true} />
          <Scene key="LeaveList" component={LeaveList} hideNavBar={true} />
          <Scene key="LeaveApply" component={LeaveApply} hideNavBar={true} />
          <Scene key="LeaveCorrection" component={LeaveCorrection} hideNavBar={true} />
          <Scene key="ProxyPanel" component={ProxyPanel} hideNavBar={true} />
          <Scene key="LeaveDetails" component={LeaveDetails} hideNavBar={true} />  
          <Scene key="DailyAttendanceDetails" component={DailyAttendanceDetails} hideNavBar={true} />
          <Scene key="DetailScreen" component={DetailScreen} hideNavBar={true} /> 
        </Stack>
      </Router>
    )
  }
}

