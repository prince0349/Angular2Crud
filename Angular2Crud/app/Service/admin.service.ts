import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';

@Injectable()
export class AdminService {
   ADMIN: Admin[] = [  
        { Id: 1, Name: 'Raj Kumar' },  
        { Id: 2, Name: 'Preeti' }      
        ];  
    }