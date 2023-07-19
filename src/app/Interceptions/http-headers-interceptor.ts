import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor(){}
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        req=req.clone({
            setHeaders:{
                'x-rapidapi-key':'c1f8a9799fmshc4af56bc6ec376ap1ba533jsnc485785710f0',
                'x-rapidapi-host':'rawg-video-games-database.p.rapidapi.com'
            }
        });
        return next.handle(req);
    }
}