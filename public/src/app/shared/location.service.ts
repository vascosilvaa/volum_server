import { Injectable } from '@angular/core';

@Injectable()
export class LocationService {

    constructor() {
    }
    public locale = {
        relativeTime: {
            future: "em %s",
            past: "%s",
            s: "Agora mesmo",
            m: "1 min",
            mm: "%d m",
            h: "1h",
            hh: "%d hrs",
            d: "1 dia",
            dd: "%d dias",
            M: "1 mês",
            MM: "%d meses",
            y: "1 ano",
            yy: "%d anos"
        }
    };

} 