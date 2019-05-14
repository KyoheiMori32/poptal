import Axios, { AxiosPromise } from 'axios';
import MockAdapter from 'axios-mock-adapter'

export class apiClient {

    public get<T>(url: string, params: any, mockData: any = undefined): AxiosPromise<T> {
        if (mockData) {
            const mock: MockAdapter = new MockAdapter(Axios, { delayResponse: 2000 });
            mock.onGet(url, params).reply(200, mockData);
        }
        return Axios.get<T>(url, params);
    }
}
