import React, {Component} from 'react'
import { AppRegistry, Text, View, Navigator, BackAndroid } from 'react-native'

import ListView from './/app/scenes/ListView'
import ViewDisplay from './/app/scenes/ViewDisplay'
import TextDisplay from './/app/scenes/TextDisplay'
import ImageDisplay from './/app/scenes/ImageDisplay'
import ButtonDisplay from './/app/scenes/ButtonDisplay'
import InputDisplay from './/app/scenes/InputDisplay'
import PickerDisplay from './/app/scenes/PickerDisplay'
import ToolbarDisplay from './/app/scenes/ToolbarDisplay'
import NavigatorDisplay from './/app/scenes/NavigatorDisplay'
import ViewPagerDisplay from './/app/scenes/ViewPagerDisplay'
import TouchableOpacityDisplay from './/app/scenes/TouchableOpacityDisplay'
import ToolbarIconDisplay from './/app/scenes/ToolbarIconDisplay'
import SwitchDisplay from './/app/scenes/SwitchDisplay'
import ScrollViewDisplay from './/app/scenes/ScrollViewDisplay'
import DrawerLayoutLeftDisplay from './/app/scenes/DrawerLayoutLeftDisplay'
import DrawerLayoutRightDisplay from './/app/scenes/DrawerLayoutRightDisplay'
import ListViewHorizontalDisplay from './/app/scenes/ListViewHorizontalDisplay'
import ListViewVerticalDisplay from './/app/scenes/ListViewVerticalDisplay'
import WebViewDisplay from './/app/scenes/WebViewDisplay'
import SliderDisplay from './/app/scenes/SliderDisplay'
import ModalDisplay from './/app/scenes/ModalDisplay'

class MainProject extends Component {
  render() {
    var initialRoute = { name:'listview' }
    return (
      <Navigator
        initialRoute={initialRoute}
        renderScene={RouteMapper}
        ref={(nav) => { this.navigator = nav }}
        />
    );
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackPress.bind(this));
  }

  onBackPress() {
    if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
        this.navigator.pop();
        return true;
    }
    return false;
  }
}

//set navigator here
var RouteMapper = function(route, navigator) {
  switch (route.name) {
    case 'listview':
      return (
        <ListView
          navigator={navigator}
          />
      );
    break;
    case 'view':
      return (
        <ViewDisplay
          navigator={navigator}
          />
      );
    break;
    case 'text':
      return (
        <TextDisplay
          navigator={navigator}
          />
      );
    break;
    case 'image':
      return (
        <ImageDisplay
          navigator={navigator}
          />
      );
    break;
    case 'button':
      return (
        <ButtonDisplay
          navigator={navigator}
          />
      );
    break;
    case 'input':
      return (
        <InputDisplay
          navigator={navigator}
          />
      );
    break;
    case 'opacity':
      return (
        <TouchableOpacityDisplay
          navigator={navigator}
          />
      );
    break;
    case 'lvhorizontal':
      return (
        <ListViewHorizontalDisplay
          navigator={navigator}
          />
      );
    break;
    case 'lvvertical':
      return (
        <ListViewVerticalDisplay
          navigator={navigator}
          />
      );
    break;
    case 'slider':
      return (
        <SliderDisplay
          navigator={navigator}
          />
      );
    break;
	case 'modal':
      return (
        <ModalDisplay
          navigator={navigator}
          />
      );
    break;
    case 'sv':
      return (
        <ScrollViewDisplay
          navigator={navigator}
          />
      );
    break;
    case 'switch':
      return (
        <SwitchDisplay
          navigator={navigator}
          />
      );
    break;
    case 'picker':
      return (
        <PickerDisplay
          navigator={navigator}
          />
      );
    break;
    case 'dlleft':
      return (
        <DrawerLayoutLeftDisplay
          navigator={navigator}
          />
      );
    break;
    case 'dlright':
      return (
        <DrawerLayoutRightDisplay
          navigator={navigator}
          />
      );
    break;
    case 'vp':
      return (
        <ViewPagerDisplay
          navigator={navigator}
          />
      );
    break;
    case 'toolbar':
      return (
        <ToolbarDisplay
          navigator={navigator}
          />
      );
    break;
    case 'toolbaricon':
      return (
        <ToolbarIconDisplay
          navigator={navigator}
          />
      );
    break;
    case 'wv':
      return (
        <WebViewDisplay
          navigator={navigator}
          />
      );
    break;
    case 'nav':
      return (
        <NavigatorDisplay
          navigator={navigator}
          />
      );
    break;
    default:
      break;
  }
}

AppRegistry.registerComponent('BixboxProject', () => MainProject)
