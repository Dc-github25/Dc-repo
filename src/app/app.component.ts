import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DragableDesignationComponent } from './dragable-designation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cicdGithubTest';

  constructor(private dialog: MatDialog){

  }

  DragableDesignation(): void {
    const dialogRef = this.dialog.open(DragableDesignationComponent, {
        width: '400px',
        height: '300px',
        panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
    });
}
}
