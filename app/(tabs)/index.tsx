import { StyleSheet , SafeAreaView , ScrollView , Platform , RefreshControl } from 'react-native';
import * as React from 'react'
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Lottie from 'lottie-react-native';
import { createRandomUser } from '../../utils/generate-dummy-data'
import { ThreadsContext } from '../../context/thread-context'
import ThreadsItem from '../../components/Threadsitem';
// const user = createRandomUser();
// console.log( JSON.stringify(user , null , 2))
export default function TabOneScreen() {
  const animationRef = React.useRef<Lottie>(null)
  const threads = React.useContext(ThreadsContext)
  return (
    <SafeAreaView>
        <ScrollView
          contentContainerStyle={{
            // backgroundColor:'gray',
            paddingHorizontal:10,
            paddingTop:Platform.select({android:30}),
          }}
          refreshControl={
            <RefreshControl
              refreshing={false}
              tintColor={"transparent"}
              onRefresh={()=>(animationRef.current?.play())}
            />
          }
        >
          <Lottie
          ref={animationRef}
            source={require("../../lottie-animations/Animation - 1713639292339 (1).json")}
            loop={false}
            autoPlay
            style={{width:90 , height:90 , alignSelf: 'center'}}
            // onAnimationFinish={()=>{alert("finished")}}
          />
          {/* <ThreadsItem  /> */}
          {threads.map((thread)=>(
          <ThreadsItem key={thread.id} {...thread}/>
          ))}
        </ScrollView>
    </SafeAreaView>
    
    // <View style={styles.container}>
    //   <Text style={styles.title}>Tab One</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="app/(tabs)/index.tsx" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
