import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragable-designation',
  templateUrl: './dragable-designation.component.html',
  styleUrls: ['./dragable-designation.component.css']
})
export class DragableDesignationComponent implements OnInit {
  isMinimized = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMinimize() {
    this.isMinimized = !this.isMinimized;
  }

  toggleMaximize() {
    if (this.isMinimized) {
      this.isMinimized = false;
    } else {
      // You can customize this behavior if you want to make it expand to full-screen or some other size.
      alert("Maximized");
    }
  }

  close() {
    // Close the dialog
    alert("Dialog Closed");
  }
}