import React, {Component} from 'react';
import styled from 'styled-components';

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {Field};


const CharMain = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`
const SelectedError = styled.span`
    color: #fff;
    text-align: center;
    font-size: 26px;
`
export default class ItemDetails extends Component {

    state = {
        item: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.itemId !== this.props.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, getData} = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId) 
            .then((item) => {
                this.setState({item})
            })
            
    }
    
    render() {
        if (!this.state.item) {
            return <SelectedError>Please select Character</SelectedError>
        }

        const {item} = this.state;
        const {name} = item;

        return (
            <CharMain>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </CharMain>
        );
    }
}