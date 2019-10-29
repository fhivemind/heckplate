import { Component, OnInit } from '@angular/core';

import { webSocket } from "rxjs/webSocket";
import { environment } from '../../environments/environment';

const subject = webSocket(environment.websocket_api);

@Component({
    selector: 'cm-realtime',
    templateUrl: './rt.component.html'
})

export class RealtimeComponent implements OnInit {
    data: string;

    constructor() { }

    ngOnInit() {
        subject.subscribe(
            msg => this.data = msg.toString(), // Called whenever there is a message from the server.
            err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
            () => console.log('complete') // Called when connection is closed (for whatever reason).
        );
    }

}
