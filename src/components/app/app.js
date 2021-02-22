import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import {CharPage, BookPage, HousePage, BookItem} from '../pages';

import {BrowserRouter as Router, Route} from 'react-router-dom';


export default class App extends Component {
    state = {
        showRandomChar: true,
        error: false
    };

    componentDidCatch() {
        console.log('error');
        this.setState({error: true})
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        const char = this.state.showRandomChar ? <RandomChar interval={5000}/> : null;

        return (
            <Router> 
                <div className='app'>
                    <Container>
                        
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                                <button className="btn btn-secondary btn_my" onClick={this.toggleRandomChar}>Toggle random Character</button>
                            </Col>
                        </Row>

                        <Route path="/characters" component={CharPage} />
                        <Route path="/houses" component={HousePage} />
                        <Route path="/books" exact component={BookPage} />
                        <Route path="/books/:id" render={
                            ({match}) => {
                                const {id} = match.params;
                            return <BookItem bookId={id}/>}
                        }/>
                    </Container>
                </div>
            </Router>
        );
    }
    
};