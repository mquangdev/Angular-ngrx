import { Component, Input } from '@angular/core';
import { BackEndError } from '../../types/backend-errors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-end-error-msg',
  templateUrl: './back-end-error-msg.component.html',
  styleUrls: ['./back-end-error-msg.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class BackEndErrorMsgComponent {
  @Input() errors!: BackEndError;
}
