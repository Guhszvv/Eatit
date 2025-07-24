import { Button } from '@react-navigation/elements'
import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default function Reff(props: { title: string; time: string }) {
    return (
        <View style={styles.background}>
            <View style={styles.dados}>
              <Text style={styles.title}>{props.time}</Text>
              <Text style={styles.title}>{props.title}</Text>
            </View>
            <Button
                style={{
                    width: 50,
                    height: 50,
                    alignSelf: 'flex-end',
                }}
                onPressIn={() => console.log(props.title)}
                color="#0084ffff"
            >
                +
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
  title: {
    color: "#4B4B4B",
  },
  background: {
    backgroundColor: "#D9D9D9",
    borderColor: "#4B4B4B",
    flexDirection: "row",
    justifyContent: 'space-between',
    height: 60,
  },
  dados: {
    margin: 5,
  }
})