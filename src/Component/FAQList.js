import React from 'react';
import Axios from 'axios';
import FAQ from './FAQ';
import Search from './Search';

const crypto = require('crypto');

export default class FAQList extends React.Component {
    state = {
        faqs: []
    }

    componentDidMount() {
        Axios.get(`http://localhost:8080/faqs/`)
            .then(res => {
                this.setState({ faqs: res.data });
            });
    }

    onSearchHandler = (query) => {
        const q = encodeURIComponent(query);
        Axios.get(`http://localhost:8080/faqs/?q=${q}`)
            .then(res => {
                this.setState({ faqs: res.data });
            });
    };

    render() {
        return (
            <>
                <Search onSearch={this.onSearchHandler} />
                <div className='faqs'>{this.state.faqs.map((faq, index) =>
                    <FAQ question={faq.question} answer={faq.answer} key={crypto.createHash('md5').update(faq.question).digest('hex')} />
                )}
                </div>
            </>
        )
    }
}