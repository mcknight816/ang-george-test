import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Event}  from "./app-model";

@Injectable()
export class EventService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(modelId:string = '',page:number = 0):Observable<Array<Event>> {
        let url:string = this.config.api + "/rest/model/search";
        const params = new HttpParams().set('page', String(page));
        return this.http.get<Array<Event>>(modelId !== '' ? url + "/" + modelId :url, {params});
    }

    list():Observable<Array<Event>> {
        return this.http.get<Array<Event>>(this.config.api + "/rest/event");
    }

    save(model: Event):Observable<Event>{
        return this.http.post<Event>(this.config.api + "/rest/event", model);
    }

    getById(id: string):Observable<Event> {
        return this.http.get<Event>(this.config.api + "/rest/event/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/event/" + id);
    }
}
