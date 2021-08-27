import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Config} from "./config";
import {BehaviorSubject, Observable} from "rxjs";


export interface User{
  login: string;
  email:string | null;
  avatar_url:string | null;
}

@Injectable()
export class UserService {
  constructor(public http: HttpClient, public config: Config) {

  }

  getUserInfo():Observable<User>{
    return this.config.api ? this.http.get<User>(this.config.api + "/rest/user") : this.testUser();
  }

  testUser():Observable<User>{
    let user:User = {
      login:"alex",
      email:"alex@somwhere.com",
      avatar_url:"/assets/svg/icons/profile.svg"
    }
    return new BehaviorSubject(user).asObservable();
  }

}
