import React from 'react'
import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#fffff0',
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
      },
      field: {
        marginBottom: 20,
      },
      picker: {
        width: 400
      },
      UITitle: {
        color: "#9932cc",
        fontSize: 40,
        textAlign: "center",
        marginBottom: 10
      },
      Wtitle: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom:10,
      },
      gender: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 10
      },
      result: {
        color: "#22C55E",
        fontSize: 40,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20
      },
      weight: {
        marginTop: 5,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#D6D3D1"
      }
    });