import React from 'react'
import LargeCards from './LargeCards'
import TinyCards from './TinyCards'


class Cards extends React.Component {

    render() {
        return (
            <div className="row content mt-3">
                <LargeCards></LargeCards>
                <TinyCards></TinyCards>
                <TinyCards></TinyCards>
                <LargeCards></LargeCards>
                <LargeCards></LargeCards>
                <TinyCards></TinyCards>
                <TinyCards></TinyCards>
                <TinyCards></TinyCards>
                <TinyCards></TinyCards>
                <TinyCards></TinyCards>
                <TinyCards></TinyCards>

            </div>
        );
    }
}

export default Cards