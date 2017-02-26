webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _leaflet = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var position = [51.505, -0.09];
	
	var map = _react2.default.createElement(
	    _leaflet.Map,
	    { center: position, zoom: 13 },
	    _react2.default.createElement(_leaflet.TileLayer, {
	        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
	        attribution: '\xA9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	    }),
	    _react2.default.createElement(
	        _leaflet.Marker,
	        { position: position },
	        _react2.default.createElement(
	            _leaflet.Popup,
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