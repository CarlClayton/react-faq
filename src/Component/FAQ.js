import React from 'react';

export default class FAQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: props.question,
            answer: props.answer,
            open: false
        }
    }

    onClickHandler = () => {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <div className={"faq " + (this.state.open ? 'open' : '')} onClick={this.onClickHandler}>
                <div className="faq-question">
                    {this.state.question}
                </div>
                <div className="faq-answer">
                    {this.state.answer}
                </div>
            </div>
        )
    }
}
