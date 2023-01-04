import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { MagnifyingGlass } from "react-loader-spinner";

export default function Current(props) {
    if (props.input === null) {
      return (
        <div>
          <p> Waiting for your city </p>
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      );
    } else {
      return (
        <div className="weather-now mt-4">
                <div className="row">
                    <div className="col-4">
                        <p>{props.input.City}</p>
                        
                        <p className="text-muted">
                        <span className="day">{new Date().toLocaleString('en-GB', {day: 'numeric',
                        month: 'short',}) + ""}</span> ,<span className="time">
                        {new Date().toLocaleString('en-US', {hour: 'numeric',minute: 'numeric',hour12: true,})}</span>
                        </p>
                    </div>
                    <div className="col-4">
                    
                        <span>Temperature: {props.input.currentTemp}°C</span>
                       
                        {/* <li>
            {" "}
            <img src={props.input.iconDesc} />
          </li> */}
                    
                    </div>
                    <div className="col-4 pt-3 text-center">
                    
                        <p>WindSpeed : {props.input.windSpeed}km/h</p>
                        <p>Humidity : {props.input.humidity}%</p>
                    </div>


                </div>
            
        </div>
        
      );
    }
  }