import React, { Component } from "react";
import { Icon, Layout, Button, Modal, Form, Input } from "antd";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import CurrentLocation from "./CurrentLocation";
import GoogleMapReact from "google-maps-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

const mapStyles = {
  width: "800px",
  height: "600px"
};

const { Content, Footer } = Layout;

const { GoogleMap } = Map;

const markerData = [
  { lat: 37.339, lng: -121.8814 },
  { lat: 37.34012, lng: -121.8811 },
  { lat: 37.34, lng: -121.8814 }
];

export class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
      case: "map",
      visible: false,
      address: "",
      markers: [
        { lat: 37.339, lng: -121.8814 },
        { lat: 37.34012, lng: -121.8811 },
        { lat: 37.34, lng: -121.8814 }
      ],
      currentLocation: {}
    };
  }

  currLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords);
        this.setState(previousState => ({
          markers: [
            ...previousState.markers,
            {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          ],
          visible: false
        }));
      });
    } else {
      console.log("Error: could not get current location");
    }
  };

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    this.setState({ address: address });
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    if (this.state.address) {
      geocodeByAddress(this.state.address)
        .then(results => getLatLng(results[0]))
        .then(latLng =>
          this.setState(previousState => ({
            markers: [...previousState.markers, latLng]
          }))
        )
        .catch(error => console.error("Error", error));
    }
    this.setState({
      address: "",
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  showMapOrCurrent = () => {
    switch (this.state.case) {
      case "map":
        return (
          <div>
            <Map
              google={this.props.google}
              zoom={14}
              style={mapStyles}
              initialCenter={{ lat: 37.341, lng: -121.8811 }}
            >
              {Object.keys(this.state.markers).map(key => (
                <Marker name={""} position={this.state.markers[key]} />
              ))}
            </Map>
          </div>
        );

      case "current":
        return (
          <div>
            <CurrentLocation
              centerAroundCurrentLocation
              google={this.props.google}
            >
              <Marker onClick={this.onMarkerClick} name={"current location"} />
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
              >
                <div>
                  <h4>{this.state.selectedPlace.name}</h4>
                </div>
              </InfoWindow>
            </CurrentLocation>
          </div>
        );

      default:
        return (
          <div>
            <Map
              google={this.props.google}
              zoom={14}
              style={mapStyles}
              initialCenter={{ lat: 37.3352, lng: -121.8811 }}
            >
              <Marker lat={37.334} lng={-121.8811} />
            </Map>
          </div>
        );
    }
  };

  render() {
    return (
      <div className="dashboard-content">
        <div style={{ width: "800px" }}>
          <p>Please notify if you see a homeless person in need.</p>
          <Button
            type="default"
            shape="round"
            size="large"
            onClick={this.showModal}
            style={{
              backgroundColor: "#4784a8",
              borderRadius: "5px",
              paddingTop: "5px",
              paddingBottom: "5px",
              marginTop: "10px",
              color: "white"
            }}
            onClick={this.showModal}
          >
            Notify
          </Button>
          <Modal
            title="Notify last seen location of homeless person"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <PlacesAutocomplete
              value={this.state.address}
              onChange={this.handleChange}
              onSelect={this.handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading
              }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: "Location",
                      className: "location-search-input"
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: "#fafafa", cursor: "pointer" }
                        : { backgroundColor: "#ffffff", cursor: "pointer" };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
            <Button
              type="default"
              shape="round"
              size="default"
              onClick={this.currLocation}
              style={{
                backgroundColor: "#4784a8",
                borderRadius: "5px",
                paddingTop: "5px",
                paddingBottom: "5px",
                marginTop: "10px",
                color: "white"
              }}
            >
              Current Location
            </Button>
          </Modal>
          <div>{this.showMapOrCurrent()}</div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(Statistics);
