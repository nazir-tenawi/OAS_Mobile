
export const baseUrl= "http://192.168.100.25:45455"; 
//export const baseUrl= "http://192.168.43.113:54476"; 
// export const baseUrl= "https://ems.bancoder.com"; // TODO



export const urlDev = baseUrl+"/Api/AttendanceTracking/";
export const urlogin =  baseUrl+"/Api/AttendanceTracking/";

export const urlResource = baseUrl+"/UploadFiles/";

export default {
  url: urlDev,
  loginurl:urlogin,
  drawerMenuColor:"#000000",
  appTitle:"EMS",
  mapApiKey:"put your google map api key here",
  pubnubSubscribeKey: "",
  pubnubPublishKey: ""
};