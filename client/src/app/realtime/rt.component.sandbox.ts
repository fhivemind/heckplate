import { sandboxOf } from 'angular-playground';
import { RealtimeComponent } from './rt.component';

export default sandboxOf(RealtimeComponent)
  .add('Realtime Component', {
    template: `<cm-realtime></cm-realtime>`
  });
