import React, { Component } from 'react';

import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

 

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}/>
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter:() => dispatch({type: 'ADD'}),
        onSubtractCounter:() => dispatch({type: 'SUBTRACT'})

    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Counter);