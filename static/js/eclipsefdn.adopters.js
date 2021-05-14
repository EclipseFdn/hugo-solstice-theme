"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!
 * Copyright (c) 2019 Eclipse Foundation, Inc.
 * 
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 * 
 * Contributors:
 *   Eric Poirier <eric.poirier@eclipse-foundation.org>
 * 
 * SPDX-License-Identifier: EPL-2.0
*/
var EclipseFdnAdopters = /*#__PURE__*/function () {
  function EclipseFdnAdopters() {
    _classCallCheck(this, EclipseFdnAdopters);

    _defineProperty(this, "precompiledRegex", /<([^>]*?)>;(\s?[\w-]*?="(?:\\"|[^"])*";){0,}\s?rel="next"/);

    _defineProperty(this, "default_options", {
      project_id: '',
      selector: '.eclipsefdn-adopters',
      ul_classes: '',
      logo_white: false,
      working_group: '',
      src_root: 'https://api.eclipse.org/adopters',
      src_projects_prefix: '/projects'
    });

    _defineProperty(this, "getList", function (options) {
      var t = this;
      var opts = this.getMergedOptions(options);
      this.fireCall(opts, function (response) {
        t.createProjectList(response, opts, document.querySelectorAll(opts.selector));
        t.scrollToAnchor();
      });
    });

    _defineProperty(this, "getWGList", function (options) {
      var t = this;
      var opts = this.getMergedOptions(options); // create callback on ready

      this.fireCall(opts, function (response) {
        t.createWGProjectsList(response, opts, document.querySelectorAll(opts.selector));
        t.scrollToAnchor();
      });
    });
  }

  _createClass(EclipseFdnAdopters, [{
    key: "getMergedOptions",
    value: function getMergedOptions(options) {
      // Default settings copy
      var opts = JSON.parse(JSON.stringify(this.default_options)); // Go through the parameters of Options if its defined and is an object

      if (typeof options !== 'undefined' && _typeof(options) === 'object') {
        for (var optionName in this.default_options) {
          if (typeof options[optionName] === 'undefined' || typeof options[optionName] !== 'string' && typeof options[optionName] !== 'boolean') {
            continue;
          }

          opts[optionName] = options[optionName];
        }
      }

      return opts;
    }
    /**
     * Replace the adopters container
     * @public
     * @param {Object} options Videos attributes
     */

  }, {
    key: "fireCall",
    value: function fireCall(opts, callback) {
      var currentData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var t = this;
      var xhttp = new XMLHttpRequest(); // create callback on ready

      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // merge new data with current
          var json = JSON.parse(this.responseText);

          if (Array.isArray(currentData) || currentData.length) {
            json = currentData.concat(json);
          } // check the link header as long as its set


          var linkHeader = xhttp.getResponseHeader('Link');

          if (linkHeader !== null) {
            var match = linkHeader.match(t.precompiledRegex); // if there is no match, then there is no next and we are on the last page and should process data through callback

            if (match !== null) {
              opts.next = match[1];
              t.fireCall(opts, callback, json);
            } else {
              callback(json);
            }
          } else {
            callback(json);
          }
        } else if (this.readyState == 4) {
          console.log('Error while retrieving adopters data, could not complete operation');
        }
      }; // get the URL to call, using the 'next' url if set, otherwise building from original option set


      var url;

      if (opts.next !== undefined) {
        url = opts.next;
      } else {
        url = opts.src_root + opts.src_projects_prefix;

        if (opts.project_id !== undefined && opts.project_id.trim() !== '') {
          url += '/' + opts.project_id;
        }

        if (opts.working_group !== undefined && opts.working_group.trim() !== '') {
          url += '?working_group=' + opts.working_group;
        }
      } // send request to get JSON data


      xhttp.open('GET', url, true);
      xhttp.send();
    }
  }, {
    key: "createWGProjectsList",
    value: function createWGProjectsList(json_object, opts, el) {
      var _iterator = _createForOfIteratorHelper(json_object),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var project = _step.value;
          var projectOpts = JSON.parse(JSON.stringify(opts));
          projectOpts.project_id = project.project_id; // add the title

          var h2 = document.createElement('h2');
          h2.textContent = project.name;
          h2.setAttribute('id', project.project_id);

          for (var i = 0; i < el.length; i++) {
            el[i].appendChild(h2);
          }

          var headerAnchor = document.createElement('a');
          headerAnchor.setAttribute('class', 'btn btn-xs btn-secondary margin-left-10 uppercase');
          headerAnchor.setAttribute('href', 'https://projects.eclipse.org/projects/' + project.project_id);
          headerAnchor.textContent = project.project_id;
          h2.appendChild(headerAnchor);
          this.createProjectList(json_object, projectOpts, el);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "createProjectList",
    value: function createProjectList(json_object, opts, el) {
      var ul = document.createElement('ul');

      if (typeof json_object !== 'undefined') {
        var _iterator2 = _createForOfIteratorHelper(json_object),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var project = _step2.value;

            if (opts.project_id !== project.project_id) {
              continue;
            }

            var _iterator3 = _createForOfIteratorHelper(project.adopters),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var adopter = _step3.value;
                // Get the home page url of this adopter
                var url = '';

                if (typeof adopter['homepage_url'] !== 'undefined') {
                  url = adopter['homepage_url'];
                } // Get the name of this adopter


                var name = '';

                if (typeof adopter['name'] !== 'undefined') {
                  name = adopter['name'];
                } // Get the logo of this adopter


                var logo = '';

                if (typeof adopter['logo'] !== 'undefined') {
                  logo = adopter['logo'];
                }

                if (opts['logo_white'] === true && typeof adopter['logo_white'] !== 'undefined') {
                  logo = adopter['logo_white'];
                } // Create the html elements


                var li = document.createElement('li');
                var a = document.createElement('a');
                var img = document.createElement('img');
                a.setAttribute('href', url);
                img.setAttribute('alt', name);
                img.setAttribute('src', opts.src_root + '/assets/images/adopters/' + logo);
                img.setAttribute('class', 'adopters-img');
                a.appendChild(img);
                li.appendChild(a);
                ul.appendChild(li);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      for (var i = 0; i < el.length; i++) {
        if (opts['ul_classes'] !== '') {
          ul.setAttribute('class', opts['ul_classes']);
        }

        el[i].appendChild(ul);
      }
    } // Function to scroll when there is anchor in url

  }, {
    key: "scrollToAnchor",
    value: function scrollToAnchor() {
      if (location.hash) {
        var projectId = location.hash.replace('#', '');
        var element = document.getElementById("".concat(projectId));
        element.scrollIntoView();
      }
    }
  }]);

  return EclipseFdnAdopters;
}();

var eclipseFdnAdopters = new EclipseFdnAdopters();
