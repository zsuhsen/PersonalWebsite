import React from 'react';

export interface QueryParam {
    paramKey: string;
    value: string;
}

export class QueryParams {
    private _params: QueryParam[];

    constructor(params: QueryParam[]  = []) {
        this._params = params;
    }

    public getQueryString(): string {
        const queryString = this._params.map(param => param.paramKey + '=' + param.value).join('&');

        return '?' + queryString;
    }

    public addEdit(paramKey: string, value: string): void {
        const paramIndex = this.getParamIndex(paramKey);

        if (paramIndex) {
            const param = [...this._params].at(paramIndex) as QueryParam;
            param.value = value;

            this._params.splice(paramIndex, 1, param);
        } else {
            this._params.push({paramKey: paramKey, value: value});
        }
    }

    public remove(paramKey: string) {
        const paramIndex = this._params.findIndex(p => p.paramKey === paramKey);

        if (paramIndex >= 0) {
            this._params.splice(paramIndex, 1);
        }

    }

    getParamIndex(paramKey: string): number | undefined {
        const filteredParams = this._params.filter(p => p.paramKey === paramKey);

        if (filteredParams.length > 1 || filteredParams.length === 0) {
           return undefined;
        }

        return this._params.findIndex(p => p.paramKey === paramKey);
    }
}