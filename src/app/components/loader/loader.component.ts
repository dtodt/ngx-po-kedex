import { Component, Input } from '@angular/core';
import {
  ISpinnerConfig,
  SPINNER_PLACEMENT,
  SPINNER_ANIMATIONS
} from '@hardpool/ngx-spinner';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent {
  @Input() isLoading = false;
  @Input() spinnerConfig: ISpinnerConfig = {
    placement: SPINNER_PLACEMENT.block_ui,
    animation: SPINNER_ANIMATIONS.horizontal_bounce,
    size: '0.5rem',
    color: '#264759',
    bgColor: 'rgba(200,200,200,0.3)'
  };
}
