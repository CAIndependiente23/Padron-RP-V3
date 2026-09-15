var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RPZ5_1 = new ol.format.GeoJSON();
var features_RPZ5_1 = format_RPZ5_1.readFeatures(json_RPZ5_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RPZ5_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RPZ5_1.addFeatures(features_RPZ5_1);
var lyr_RPZ5_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RPZ5_1, 
                style: style_RPZ5_1,
                popuplayertitle: 'RP Z5',
                interactive: true,
                title: '<img src="styles/legend/RPZ5_1.png" /> RP Z5'
            });
var format_RPZ4_2 = new ol.format.GeoJSON();
var features_RPZ4_2 = format_RPZ4_2.readFeatures(json_RPZ4_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RPZ4_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RPZ4_2.addFeatures(features_RPZ4_2);
var lyr_RPZ4_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RPZ4_2, 
                style: style_RPZ4_2,
                popuplayertitle: 'RP Z4',
                interactive: true,
                title: '<img src="styles/legend/RPZ4_2.png" /> RP Z4'
            });
var format_RPZ1_3 = new ol.format.GeoJSON();
var features_RPZ1_3 = format_RPZ1_3.readFeatures(json_RPZ1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RPZ1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RPZ1_3.addFeatures(features_RPZ1_3);
var lyr_RPZ1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RPZ1_3, 
                style: style_RPZ1_3,
                popuplayertitle: 'RP Z1',
                interactive: true,
                title: '<img src="styles/legend/RPZ1_3.png" /> RP Z1'
            });
var group_CatastroZona1 = new ol.layer.Group({
                                layers: [lyr_RPZ1_3,],
                                fold: 'open',
                                title: 'Catastro Zona 1'});
var group_CatastroZona4 = new ol.layer.Group({
                                layers: [lyr_RPZ4_2,],
                                fold: 'open',
                                title: 'Catastro Zona 4'});
var group_CatastroZona5 = new ol.layer.Group({
                                layers: [lyr_RPZ5_1,],
                                fold: 'open',
                                title: 'Catastro Zona 5'});

lyr_OSMStandard_0.setVisible(true);lyr_RPZ5_1.setVisible(true);lyr_RPZ4_2.setVisible(true);lyr_RPZ1_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_CatastroZona5,group_CatastroZona4,group_CatastroZona1];
lyr_RPZ5_1.set('fieldAliases', {'fid': 'fid', 'text': 'text', });
lyr_RPZ4_2.set('fieldAliases', {'fid': 'fid', 'text': 'text', });
lyr_RPZ1_3.set('fieldAliases', {'fid': 'fid', 'text': 'text', });
lyr_RPZ5_1.set('fieldImages', {'fid': 'TextEdit', 'text': 'TextEdit', });
lyr_RPZ4_2.set('fieldImages', {'fid': 'TextEdit', 'text': 'TextEdit', });
lyr_RPZ1_3.set('fieldImages', {'fid': 'TextEdit', 'text': 'TextEdit', });
lyr_RPZ5_1.set('fieldLabels', {'fid': 'hidden field', 'text': 'no label', });
lyr_RPZ4_2.set('fieldLabels', {'fid': 'hidden field', 'text': 'no label', });
lyr_RPZ1_3.set('fieldLabels', {'fid': 'hidden field', 'text': 'no label', });
lyr_RPZ1_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});