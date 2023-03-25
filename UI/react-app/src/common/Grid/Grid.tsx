import React from 'react';

import './Grid.scss';

export interface GridHeader {
    label: string;
    tooltip?: string;
}

export interface GridRow {
    row: any,
    detail: any
}

export interface GridData {
    rows: GridRow[];
    rowKeys: string[];
}

export interface GridOptions {
    title: string;
    headers: GridHeader[];
    data: GridData;
}

interface GridProps {
    gridOptions: GridOptions;
}

interface GridState {

}

class Grid extends React.Component<GridProps, GridState> {

    constructor(props: GridProps) {
        super(props);
        this.validateGridOptions();
    }

    private get gridOptions() {
        return this.props.gridOptions;
    }

    private get rowData() {
        return this.gridOptions.data?.rows;
    }

    private get rowKeys() {
        return this.gridOptions.data?.rowKeys;
    }

    render() {
        return this.gridOptions && (
            <div className="grid">
                <h3>{ this.gridOptions.title}</h3>
                <table>
                    <thead>
                        <tr>
                        {
                            this.gridOptions.headers.map((header, index) => <th key={index}>{header.label}</th>)
                        }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.rowData?.length === 0 ? 
                                <tr><td rowSpan={this.rowData.length}>No Data</td></tr> : 
                                this.rowData.map((data, index) => <tr key={index}>{
                                    this.rowKeys?.length === 0 ?
                                        <td>No Data</td> :
                                        this.rowKeys.map((key, j) => <td key={j}>{data.row[key]}</td>)
                                }</tr>)
                        }
                    </tbody>
                </table>
            </div>
        );
    }

    private validateGridOptions() {
        if (!this.gridOptions) {
            console.error('GridOptions is not defined.');
            return;
        }

        if (!this.rowKeys) {
            console.error('No RowKeys Defined.');
            return;
        }
    }
}

export default Grid;