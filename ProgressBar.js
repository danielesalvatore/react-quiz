'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBar = function ProgressBar(_ref) {
    var _ref$min = _ref.min,
        min = _ref$min === undefined ? 0 : _ref$min,
        _ref$max = _ref.max,
        max = _ref$max === undefined ? 100 : _ref$max,
        _ref$value = _ref.value,
        value = _ref$value === undefined ? 0 : _ref$value,
        _ref$customClassNames = _ref.customClassNames,
        customClassNames = _ref$customClassNames === undefined ? {} : _ref$customClassNames;

    var progressSize = {
        width: (value - min) / (max - min) * 100 + '%'
    };

    var progressBarClassName = (0, _classnames2.default)('rq-ProgressBar', customClassNames['rq-ProgressBar']);
    var progressBarInnerClassName = (0, _classnames2.default)('rq-ProgressBar-inner', customClassNames['rq-ProgressBar-inner']);

    // Displays the progress bar size accordingly max, min, current value and isVisible
    return _react2.default.createElement(
        'div',
        { className: progressBarClassName },
        _react2.default.createElement('div', { className: progressBarInnerClassName, role: 'progressbar',
            'aria-valuenow': value, 'aria-valuemin': min, 'aria-valuemax': max,
            style: progressSize })
    );
};

ProgressBar.propTypes = {
    min: _propTypes2.default.number,
    max: _propTypes2.default.number,
    value: _propTypes2.default.number
};

exports.default = ProgressBar;