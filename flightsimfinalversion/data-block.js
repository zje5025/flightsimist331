
// https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html
// https://github.com/chrisveness/geodesy

class DataBlock extends ol.Feature {

    iconUrl = "plane.svg";
    flight;
    lastTime;
    currentDistance;
    heading;
    LatLon;
    destination;

    constructor(flight, LatLon) {
        super({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([flight.origin.long, flight.origin.lat])),
            finished: false
        });

        this.LatLon = LatLon;
        this.flight = flight;
        this.currentDistance = 0;
        this.lastTime = Date.now();
        this.heading1 = (new LatLon(flight.origin.lat, flight.origin.long)).initialBearingTo(
            new LatLon(flight.destination.lat, flight.destination.long)
        );
        this.heading2 = (new LatLon(flight.origin.lat, flight.origin.long)).finalBearingTo(
            new LatLon(flight.destination.lat, flight.destination.long)
        );

        const callsign = flight.aircraftId;
        const altitude = flight.altitude;
        const aircraftClass = flight.aircraftType;
        const groundspeed = flight.groundspeed;
        const destinationName = flight.destination.name;
        const origin = this.getGeometry().getCoordinates();
        const destination = this.getGeometry().clone().getCoordinates();
        destination[1] = destination[1] - 20000;

        const labelStyle = new ol.style.Style({
            text: new ol.style.Text({
                text: `
                ${callsign}
                ${altitude}
                ${aircraftClass}
                ${groundspeed}
                ${destinationName}
                `,
                textAlign: 'left',
                offsetX: -75,
                offsetY: -60,
                font: '14px Calibri,sans-serif',
                overflow: true,
                fill: new ol.style.Fill({
                    color: '#000'
                }),
                stroke: new ol.style.Stroke({
                    color: '#fff',
                    width: 3
                })
            })
        });

        const plane = new ol.style.Style({
            image: new ol.style.Icon({
                scale: 0.15,
                rotation: this.getHeading(),
                src: "plane.svg"
            })
        });

        this.setStyle([plane, labelStyle]);
    }

    getHeading() {
        // Average of initial and final heading
        return toRadians((this.heading1 + this.heading2) / 2);
    }

    getDistanceToDestination() {
        const origin = ol.proj.fromLonLat([this.flight.origin.long, this.flight.origin.lat]);
        const route = this.route.getGeometry();
        const distFromOrigin = getDistance(
            route.getCoordinates()[1][0],
            route.getCoordinates()[1][1],
            route.getClosestPoint(origin)[0],
            route.getClosestPoint(origin)[1],
        );
        return distFromOrigin;
    }

    getDistanceFromOrigin() {
        const origin = ol.proj.fromLonLat([this.flight.origin.long, this.flight.origin.lat]);
        const route = this.route.getGeometry();
        const distToDestination = getDistance(
            route.getClosestPoint(origin)[0],
            route.getClosestPoint(origin)[1],
            route.getCoordinates()[0][0],
            route.getCoordinates()[0][1],
        );
        return distToDestination;
    }

    getCurrentPosition() {
        return this.route.getGeometry().getCoordinateAt(this.currentDistance);
    }

    updateAltitude(newAltitude) {
        const text = `
                ${this.flight.aircraftId}
                ${newAltitude}
                ${this.flight.aircraftType}
                ${this.flight.groundspeed}
                ${this.flight.destination.name}
        `;
        this.getStyle()[1].getText().setText(text);
    }

    updateGroundspeed(newGroundspeed) {
        const text = `
                ${this.flight.aircraftId}
                ${this.flight.altitude}
                ${this.flight.aircraftType}
                ${newGroundspeed}
                ${this.flight.destination.name}
        `;
        this.getStyle()[1].getText().setText(text);
    }
}