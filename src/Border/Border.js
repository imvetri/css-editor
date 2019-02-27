// Libraries.

import React, {Component} from "react";
import ReactDOM from "react-dom";

// Components.

class Border extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <div className="sides">
                    <fieldset id="side">
                        <label><input type="radio" value="TOP" name="side"/>TOP</label>
                        <label><input type="radio" value="LEFT" name="side"/>LEFT</label>
                        <label><input type="radio" value="ALL" name="side"/>ALL</label>
                        <label><input type="radio" value="RIGHT" name="side"/>RIGHT</label>
                        <label><input type="radio" value="BOTTOM" name="side"/>BOTTOM</label>
                    </fieldset>   
                </div>
                <ul className="properties">
                    <li>
                        <label>Style:</label>
                        <fieldset id="style">
                            <input type="radio" value="X" name="style"/>
                            <input type="radio" value="--" name="style"/>
                            <input type="radio" value="..." name="style"/>
                        </fieldset>                     
                    </li>
                    <li>
                        <label>Width:</label>
                        <input type="text" value="" placeholder="Enteår in PX" name="width"/>
                    </li>
                    <li>
                        <label>Color:</label>
                        <input type="text" value="" placeholder="Enter in hex" name="color"/>
                    </li>
                </ul>

                 <div className="corner">
                    <fieldset id="corner">
                        <label><input type="radio" value="TOP-LEFT" name="corner"/>TOP-LEFT</label>
                        <label><input type="radio" value="TOP-RIGHT" name="corner"/>TOP-RIGHT</label>
                        <label><input type="radio" value="ALL" name="corner"/>ALL</label>
                        <label><input type="radio" value="BOTTOM-LEFT" name="corner"/>BOTTOM-LEFT</label>
                        <label><input type="radio" value="BOTTOM-RIGHT" name="corner"/>BOTTOM-RIGHT</label>
                    </fieldset>   
                </div>
                <ul className="properties">
                    <li>
                        <label>Radius:</label>
                        <input type="text" value="" placeholder="Enter in PX" name="width"/>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Border;