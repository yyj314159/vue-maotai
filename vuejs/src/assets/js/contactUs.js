export default ()=>{

    var map = new BMap.Map("container");
    // 创建地图实例  
    var point = new BMap.Point(121.496670, 31.385815);
    // 创建点坐标  
    map.enableScrollWheelZoom();
    map.centerAndZoom(point, 16);
    var marker = new BMap.Marker(point);
    map.addOverlay(marker);
    marker.setAnimation(BMAP_ANIMATION_BOUNCE);
}
