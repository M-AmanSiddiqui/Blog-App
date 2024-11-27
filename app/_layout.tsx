import { Text, View ,StyleSheet,Dimensions,Image } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';





const SCREEN_HEIGHT = Dimensions.get('screen').height;


export default function layout() {
  return (
  <View style={styles.container}>
 <View style={styles.header}>
 <MaterialIcons name="menu" size={24} color="#00CC00" />
 <Text style={styles.headertext}>BYKEA</Text>
 <MaterialIcons name="add-call" size={24} color="#00CC00"/>
 </View>

 {/* banner image view */}
<View style={styles.bannerImgView}>
<Image
style = {styles.bannerImg}
source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQzwjbXzb6hQYGnitjGce_YfI0YY6e6yTzg&s" }}/>

</View>


{/* Info View */}

<View style={styles.InfoView}>
<MaterialIcons name="message" size={24} color="#DEE3E8" />
<MaterialIcons name="attach-money" size={24} color="#DEE3E8" />
</View>


{/* ButtonContainer */}

<View style={styles.ButtomContainer}>
<View style={styles.row}>
  <Card title={'Carpool'} icon={'electric-car'} bgColor={'lightblue'} color={'blue'}/>  
  <Card title={'Carpool'} icon={'electric-car'} bgColor={'lightblue'} color={'blue'}/>  
</View>

<View style={styles.row}>
<Card title={'Carpool'} icon={'electric-car'} bgColor={'lightblue'} color={'blue'}/> 
 <Card title={'Carpool'} icon={'electric-car'} bgColor={'lightblue'} color={'blue'}/>  
</View>

<View style={styles.row}>
<Card title={'Carpool'} icon={'electric-car'} bgColor={'lightblue'} color={'blue'}/>
  <Card title={'Carpool'} icon={'electric-car'} bgColor={'lightblue'} color={'blue'}/>  
</View>

</View>

  </View>
  );
}


const Card = ({bgColor, icon , title ,color} : {bgColor:string, icon:any , title:string ,color:string}) => {
  return (
    <View style={[styles.card, {backgroundColor : bgColor}]}>
<Text style={{ textAlign: "right"}}>{title}</Text>
<MaterialIcons name={icon} size={70} color={color}/>

    </View>
  )
}


const styles = StyleSheet.create({
  container:{
flex: 1,
  },

  header:{
height: 50,
borderBlockColor: '#ccc',
borderBottomWidth: 1,
flexDirection: "row",
alignItems: "center",
justifyContent: "space-between",
paddingHorizontal: 16,

},

  headertext: {

fontWeight: "bold",
letterSpacing: 3,
fontSize: 21,
color: "#00CC00"
 },


 bannerImgView:{
height: SCREEN_HEIGHT/ 3.9,
backgroundColor: "#DEE3E8",
paddingHorizontal: 20,
paddingTop: 10,
},
bannerImg:{

  height: "86%",
  borderRadius: 12,
},
InfoView:{
  height: 45,
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  marginHorizontal: 20,
  elevation: 2,
  backgroundColor: "#fff",
  borderRadius: 12,
  marginTop: -15,
  },
ButtomContainer: {
flex: 1,
margin: 20,
gap: 15,

},
row:{
  flex: 1,
  flexDirection: "row",
  gap: 15,

},
card:{
  flex: 1,
padding: 10,
  borderRadius: 12,
  justifyContent : "space-between",
}

}) 
