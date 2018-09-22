'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Count = function (_React$Component) {
  _inherits(Count, _React$Component);

  function Count(props) {
    _classCallCheck(this, Count);

    var _this = _possibleConstructorReturn(this, (Count.__proto__ || Object.getPrototypeOf(Count)).call(this, props));

    _this.addOne = _this.addOne.bind(_this);
    _this.minusOne = _this.minusOne.bind(_this);
    _this.resetAll = _this.resetAll.bind(_this);

    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(Count, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      try {
        var parseNumber = localStorage.getItem('count');
        var count = parseFloat(parseNumber);
        if (!isNaN(count)) {
          this.setState(function () {
            return { count: count };
          });
        }
        console.log(count);
      } catch (e) {}
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        localStorage.setItem('count', this.state.count);
        console.log(this.state.count, prevState);
      }
    }
  }, {
    key: 'addOne',
    value: function addOne() {
      this.setState(function (prevState) {
        return { count: prevState.count + 1 };
      });
    }
  }, {
    key: 'minusOne',
    value: function minusOne() {
      this.setState(function (prevState) {
        return { count: prevState.count - 1 };
      });
    }
  }, {
    key: 'resetAll',
    value: function resetAll() {
      this.setState(function () {
        return { count: 0 };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Count: ',
          this.state.count
        ),
        React.createElement(
          'button',
          { onClick: this.addOne },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.minusOne },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.resetAll },
          'reset'
        )
      );
    }
  }]);

  return Count;
}(React.Component);

ReactDOM.render(React.createElement(Count, null), document.getElementById('app'));

// let count = 0
// const addOne = () => {
//   count++
//   renderCounterApp()
// }
// const minusOne = () => {
//   count--
//   renderCounterApp()
// }
// const reset = () => {
//   count = 0
//   renderCounterApp()
// }
//
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   )
//   ReactDOM.render(templateTwo,document.getElementById('app'))
// }
// renderCounterApp()
