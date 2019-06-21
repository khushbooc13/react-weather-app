import React from 'react';
import "../style.css";

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City"  />
                <input type="submit" value="Get Weather" />
            </form>
        )
    }
}

export default Form