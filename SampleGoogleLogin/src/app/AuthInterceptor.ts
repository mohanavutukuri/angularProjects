import { HttpRequest,HttpInterceptor,HttpHandler,HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const id=localStorage.getItem("token");
        
        if(id){
            const clone=req.clone({
                headers:req.headers.set("Authorization","Bearer "+id)
            })
            return next.handle(clone);
        }else{
            return next.handle(req);
        }
    }
}