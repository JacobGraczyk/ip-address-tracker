import React, { useState, useEffect, useRef } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import ArrowIcon from "./images/icon-arrow.svg";
import LocationIcon from "./images/icon-location.svg";
import HeaderPattern from "./images/pattern-bg.png";

function App() {
  const [apiKey, setApiKey] = useState([]);
  const [loading, isLoading] = useState(true);
  const [ipAddress, setIp] = useState([]);
  const [city, setCity] = useState([]);
  const [region, setRegion] = useState([]);
  const [postalCode, setPostalCode] = useState([]);
  const [timezone, setTimezone] = useState([]);
  const [isp, setIsp] = useState([]);
  const [lat, setLat] = useState(42.88);
  const [lng, setLng] = useState(-78.87);

  const arrowIcon = <img src={ArrowIcon} alt="Right Arrow" />;

  const mapRef = useRef();

  const mapMarker = new L.Icon({
    iconUrl: LocationIcon,
    iconRetinaUrl: LocationIcon,
    iconSize: new L.Point(46, 55),
  });

  const divider = {
    width: "1px",
    height: "60px",
    margin: "10px 0 0 0",
    background: "lightgrey",
  };

  const loadScreenStyle = loading
    ? {
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 50%)",
        color: "white",
      }
    : { display: "none" };

  useEffect(() => {
    fetch(
      "https://geo.ipify.org/api/v1?apiKey=at_XoeODQ8fNzA8KFNhRUnmBtHDzUMs5"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIp(data.ip);
        setCity(data.location.city);
        setRegion(data.location.region);
        setPostalCode(data.location.postalCode);
        setTimezone(data.location.timezone);
        setIsp(data.isp);
        setLat(data.location.lat);
        setLng(data.location.lng);
        isLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(apiKey)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          alert("Please enter a valid IP Address or Domain");
          setIp("");
          setCity("");
          setRegion("");
          setPostalCode("");
          setTimezone("");
          setIsp("");
          setLat("");
          setLng("");
          isLoading(false);
        }
      })
      .then((data) => {
        setIp(data.ip);
        setCity(data.location.city);
        setRegion(data.location.region);
        setPostalCode(data.location.postalCode);
        setTimezone(data.location.timezone);
        setIsp(data.isp);
        setLat(data.location.lat);
        setLng(data.location.lng);
        isLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [apiKey]);

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    map.setView([lat, lng], 15);
  }, [lat, lng]);

  let stateAbbreviation = "";
  switch (region) {
    case "Alabama":
      stateAbbreviation = ", AL ";
      break;
    case "Alaska":
      stateAbbreviation = ", AK ";
      break;
    case "Arizona":
      stateAbbreviation = ", AZ ";
      break;
    case "Arkansas":
      stateAbbreviation = ", AR ";
      break;
    case "California":
      stateAbbreviation = ", CA ";
      break;
    case "Colorado":
      stateAbbreviation = ", CO ";
      break;
    case "Connecticut":
      stateAbbreviation = ", CT ";
      break;
    case "Delaware":
      stateAbbreviation = ", DE ";
      break;
    case "Florida":
      stateAbbreviation = ", FL ";
      break;
    case "Georgia":
      stateAbbreviation = ", GA ";
      break;
    case "Hawaii":
      stateAbbreviation = ", HI ";
      break;
    case "Idaho":
      stateAbbreviation = ", ID ";
      break;
    case "Illinois":
      stateAbbreviation = ", IL ";
      break;
    case "":
      stateAbbreviation = ",  ";
      break;
    case "Indiana":
      stateAbbreviation = ", IN ";
      break;
    case "Iowa":
      stateAbbreviation = ", IA ";
      break;
    case "Kansas":
      stateAbbreviation = ", KS ";
      break;
    case "Kentucky":
      stateAbbreviation = ", KY ";
      break;
    case "Louisiana":
      stateAbbreviation = ", LA ";
      break;
    case "Maine":
      stateAbbreviation = ", ME ";
      break;
    case "Maryland":
      stateAbbreviation = ", MD ";
      break;
    case "Massachusetts":
      stateAbbreviation = ", MA ";
      break;
    case "Michigan":
      stateAbbreviation = ", MI ";
      break;
    case "Minnesota":
      stateAbbreviation = ", MN ";
      break;
    case "Mississippi":
      stateAbbreviation = ", MS ";
      break;
    case "Missouri":
      stateAbbreviation = ", MO ";
      break;
    case "Montana":
      stateAbbreviation = ", MT ";
      break;
    case "Nebraska":
      stateAbbreviation = ", NE ";
      break;
    case "Nevada":
      stateAbbreviation = ", NV ";
      break;
    case "New Hampshire":
      stateAbbreviation = ", NH ";
      break;
    case "New Jersey":
      stateAbbreviation = ", NJ ";
      break;
    case "New Mexico":
      stateAbbreviation = ", NM ";
      break;
    case "New York":
      stateAbbreviation = ", NY ";
      break;
    case "North Carolina":
      stateAbbreviation = ", NC ";
      break;
    case "North Dakota":
      stateAbbreviation = ", ND ";
      break;
    case "Ohio":
      stateAbbreviation = ", OH ";
      break;
    case "Oklahoma":
      stateAbbreviation = ", OK ";
      break;
    case "Oregon":
      stateAbbreviation = ", OR ";
      break;
    case "Pennsylvania":
      stateAbbreviation = ", PA ";
      break;
    case "Rhode Island":
      stateAbbreviation = ", RI ";
      break;
    case "South Carolina":
      stateAbbreviation = ", SC ";
      break;
    case "South Dakota":
      stateAbbreviation = ", SD ";
      break;
    case "Tennessee":
      stateAbbreviation = ", TN ";
      break;
    case "Texas":
      stateAbbreviation = ", TX ";
      break;
    case "Utah":
      stateAbbreviation = ", UT ";
      break;
    case "Vermont":
      stateAbbreviation = ", VT ";
      break;
    case "Virginia":
      stateAbbreviation = ", VA ";
      break;
    case "Washington":
      stateAbbreviation = ", WA ";
      break;
    case "West Virginia":
      stateAbbreviation = ", WV ";
      break;
    case "Wisconsin":
      stateAbbreviation = ", WI ";
      break;
    case "Wyoming":
      stateAbbreviation = ", WY ";
      break;
    case "District of Columbia":
      stateAbbreviation = ", DC ";
      break;
    case "Guam":
      stateAbbreviation = ", GU ";
      break;
    case "Marshall Islands":
      stateAbbreviation = ", MH ";
      break;
    case "Northern Mariana Island":
      stateAbbreviation = ", MP ";
      break;
    case "Puerto Rico":
      stateAbbreviation = ", PR ";
      break;
    case "Virgin Islands":
      stateAbbreviation = ", VI ";
      break;
    case "Armed Forces Africa":
      stateAbbreviation = ", AE ";
      break;
    case "Armed Forces Americas":
      stateAbbreviation = ", AA ";
      break;
    case "Armed Forces Canada":
      stateAbbreviation = ", AE ";
      break;
    case "Armed Forces Europe":
      stateAbbreviation = ", AE ";
      break;
    case "Armed Forces Middle East":
      stateAbbreviation = ", AE ";
      break;
    case "Armed Forces Pacific":
      stateAbbreviation = ", AP ";
      break;
    default:
      stateAbbreviation = "";
  }

  let parameter;
  const inputRef = useRef();
  function handleClick(e) {
    const ipInput = inputRef.current.value;
    if (ipInput === "") return;
    if (ipInput.match(/\./g) === null) {
      alert("Please enter a valid IP Address or Domain");
    } else {
      ipInput.match(/\./g).length === 3
        ? (parameter = "ipAddress=")
        : (parameter = "domain=");
      setApiKey(
        "https://geo.ipify.org/api/v1?apiKey=at_XoeODQ8fNzA8KFNhRUnmBtHDzUMs5&" +
          parameter +
          ipInput
      );
      isLoading(true);
      inputRef.current.value = null;
    }
  }

  return (
    <div>
      <header>
        <div
          className="header-top"
          style={{ backgroundImage: "url(" + HeaderPattern + ")" }}
        >
          <h1>IP Address Tracker</h1>
          <div>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for any IP address or domain"
            />
            <button onClick={handleClick}>{arrowIcon}</button>
          </div>
        </div>
        <div className="header-bottom">
          <div className="col">
            <p>IP Address</p>
            <h2>{ipAddress}</h2>
          </div>
          <div style={divider}></div>
          <div className="col">
            <p>Location</p>
            <h2>
              {city}
              {stateAbbreviation}
              {postalCode}
            </h2>
          </div>
          <div style={divider}></div>
          <div className="col">
            <p>Timezone</p>
            <h2>UTC{timezone}</h2>
          </div>
          <div style={divider}></div>
          <div className="col">
            <p>ISP</p>
            <h2>{isp}</h2>
          </div>
        </div>
      </header>
      <div className="load-screen" style={loadScreenStyle}>
        {loading ? (
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="leaflet-container">
        <Map ref={mapRef} center={[lat, lng]} zoom={10} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon={mapMarker} position={[lat, lng]}>
            <Popup>IP Address Location.</Popup>
          </Marker>
        </Map>
      </div>
    </div>
  );
}

export default App;
