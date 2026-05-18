var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PadrnRP_1 = new ol.format.GeoJSON();
var features_PadrnRP_1 = format_PadrnRP_1.readFeatures(json_PadrnRP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PadrnRP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PadrnRP_1.addFeatures(features_PadrnRP_1);
var lyr_PadrnRP_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PadrnRP_1, 
                style: style_PadrnRP_1,
                popuplayertitle: 'Padrón RP',
                interactive: true,
                title: '<img src="styles/legend/PadrnRP_1.png" /> Padrón RP'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PadrnRP_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PadrnRP_1];
lyr_PadrnRP_1.set('fieldAliases', {'fid': 'fid', 'N�RP': 'N�RP', 'begin': 'begin', 'end': 'end', 'Datos RP _N°': 'Datos RP _N°', 'Datos RP _Zona': 'Datos RP _Zona', 'Datos RP _CALLE': 'Datos RP _CALLE', 'Datos RP _Altura': 'Datos RP _Altura', 'Datos RP _INICIO': 'Datos RP _INICIO', 'Datos RP _FIN': 'Datos RP _FIN', 'Datos RP _MANO': 'Datos RP _MANO', 'Datos RP _COM': 'Datos RP _COM', 'Datos RP _L(m)': 'Datos RP _L(m)', 'Datos RP _A (m)': 'Datos RP _A (m)', 'Datos RP _Observaciones': 'Datos RP _Observaciones', 'Datos RP _C1': 'Datos RP _C1', 'Datos RP _C2': 'Datos RP _C2', 'Datos RP _Fecha de limpieza': 'Datos RP _Fecha de limpieza', 'Datos RP _Fecha de verificación': 'Datos RP _Fecha de verificación', 'Datos RP _Foto': 'Datos RP _Foto', });
lyr_PadrnRP_1.set('fieldImages', {'fid': 'TextEdit', 'N�RP': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Datos RP _N°': 'TextEdit', 'Datos RP _Zona': 'TextEdit', 'Datos RP _CALLE': 'TextEdit', 'Datos RP _Altura': 'TextEdit', 'Datos RP _INICIO': 'TextEdit', 'Datos RP _FIN': 'TextEdit', 'Datos RP _MANO': 'TextEdit', 'Datos RP _COM': 'TextEdit', 'Datos RP _L(m)': 'TextEdit', 'Datos RP _A (m)': 'TextEdit', 'Datos RP _Observaciones': 'TextEdit', 'Datos RP _C1': 'TextEdit', 'Datos RP _C2': 'TextEdit', 'Datos RP _Fecha de limpieza': 'TextEdit', 'Datos RP _Fecha de verificación': 'TextEdit', 'Datos RP _Foto': 'TextEdit', });
lyr_PadrnRP_1.set('fieldLabels', {'fid': 'no label', 'N�RP': 'no label', 'begin': 'no label', 'end': 'no label', 'Datos RP _N°': 'no label', 'Datos RP _Zona': 'no label', 'Datos RP _CALLE': 'no label', 'Datos RP _Altura': 'no label', 'Datos RP _INICIO': 'no label', 'Datos RP _FIN': 'no label', 'Datos RP _MANO': 'no label', 'Datos RP _COM': 'no label', 'Datos RP _L(m)': 'no label', 'Datos RP _A (m)': 'no label', 'Datos RP _Observaciones': 'no label', 'Datos RP _C1': 'no label', 'Datos RP _C2': 'no label', 'Datos RP _Fecha de limpieza': 'no label', 'Datos RP _Fecha de verificación': 'no label', 'Datos RP _Foto': 'no label', });
lyr_PadrnRP_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});