import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";

@Injectable()
export class HttpParamsInterceptor implements HttpInterceptor{
    constructor(){}
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        req=req.clone({
            setParams:{
                key:'04cfc6c7e2ed460bba3f0215e4d2b208'
            }
        });
        return next.handle(req);
    }
}