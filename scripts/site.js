import React from "react";
import ReactDOM from "react-dom";

import {WillowButton} from "./components/WillowButton";
import {WillowModal} from "./components/WillowModal";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false
        };

        this.openModal = this.openModal.bind(this);
        this.negativeClose = this.negativeClose.bind(this);
        this.positiveClose = this.positiveClose.bind(this);
    }

    openModal() {
        this.setState({
            modalVisible: true
        });
    }

    negativeClose() {
        this.setState({
            result: "Negative",
            modalVisible: false
        });
    }

    positiveClose() {
        this.setState({
            result: "Positive",
            modalVisible: false
        });
    }

    render() {
        return (
            <div>
                <div>{this.state.result}</div>
                <WillowButton modifier="positive" aria-label="My label" onClick={this.openModal}>Open modal</WillowButton>
                <WillowModal 
                    visible={this.state.modalVisible}
                    heading="My Modal!"
                    actions={[
                        <WillowButton modifier="negative" onClick={this.negativeClose}>NO!</WillowButton>,
                        <WillowButton modifier="positive" onClick={this.positiveClose}>Yes!</WillowButton>
                    ]}
                >
                    My content!
                </WillowModal>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("App"));