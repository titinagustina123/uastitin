var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_praktekqgis_0 = new ol.format.GeoJSON();
var features_praktekqgis_0 = format_praktekqgis_0.readFeatures(json_praktekqgis_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_praktekqgis_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_praktekqgis_0.addFeatures(features_praktekqgis_0);var lyr_praktekqgis_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_praktekqgis_0, 
                style: style_praktekqgis_0,
    title: 'praktekqgis<br />\
    <img src="styles/legend/praktekqgis_0_0.png" />  24805.0000 - 38599.8000 <br />\
    <img src="styles/legend/praktekqgis_0_1.png" />  38599.8000 - 52394.6000 <br />\
    <img src="styles/legend/praktekqgis_0_2.png" />  52394.6000 - 66189.4000 <br />\
    <img src="styles/legend/praktekqgis_0_3.png" />  66189.4000 - 79984.2000 <br />\
    <img src="styles/legend/praktekqgis_0_4.png" />  79984.2000 - 93779.0000 <br />'
        });

lyr_praktekqgis_0.setVisible(true);
var layersList = [baseLayer,lyr_praktekqgis_0];
lyr_praktekqgis_0.set('fieldAliases', {'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'Luas Km2': 'Luas Km2', 'Jmlh Pnddk': 'Jmlh Pnddk', });
lyr_praktekqgis_0.set('fieldImages', {'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'Luas Km2': 'TextEdit', 'Jmlh Pnddk': 'TextEdit', });
lyr_praktekqgis_0.set('fieldLabels', {'ID_Kec': 'inline label', 'Kecamatan': 'inline label', 'Luas Km2': 'inline label', 'Jmlh Pnddk': 'inline label', });
lyr_praktekqgis_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});