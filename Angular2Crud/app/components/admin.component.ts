import { Component } from '@angular/core';
import { AdminService } from '../Service/admin.service';
import { Admin } from '../Model/admin';


@Component({
    selector: 'admin-component',
    templateUrl: 'app/components/admincomponent.html',
    providers: [AdminService]
})
export class AdminComponent {    
    admins: Admin[];    

    constructor(private _adminService: AdminService) {        
    }
}
