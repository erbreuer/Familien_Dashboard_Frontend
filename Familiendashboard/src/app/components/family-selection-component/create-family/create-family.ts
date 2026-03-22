import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeSwitchComponent } from '../../theme-switch-component/theme-switch-component';

@Component({
  selector: 'app-create-family',
  imports: [ThemeSwitchComponent],
  templateUrl: './create-family.html',
  styleUrl: './create-family.css',
})
export class CreateFamily {

    errorMessage = '';
     private router = inject(Router);

    onCancel() {
        this.router.navigate(['/family-selection']);
    }

    tryCreateFamily() {
        //abfrage des Familiennamens und Validierung hier einfügen
        this.router.navigate(['/dashboard']);
}

}