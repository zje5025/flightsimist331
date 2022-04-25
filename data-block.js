// https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html

class DataBlock extends ol.Feature {

    iconUrl = "plane.svg";

    constructor(flight) {
        super(new ol.geom.Point(ol.proj.fromLonLat([flight.origin.long, flight.origin.lat])));
        this.flight = flight;
        const plane = new ol.style.Style({
            image: new ol.style.Icon({
                scale: 0.15,
                // rotation: rotation,
                src: this.iconUrl
            })
        });

        const callsign = flight.aircraftId;
        const altitude = flight.altitude;
        const aircraftClass = flight.aircraftType;
        const groundspeed = flight.groundspeed;
        const destinationName = flight.destination.name;
        const origin = this.getGeometry().getCoordinates();
        const destination = this.getGeometry().clone().getCoordinates();
        destination[1] = destination[1] - 20000;

        // const a = ol.proj.fromLonLat([flight.origin.long, flight.origin.lat]);
        // const b = ol.proj.fromLonLat([flight.origin.long, flight.origin.lat]);

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
                offsetY: -20,
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

        const line = new ol.style.Style({
            geometry: new ol.geom.LineString([origin, destination]),
            stroke: new ol.style.Stroke({
                fill: 'green',
                width: 2
            })
        });

        const circle = new ol.style.Style({
            geometry: new ol.geom.Point(origin, destination),
            image: new ol.style.Circle({
                radius: 5,
                fill: new ol.style.Fill({
                    color: '#000'
                }),
                stroke: new ol.style.Stroke({
                    fill: '#ADD8E6',
                    width: 2
                })
            })
        });
        // let c = this.getGeometry().getCoordinates();
        // c[1] = c[1] - 20;

        this.setStyle([line, circle, labelStyle]);
    }

    updateStyle(position) {
        const origin = position.getCoordinates();
        const destination = position.clone().getCoordinates();
        destination[1] = destination[1] - 30000;
        const line = new ol.style.Style({
            geometry: new ol.geom.LineString([origin, destination]),
            stroke: new ol.style.Stroke({
                color: 'green',
                width: 3
            })
        });
        const circle = new ol.style.Style({
            geometry: new ol.geom.Point(destination, destination),
            image: new ol.style.Circle({
                radius: 5,
                fill: new ol.style.Fill({
                    color: '#ADD8E6'
                })
            })
        });
        this.getStyle()[0] = line;
        this.getStyle()[1] = circle;
    }

    updateAltitude(newAltitude) {
        const text = `
                ${this.flight.aircraftId}
                ${newAltitude}
                ${this.flight.aircraftType}
                ${this.flight.groundspeed}
                ${this.flight.destination.name}
        `;
        this.getStyle()[2].getText().setText(text);
    }

    updateGroundspeed(newGroundspeed) {
        const text = `
                ${this.flight.aircraftId}
                ${this.flight.altitude}
                ${this.flight.aircraftType}
                ${newGroundspeed}
                ${this.flight.destination.name}
        `;
        this.getStyle()[2].getText().setText(text);
    }
}