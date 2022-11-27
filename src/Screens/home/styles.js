import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.colors.whiteColor,
    width: '100%',
    // alignItems: 'center',
  },
  headerConatiner: {
    height: (height / 100) * 8,
    width: (width / 100) * 100,
    backgroundColor: Theme.colors.whiteColor,
    borderBottomColor: Theme.colors.grayColor,
    borderBottomWidth: 0.5,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: Theme.fontFamily.bold,
    fontSize: Theme.fontSizes.xbig,
    fontWeight: '600',
    alignSelf: 'center',
    color: Theme.colors.primaryColor,
  },
  headerImage: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(20),
    overflow: 'hidden',
  },
  scrollView: {
  
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {marginRight: moderateScale(5)},
  searchBarContainer: {
    width: '90%',
    height: moderateScale(50),
    borderRadius: moderateScale(5),
    elevation: 2,
    marginVertical: moderateScale(20),
    flexDirection: 'row',
    marginHorizontal: '5%',
    backgroundColor: Theme.colors.whiteColor,
    borderRadius: moderateScale(5),
  },
  searchBartext: {
    color: Theme.colors.grayColor,
    fontSize: Theme.fontSizes.small,
    width: '85%',
    paddingHorizontal: moderateScale(6),
  },
  searchBarIcon: {
    width: '15%',
    backgroundColor: Theme.colors.secondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  appointmentContainer: {
    width: '90%',
    height: moderateScale(50),
    borderRadius: moderateScale(5),
    elevation: 2,
    marginBottom: moderateScale(20),
    flexDirection: 'row',
    marginHorizontal: '5%',
    alignItems: 'center',
    backgroundColor: Theme.colors.whiteColor,
    borderRadius: moderateScale(5),
  },
  appointmentIcon: {
    width: '15%',
    // backgroundColor: Theme.colors.secondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  appointmentText: {
    color: Theme.colors.grayColor,
    fontSize: Theme.fontSizes.medium,
    width: '70%',
    paddingHorizontal: moderateScale(10),
  },
  cardWholeContainer: {
    width: '90%',
    height: moderateScale(150),
    marginBottom: moderateScale(20),
    flexDirection: 'row',
    marginHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: Theme.colors.redColor,
  },
  cardminiContainer: {
    height: '100%',
    width: '47.5%',
    backgroundColor: Theme.colors.whiteColor,
    borderRadius: moderateScale(12),
    elevation: 2,
    flexDirection: 'row',
  },
  cardText: {
    height: '100%',
    width: '55%',
    marginVertical: '10%',
    fontWeight: 'bold',
    paddingLeft: moderateScale(8),
  },
  cardImage: {
    width: '40%',
    height: '80%',
    marginTop: '5%',
    borderRadius: 5,
    marginRight: '5%',
  },
  cardImage2: {
    width: '100%',
    height: '100%',
    // marginTop: '5%',
    borderRadius: 5,
    marginEnd: '5%',
  },
  middleText: {
    color: Theme.colors.primaryColor,
    fontSize: Theme.fontSizes.small,
    fontWeight: 'bold',
  },
  exploreCardContainer: {
    width: '90%',
    marginHorizontal: '5%',
    height: moderateScale(280),
    // backgroundColor: Theme.colors.redColor,
  },
  exploreText: {
    color: Theme.colors.primaryColor,
    fontSize: Theme.fontSizes.xxmedium,
    fontWeight: 'bold',
  },
  smallCardContainer: {
    height: moderateScale(100),
    marginTop: moderateScale(20),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'black',
  },
  eachCardContainer: {
    height: '100%',
    width: '30%',
    elevation: 5,
    backgroundColor: Theme.colors.whiteColor,
    borderRadius: moderateScale(12),
    overflow: 'hidden',
    alignItems: 'center',
  },
  eachCardImage: {
    height: moderateScale(50),
    width: moderateScale(50),
    marginTop: moderateScale(10),
  },
  eachCardText: {
    color: Theme.colors.primaryColor,
    fontWeight: '600',
    fontSize: Theme.fontSizes.small,
    marginHorizontal: 5,
  },
  healthContainer: {
    width: '90%',
    marginHorizontal: '5%',
    height: moderateScale(350),
    marginTop: moderateScale(10),
    // backgroundColor: Theme.colors.grayColor,
  },
  healthheadingText: {
    alignItems: 'flex-start',
    height: '40%',
    width: '100%',
    paddingHorizontal: '10%',
  },
  healthDetailtext: {
    marginLeft: moderateScale(10),
    color: Theme.colors.grayColor,
    fontSize: Theme.fontSizes.small,
  },
  healthMessagesContainer: {
    marginLeft: moderateScale(10),
    width: '90%',
    height: '60%',
    // backgroundColor: 'red',
  },
  healthMessageButton: {
    marginLeft: '80%',
    width: '20%',
    height: '50%',
    // backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  healthcardImage: {},
  healthInnerContainer: {
    height: moderateScale(300),
    width: '100%',
    borderRadius: moderateScale(12),
    backgroundColor: Theme.colors.whiteColor,
    elevation: 2,
    marginTop: moderateScale(25),
    overflow: 'hidden',
  },
  healthinnermoreContainer: {
    height: '40%',
    width: '100%',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  healthinnerTextContainer: {
    // paddingTop: '%',
    height: '20%',
    width: '90%',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  healthinnerButtonContainer: {
    width: '90%',
    height: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '15%',
    paddingRight: '2.5%',
  },
  healthinnerButton: {
    height: moderateScale(40),
    width: moderateScale(120),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(5),
  },
  healthinnerButtonText: {
    color: Theme.colors.primaryColor,
    fontSize: Theme.fontSizes.small,
    fontWeight: 'bold',
  },
  consultantContainer: {
    width: '90%',
    marginVertical: moderateScale(25),
    height: moderateScale(400),
    backgroundColor: Theme.colors.primaryColor,
    marginHorizontal: '5%',
    borderRadius: moderateScale(12),
  },
  consultantHeadingTextContainer: {
    height: '25%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  consultantheadingText: {
    color: Theme.colors.whiteColor,
    fontSize: Theme.fontSizes.medium,
    fontWeight: '600',
  },
  consultantImageContainer: {
    height: '50%',
    width: '100%',
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  consultantImage: {
    height: '100%',
    width: '25%',
    marginLeft: '10%',
    marginRight: '5%',
    borderRadius: moderateScale(12),
    // resizeMode: 'contain',
  },
  consultantDetailText: {
    marginLeft: moderateScale(10),
    color: Theme.colors.whiteColor,
    fontSize: Theme.fontSizes.medium,
  },
  consultantbuttonContainer: {
    height: '19%',
    width: '90%',
    // backgroundColor: 'red',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  consultantButton: {
    height: moderateScale(35),
    width: moderateScale(120),
    borderRadius: moderateScale(5),
    backgroundColor: Theme.colors.whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  consultantButtonText: {
    color: Theme.colors.primaryColor,
    fontSize: Theme.fontSizes.medium,
  },
  labContainer: {
    height: moderateScale(300),
    width: '90%',
    marginHorizontal: '5%',
    elevation: 5,
    alignItems: 'center',
    backgroundColor: Theme.colors.whiteColor,
    borderRadius: moderateScale(12),
  },
  labHeadingContainer: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labHeadingText: {
    color: Theme.colors.primaryColor,
    fontSize: Theme.fontSizes.xmedium,
    fontWeight: '600',
  },
  labImageContainer: {
    height: '40%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labImage: {
    height: moderateScale(100),
    width: moderateScale(100),
    borderRadius: moderateScale(50),
    // elevation: 5,
  },
  labdetailText: {
    color: Theme.colors.primaryColor,
    fontSize: Theme.fontSizes.small,
  },
  labButton: {
    width: moderateScale(150),
    height: moderateScale(40),
    // backgroundColor: Theme.colors.redColor,
    marginVertical: moderateScale(25),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(6),
    borderColor: Theme.colors.primaryColor,
    borderWidth: 1,
  },
  labButtonText: {
    color: Theme.colors.primaryColor,
  },
  middleDetailText: {},
  diseaseContainer: {
    height: moderateScale(200),
    width: '100%',
    paddingHorizontal: '5%',
    paddingTop: '10%',
    // overflow: 'hidden',
  },
  diseaseIconContainer: {
    flexDirection: 'row',
    marginHorizontal: '10%',

    height: '70%',
    width: '85%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  diseaseIcon: {
    height: moderateScale(70),
    width: moderateScale(70),
    borderRadius: moderateScale(35),
    backgroundColor: Theme.colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diseaseIconText: {
    color: Theme.colors.whiteColor,
    fontSize: Theme.fontSizes.small,
    fontWeight: '600',
  },
  diseaseText: {
    color: Theme.colors.primaryColor,
    fontSize: Theme.fontSizes.xmedium,
    fontWeight: '600',
    height: '20%',
  },
  viewAllDisease: {
    // height: '20%',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  viewAllText: {
    color: Theme.colors.primaryColor,
    fontSize: Theme.fontSizes.medium,
    fontWeight: '600',
    // fontVariant: 'underlined',
  },
  bottomContainer: {
    width: '100%',
    marginTop: '10%',
    paddingHorizontal: '5%',
    height: moderateScale(250),
    backgroundColor: Theme.colors.primaryColor,
    borderRadius: moderateScale(3),
  },
  BottomHeadingText: {
    // paddingTop: '%',
    height: '30%',
    width: '90%',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  bottomDetailText: {},
  bottomIconContainer: {},
  footerContainer: {
    height: moderateScale(150),
    // backgroundColor: 'red',
    width: '100%',
    paddingHorizontal: '5%',
  },
  footerHeadingtext: {
    color: Theme.colors.primaryColor,
    fontWeight: '600',
    fontSize: Theme.fontSizes.xmedium,
    height: '40%',
    paddingTop: moderateScale(10),
  },
  footerImageContainer: {
    height: '80%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerImage: {
    height: moderateScale(50),
    width: moderateScale(50),
    resizeMode: 'contain',
  },

  footerDetailText: {},

});
export default styles;
