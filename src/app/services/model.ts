import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";

export interface Model{
  id: string | null;
  name: string;
  description:string | null;
  createDate:any | null;
  updateDate:any | null;
  entities: Array<Entity>;
}

export interface Entity{
  name:string;
  variables: Array<Variable>;
}

export interface Variable{
  name:string;
  type:string;
  list:boolean;
  primary:boolean;
  ignore:boolean;
  notNull:boolean;
  length:number | null;
}

@Injectable()
export class ModelService {
  constructor(public http: HttpClient,public config:Config ) { }

  search(modelId:string = '',page:number = 0):Observable<Array<Model>> {
    let url:string = this.config.api + "/rest/model/search";
    const params = new HttpParams().set('page', String(page));
    return this.http.get<Array<Model>>(modelId !== '' ? url + "/" + modelId :url, {params});
  }

  save(model: Model):Observable<Model>{
    return this.http.post<Model>(this.config.api + "/rest/model", model);
  }

  getById(id: string):Observable<Model> {
    return this.http.get<Model>(this.config.api + "/rest/model/" + id);
  }

  removeById(id: string | null):Observable<any>{
    console.log("Remove id " + id);
    return this.http.delete<any>(this.config.api + "/rest/model/" + id);
  }

  import(name:string | null,json:string){
    return this.http.post<Entity[]>(this.config.api + "/rest/model/import", JSON.parse(json), {
      params:new HttpParams().set('name', name ? name : "Untitled")
    });
  }

  importYaml(yaml:string) {
    return this.http.post<Entity[]>(this.config.api + "/rest/model/import-yaml",{'yaml':yaml});
  }
}
