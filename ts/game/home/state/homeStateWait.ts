import { homeState } from "./homeState";
import { homeSceneController } from "../scene/homeSceneController";
import { button } from "../../../system/button/button";
import { commandExecution } from "../../../system/command/commandExecution";
import { apiClient } from "../../../system/apiClient/apiClient";

export class homeStateWait extends homeState {

    private _clickFlag: boolean = false;

    protected initialize(_controller: homeSceneController | null) {
        this._clickFlag = false;
    }

    protected execute(_controller: homeSceneController | null, dt: number) {
        if (this._clickFlag) {
            const test: apiClient = new apiClient();
            test.get('/users', { params: { searchText: 'John' } }, {
                users: [
                    { id: 1, name: 'John Smith' }
                ]
            }).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log('ERROR!! occurred in Backend.');
                console.log(error);
            });
        }
        this._clickFlag = false;
    }

    protected end(_controller: homeSceneController | null) {
        this._clickFlag = false;
    }

    public clickButtonEvent(_button: button) {
        this._clickFlag = true;
    }
}