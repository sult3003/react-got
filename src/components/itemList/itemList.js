import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const Selection = styled.ul`
    .list-group-item {
        cursor: pointer;
    }
`
export default class ItemList extends Component {

    state = {
        itemList: null,
        err: false
    }

    static defaultProps = {
        onItemSelected:() => {},
    
    }
    
    static popTypes = {
        onItemSelected: PropTypes.func
    }
    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
            .catch(() => {this.onError()});
    }

    componentDidCatch() {
        this.setState({
            itemList: null,
            err: true
        })
    }

    onError(){
        this.setState({
            itemList: null,
            error: true
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}
                    >
                    {label}
                </li>
            )
        })
    }

    render() {
        const {itemList, err} = this.state;
        
        if(err){
            return <ErrorMessage/>
        }

        if (!itemList) {
            return <Spinner />
        }
        
        const items = this.renderItems(itemList)

        return (
            <Selection>
                {items}
            </Selection>
        );
    }
}

ItemList.defaultProps = {
    onItemSelected:() => {},

}

ItemList.popTypes = {
    onItemSelected: PropTypes.func
}