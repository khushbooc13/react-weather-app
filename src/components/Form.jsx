import React from 'react';
import "../style.css";

class Form extends React.Component {
    render() {
        return (
            <form>
                <input type="text" name="city" placeholder="City"  />
                <input type="submit" value="Get Weather" onClick={this.props.getWeather}/>
            </form>
        )
    }
}

export default Form