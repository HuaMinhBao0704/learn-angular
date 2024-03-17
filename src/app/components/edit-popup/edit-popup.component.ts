import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';

import { Product } from '../../../type';

@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    FormsModule,
    RatingModule,
    ButtonModule,
  ],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.scss',
})
export class EditPopupComponent {
  @Input() display: boolean = false;
  @Input() header!: string;
  @Output() displayChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() confirm: EventEmitter<Product> = new EventEmitter<Product>();
  // @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  @Input() product: Product = {
    name: '',
    image: '',
    price: '',
    rating: 0,
  };

  onConfirm() {
    this.confirm.emit(this.product);
    this.display =  false;
    this.displayChange.emit(this.display);
  }

  onCancel() {
    this.display = false;
  }
}
