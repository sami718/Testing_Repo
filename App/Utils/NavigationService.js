import { NavigationActions } from 'react-navigation';
let _navigator;

let setTopLevelNavigator = (navigatorRef) => {
  _navigator = navigatorRef
};

let navigate = (routeName, params) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      type: NavigationActions.NAVIGATE,
      routeName,
      params
    })
  );
};

let goBack = () => {
  _navigator.dispatch(
    NavigationActions.pop()
  );
};

export default NavigationService = {
  setTopLevelNavigator,
  navigate,
  goBack
};