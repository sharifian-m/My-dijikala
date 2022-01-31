import { environment } from "src/environments/environment";

export class BaseUrl {
    public mainApi = '';


    constructor() {
        let host = document.location.host;
        if (host.includes('localhost')) {

            this.mainApi = environment.mainApi;
        }
    }
}
const base = new BaseUrl();

export const ServerApis = {
    getCurrentDateTime: 'https://worldtimeapi.org/api/timezone/Asia/Tehran',
    mainApi:base.mainApi,
    //base data
    userSignUp: base.mainApi + '/account/signup',
    userSignIn: base.mainApi + '/account/signin',
   userChekAuth: base.mainApi + '/account/check-auth',
    userSignOut: base.mainApi + '/account/sign-out',
    userActivateAccount: base.mainApi + '/account/activate-account/',
    userEdit: base.mainApi + '/account/edit-user'
}