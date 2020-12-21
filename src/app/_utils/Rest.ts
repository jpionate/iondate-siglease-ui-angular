import { HttpClient, HttpXhrBackend, HttpHeaders } from '@angular/common/http';

export class Rest {
    static post(api_path, payload) {
        console.log('sending payload', payload)
        const httpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
        //const headers = new HttpHeaders({ 'username': 'OPS$SEGUI' });
        const headers = new HttpHeaders({ 'username': 'OPS$JGNA' });
        let requestOptions = { headers: headers };
        return httpClient.post(api_path, this.mapToRequestBody(payload), requestOptions).toPromise().then(
            value => { return value },
            reason => {
                if (reason.status === 401) {
                    location.reload(true);
                }
                return null
            }
        );
    }

    static mapToRequestBody(map: Map<string, string>): object {
        const body = {}
        map.forEach((val: string, key: string) => {
            body[key] = val;
        });
        return body;
    }
}