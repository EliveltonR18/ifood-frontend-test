// Global
import React, { Component } from 'react';
import { format } from 'date-fns'
// Components
import List from './List';
import Filters from './Filters';
// Api
import { getPlaylists } from '../api';
// Stylesheets
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            visible: false,
            filters: {
                locale: null,
                country: 'BR',
                offset: 0,
                limit: 10,
                timestamp: format(new Date(), 'yyyy-MM-dd') + 'T' + format(new Date(), 'HH:mm:ss'),
            }
        }
    }

    onChangeFilter =  field => async (e, target) => {
        const { value } = target || e.target;
        let { filters } = this.state;
        filters[field] = value;
        const response = await getPlaylists(filters);
        const data = response.playlists.items;

        this.setState({ filters, list: data, visible: true });
    }

    async componentDidMount() {
        const { filters } = this.state;
        this.setState({ visible: false });
        const response = await getPlaylists(filters);
        const data = response.playlists.items;

        this.setState({ list: data, visible: true })
    }
 
    render() {
        const { list, visible, filters } = this.state;
        console.log(filters);
        return(
            <div className='page'>
                <Filters visible={visible} onChange={this.onChangeFilter} filters={filters} />
                <List data={list} />
            </div>
        );
    }
}

export default App;