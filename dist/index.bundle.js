webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _leaflet = __webpack_require__(3);
	
	var _leaflet2 = _interopRequireDefault(_leaflet);
	
	var _reactLeaflet = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_leaflet2.default.Icon.Default.imagePath = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.3/images/';
	
	var position = [39.9528, -75.1638];
	
	var map = _react2.default.createElement(
	    _reactLeaflet.Map,
	    { center: position, zoom: 12 },
	    _react2.default.createElement(_reactLeaflet.TileLayer, {
	        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
	        attribution: '\xA9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	    }),
	    _react2.default.createElement(
	        _reactLeaflet.Marker,
	        { position: position },
	        _react2.default.createElement(
	            _reactLeaflet.Popup,
	            null,
	            _react2.default.createElement(
	                'span',
	                null,
	                'A pretty CSS3 popup.',
	                _react2.default.createElement('br', null),
	                'Easily customizable.'
	            )
	        )
	    )
	);
	
	_reactDom2.default.render(map, document.getElementById('react-main'));

/***/ }
]);
//# sourceMappingURL=index.bundle.js.map