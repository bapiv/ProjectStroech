var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Points_1 = new ol.format.GeoJSON();
var features_Points_1 = format_Points_1.readFeatures(json_Points_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Points_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Points_1.addFeatures(features_Points_1);
var lyr_Points_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Points_1, 
                style: style_Points_1,
                popuplayertitle: 'Points',
                interactive: true,
                title: '<img src="styles/legend/Points_1.png" /> Points'
            });
var format_Points_2 = new ol.format.GeoJSON();
var features_Points_2 = format_Points_2.readFeatures(json_Points_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Points_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Points_2.addFeatures(features_Points_2);
var lyr_Points_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Points_2, 
                style: style_Points_2,
                popuplayertitle: 'Points',
                interactive: true,
    title: 'Points<br />\
    <img src="styles/legend/Points_2_0.png" /> A<br />\
    <img src="styles/legend/Points_2_1.png" /> B<br />\
    <img src="styles/legend/Points_2_2.png" /> C<br />\
    <img src="styles/legend/Points_2_3.png" /> D<br />\
    <img src="styles/legend/Points_2_4.png" /> E<br />\
    <img src="styles/legend/Points_2_5.png" /> F<br />\
    <img src="styles/legend/Points_2_6.png" /> G<br />\
    <img src="styles/legend/Points_2_7.png" /> SQ<br />\
    <img src="styles/legend/Points_2_8.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Points_1.setVisible(true);lyr_Points_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Points_1,lyr_Points_2];
lyr_Points_1.set('fieldAliases', {'ZONE': 'ZONE', 'FLAG_': 'FLAG_', 'ITEM_ID': 'ITEM_ID', 'DESCRIPTIO': 'DESCRIPTIO', 'FOUND_BY_': 'FOUND_BY_', 'DATE_FOUND': 'DATE_FOUND', 'NOTES': 'NOTES', 'IMAGE_A_UR': 'IMAGE_A_UR', 'IMAGE_B_UR': 'IMAGE_B_UR', 'LATITUDE_Y': 'LATITUDE_Y', 'LONGITUDE_': 'LONGITUDE_', });
lyr_Points_2.set('fieldAliases', {'ZONE': 'ZONE', 'FLAG_': 'FLAG_', 'ITEM_ID': 'ITEM_ID', 'DESCRIPTIO': 'DESCRIPTIO', 'FOUND_BY_': 'FOUND_BY_', 'DATE_FOUND': 'DATE_FOUND', 'NOTES': 'NOTES', 'IMAGE_A_UR': 'IMAGE_A_UR', 'IMAGE_B_UR': 'IMAGE_B_UR', 'LATITUDE_Y': 'LATITUDE_Y', 'LONGITUDE_': 'LONGITUDE_', });
lyr_Points_1.set('fieldImages', {'ZONE': '', 'FLAG_': '', 'ITEM_ID': '', 'DESCRIPTIO': '', 'FOUND_BY_': '', 'DATE_FOUND': '', 'NOTES': '', 'IMAGE_A_UR': '', 'IMAGE_B_UR': '', 'LATITUDE_Y': '', 'LONGITUDE_': '', });
lyr_Points_2.set('fieldImages', {'ZONE': 'TextEdit', 'FLAG_': 'Range', 'ITEM_ID': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'FOUND_BY_': 'TextEdit', 'DATE_FOUND': 'TextEdit', 'NOTES': 'TextEdit', 'IMAGE_A_UR': 'TextEdit', 'IMAGE_B_UR': 'TextEdit', 'LATITUDE_Y': 'TextEdit', 'LONGITUDE_': 'TextEdit', });
lyr_Points_1.set('fieldLabels', {'ZONE': 'no label', 'FLAG_': 'no label', 'ITEM_ID': 'header label - always visible', 'DESCRIPTIO': 'inline label - always visible', 'FOUND_BY_': 'no label', 'DATE_FOUND': 'no label', 'NOTES': 'no label', 'IMAGE_A_UR': 'inline label - always visible', 'IMAGE_B_UR': 'no label', 'LATITUDE_Y': 'no label', 'LONGITUDE_': 'no label', });
lyr_Points_2.set('fieldLabels', {'ZONE': 'no label', 'FLAG_': 'no label', 'ITEM_ID': 'no label', 'DESCRIPTIO': 'no label', 'FOUND_BY_': 'no label', 'DATE_FOUND': 'no label', 'NOTES': 'no label', 'IMAGE_A_UR': 'no label', 'IMAGE_B_UR': 'no label', 'LATITUDE_Y': 'no label', 'LONGITUDE_': 'no label', });
lyr_Points_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});