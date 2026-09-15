var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RPZ1_1 = new ol.format.GeoJSON();
var features_RPZ1_1 = format_RPZ1_1.readFeatures(json_RPZ1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RPZ1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RPZ1_1.addFeatures(features_RPZ1_1);
var lyr_RPZ1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RPZ1_1, 
                style: style_RPZ1_1,
                popuplayertitle: 'RP Z1',
                interactive: true,
                title: '<img src="styles/legend/RPZ1_1.png" /> RP Z1'
            });
var group_CatastroZona1 = new ol.layer.Group({
                                layers: [lyr_RPZ1_1,],
                                fold: 'open',
                                title: 'Catastro Zona 1'});

lyr_OSMStandard_0.setVisible(true);lyr_RPZ1_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_CatastroZona1];
lyr_RPZ1_1.set('fieldAliases', {'fid': 'fid', 'text': 'text', });
lyr_RPZ1_1.set('fieldImages', {'fid': 'TextEdit', 'text': 'TextEdit', });
lyr_RPZ1_1.set('fieldLabels', {'fid': 'hidden field', 'text': 'no label', });
lyr_RPZ1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});