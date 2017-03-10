import { LOGIN, LOGOUT } from './types';

export default class LoginAction {
    static logout = () => dispatch({ LOGOUT });

    static login = () => dispatch(NavigationActions.navigate({ routeName: 'Login' }));
   
}