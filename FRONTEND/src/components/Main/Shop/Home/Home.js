import React, { Component } from 'react'
import { ScrollView, Text, Navigator } from 'react-native';

import HomeView from './HomeView';
import ProductDetail from '../ProductDetail/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';

export default class Home extends Component{
  render(){
    return(
      <Navigator
        initialRoute={{ name: 'HOME_VIEW' }}
        renderScene={(route, navigator) => {
          switch(route.name){
            case 'HOME_VIEW': return <HomeView navigator={navigator} />;
            case 'LIST_PRODUCT': return <ListProduct navigator={navigator}/>;
            default: return <ProductDetail navigator={navigator}/>;
          }
        }}
      />
    )
  }
}