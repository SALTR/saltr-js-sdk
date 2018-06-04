import {SLTApiCall} from "./SLTApiCall";
import {SLTAppData} from "../../SLTAppData";
import {SLTConfig} from "../../SLTConfig";

class SLTAppDataApiCall extends SLTApiCall {

    protected _appData: SLTAppData;

    constructor(appData: SLTAppData) {
        super();
        this._appData = appData;
    }

    public buildCall(): any {
        this._url = SLTConfig.SALTR_API_URL;
        let args: any = this.buildDefaultArgs();
        args.ping = this._params.ping;
        args.snapshotId = this._params.snapshotId;
        args.basicProperties = this._params.basicProperties;
        args.customProperties = this._params.customProperties;
        args.action = SLTConfig.ACTION_GET_APP_DATA;
        return args;
    }
}

export {SLTAppDataApiCall}