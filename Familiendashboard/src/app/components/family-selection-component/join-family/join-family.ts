import { Component, inject } from '@angular/core';
import { ThemeSwitchComponent } from '../../theme-switch-component/theme-switch-component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-family',
  imports: [ThemeSwitchComponent],
  templateUrl: './join-family.html',
  styleUrl: './join-family.css',
})
export class JoinFamily {

    errorMessage = '';
     private router = inject(Router);

    onCancel() {
        this.router.navigate(['/family-selection']);
    }

    tryJoinFamily() {
        //abfrage des Familiencodes und Validierung hier einfügen
        this.router.navigate(['/dashboard']);
}

}
