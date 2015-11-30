/// <reference path="typings/node/node.d.ts" />
import events = require('events');
export declare module nodenmap {
    interface host {
        hostname: string;
        ip: string;
        mac: any;
        openPorts: Array<port>;
        osNmap: string;
    }
    interface port {
        port: number;
        service: string;
    }
    var nmapLocation: string;
    class NmapScan extends events.EventEmitter {
        command: string[];
        private nmapoutputXML;
        range: string[];
        arguments: string[];
        rawData: string;
        rawJSON: any;
        child: any;
        error: string;
        scanResults: host[];
        constructor(range: any, inputArguments?: any);
        private commandConstructor(range, additionalArguments?);
        private initializeChildProcess();
        startScan(): void;
        scanComplete(results: host[]): void;
        private rawDataHandler(data);
        private convertRawJsonToScanResults(xmlInput, onFailure);
    }
    class quickScan extends NmapScan {
        constructor(range: any);
    }
    class osAndPortScan extends NmapScan {
        constructor(range: any);
    }
    class autoDiscover extends NmapScan {
        constructor();
    }
}
