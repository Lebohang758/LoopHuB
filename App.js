
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { EvilIcons, AntDesign, Entypo } from '@expo/vector-icons';


export default function App() {
  return (
    
    <View style={styles.container}>
    <View style={styles.heading}>
        <TouchableOpacity style={styles.arrowButton}>
        <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
         <Text style={styles.headingName}>Lebohang Joseph mots'etlase
         </Text>
         <Text style={styles.numTweets}>1056 Tweets
          </Text>
          <TouchableOpacity style={styles.searchButton}>
          <EvilIcons name="search" size={24} color="#fff" />
            </TouchableOpacity>  
          <TouchableOpacity style={styles.dotsButton}>
          <Entypo name="dots-three-vertical" size={24} color="#fff" />
          </TouchableOpacity> 
    </View>
    <View style={styles.tweet}>
      <View style={styles.tweetBody}>
        <View style={styles.header}>
          <Image style={styles.dp} 
          source={require('./assets/Taylor.jpg')}/>
          <View style={styles.tweetDetails}>
          <Text style={styles.poster}>Lebohang Joseph Mots'etlase</Text>
          <Text style={styles.at}>@mots'etlase :06 April</Text>
          </View>
        </View>
      </View>
    </View>
  <View style={styles.paragragh}>
   I'll be out at the lauch of the Sasol Rewards Loyalty Program in Circle Center, 
   Centurion between 12:00-2pm today. Come hang out and get yourserlf a Loyalty Rewards card. See you there!
  
  </View>
  <Image style={styles.tweetePost} source={require('./assets/party.png')}/>
  <View style={styles.footer}>
  <TouchableOpacity style={styles.commentButton}>
  <EvilIcons name="comment" size={24} color="black" />
  </TouchableOpacity>
        <TouchableOpacity style={styles.reButton}>
        <EvilIcons name="retweet" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.heartButton}>
        <EvilIcons name="heart" size={24} color="black" />
        <Text style={styles.footerText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shaButton}>
        <EvilIcons name="share-google" size={24} color="black" />
        </TouchableOpacity>
  </View>
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commentButton:{
    position: 'absolute',
    marginTop: 5,
    paddingLeft: '20%',
  },
  reButton:{
    position: 'absolute',
    marginTop: 5,
    paddingLeft: '60%',
  },
  shaButton:{
    position: 'absolute',
    marginTop: 5,
    paddingLeft: '87%',
  },

  paragragh:{
  marginBottom:5,
  fontSize:10,
  fontStyle:'italic',

  },
  heading:{
  width:'100%',
  height:50,
  backgroundColor:'black',
  },
  arrowButton:{
  position:'absolute',
  paddingLeft:'5%',
  },
  headingName:{
  fontSize:15,
  position:'absolute',
  paddingLeft:'10%',
  marginBottom:1,
  color:'#fff',
  fontWeight:'bold',
  },
  numTweets:{
    fontSize: 15,
    position: 'absolute',
    paddingLeft: 10,
    marginBottom: 1,
    color: '#fff',
    fontWeight: 'bold',
  },
  searchButton: { 
    position:'absolute',
    paddingLeft:40,
  },
  dotsButton:{
  position: 'absolute',
  paddingLeft: 4,
  },
  tweet:{
  backgroundColor:'#fff',
  borderColor:'#E0E0E0',
  borderWidth:1,
  width:'80%',
  },
  tweetBody:{
  padding:10,
  },
  dp:{
  width:40,
  height:40,
  marginRight:10,
  borderRadius:20,
  },
header:{
flexDirection:'row',

},
poster:{
fontSize:20,
fontWeight:'bold',
marginBottom:5,
},
at:{
color: '#9E9E9E',
marginRight:5,
fontSize:13,
},
tweetePost:{
width:'100%',
height:200,

},
footer:{
height:30,
paddingLeft:10,
width:'100%',
backgroundColor:'#fff',
borderTopWidth:1,
borderTopColor:'#E0E0E0',
},
heartButton:{
flexDirection:'row',
position:'absolute',
marginTop:5,
paddingLeft:'80%',
},
footerText:{
marginLeft:5,
color:'#9E9E9E',
fontWeight:'bold',
position: 'absolute',
},
});
