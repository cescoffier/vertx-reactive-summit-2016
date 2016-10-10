/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-js/http_client_request */
var utils = require('vertx-js/util/utils');
var HttpClientResponse = require('vertx-js/http_client_response');
var Buffer = require('vertx-js/buffer');
var WriteStream = require('vertx-js/write_stream');
var ReadStream = require('vertx-js/read_stream');
var MultiMap = require('vertx-js/multi_map');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JHttpClientRequest = io.vertx.core.http.HttpClientRequest;

/**
 Represents a client-side HTTP request.
 <p>
 @class
*/
var HttpClientRequest = function(j_val) {

  var j_httpClientRequest = j_val;
  var that = this;
  WriteStream.call(this, j_val);
  ReadStream.call(this, j_val);

  /**
   This will return <code>true</code> if there are more bytes in the write queue than the value set using {@link HttpClientRequest#setWriteQueueMaxSize}

   @public

   @return {boolean} true if write queue is full
   */
  this.writeQueueFull = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpClientRequest["writeQueueFull()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {HttpClientRequest}
   */
  this.exceptionHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpClientRequest["exceptionHandler(io.vertx.core.Handler)"](handler == null ? null : function(jVal) {
      handler(utils.convReturnThrowable(jVal));
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Write a String to the request body, encoded using the encoding <code>enc</code>.

   @public
   @param chunk {string} 
   @param enc {string} 
   @return {HttpClientRequest} @return a reference to this, so the API can be used fluently
   */
  this.write = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_httpClientRequest["write(io.vertx.core.buffer.Buffer)"](__args[0]._jdel);
      return that;
    }  else if (__args.length === 1 && typeof __args[0] === 'string') {
      j_httpClientRequest["write(java.lang.String)"](__args[0]);
      return that;
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_httpClientRequest["write(java.lang.String,java.lang.String)"](__args[0], __args[1]);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param maxSize {number} 
   @return {HttpClientRequest}
   */
  this.setWriteQueueMaxSize = function(maxSize) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_httpClientRequest["setWriteQueueMaxSize(int)"](maxSize);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {HttpClientRequest}
   */
  this.drainHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpClientRequest["drainHandler(io.vertx.core.Handler)"](handler);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {HttpClientRequest}
   */
  this.handler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpClientRequest["handler(io.vertx.core.Handler)"](handler == null ? null : function(jVal) {
      handler(utils.convReturnVertxGen(jVal, HttpClientResponse));
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {HttpClientRequest}
   */
  this.pause = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpClientRequest["pause()"]();
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {HttpClientRequest}
   */
  this.resume = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpClientRequest["resume()"]();
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param endHandler {function} 
   @return {HttpClientRequest}
   */
  this.endHandler = function(endHandler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpClientRequest["endHandler(io.vertx.core.Handler)"](endHandler);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   If chunked is true then the request will be set into HTTP chunked mode

   @public
   @param chunked {boolean} true if chunked encoding 
   @return {HttpClientRequest} a reference to this, so the API can be used fluently
   */
  this.setChunked = function(chunked) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      j_httpClientRequest["setChunked(boolean)"](chunked);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   @return Is the request chunked?

   @public

   @return {boolean}
   */
  this.isChunked = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpClientRequest["isChunked()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   The HTTP method for the request.

   @public

   @return {Object}
   */
  this.method = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnEnum(j_httpClientRequest["method()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   @return The URI of the request.

   @public

   @return {string}
   */
  this.uri = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpClientRequest["uri()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   @return The HTTP headers

   @public

   @return {MultiMap}
   */
  this.headers = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedheaders == null) {
        that.cachedheaders = utils.convReturnVertxGen(j_httpClientRequest["headers()"](), MultiMap);
      }
      return that.cachedheaders;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Put an HTTP header

   @public
   @param name {string} The header name 
   @param value {string} The header value 
   @return {HttpClientRequest} a reference to this, so the API can be used fluently
   */
  this.putHeader = function(name, value) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_httpClientRequest["putHeader(java.lang.String,java.lang.String)"](name, value);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   If you send an HTTP request with the header <code>Expect</code> set to the value <code>100-continue</code>
   and the server responds with an interim HTTP response with a status code of <code>100</code> and a continue handler
   has been set using this method, then the <code>handler</code> will be called.
   <p>
   You can then continue to write data to the request body and later end it. This is normally used in conjunction with
   the {@link HttpClientRequest#sendHead} method to force the request header to be written before the request has ended.

   @public
   @param handler {function} 
   @return {HttpClientRequest} a reference to this, so the API can be used fluently
   */
  this.continueHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpClientRequest["continueHandler(io.vertx.core.Handler)"](handler);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Forces the head of the request to be written before {@link HttpClientRequest#end} is called on the request or any data is
   written to it.
   <p>
   This is normally used to implement HTTP 100-continue handling, see  for
   more information.

   @public

   @return {HttpClientRequest} a reference to this, so the API can be used fluently
   */
  this.sendHead = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpClientRequest["sendHead()"]();
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Same as {@link HttpClientRequest#end} but writes a String with the specified encoding

   @public
   @param chunk {string} 
   @param enc {string} 
   */
  this.end = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpClientRequest["end()"]();
    }  else if (__args.length === 1 && typeof __args[0] === 'string') {
      j_httpClientRequest["end(java.lang.String)"](__args[0]);
    }  else if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_httpClientRequest["end(io.vertx.core.buffer.Buffer)"](__args[0]._jdel);
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_httpClientRequest["end(java.lang.String,java.lang.String)"](__args[0], __args[1]);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set's the amount of time after which if the request does not return any data within the timeout period an
   TimeoutException will be passed to the exception handler (if provided) and
   the request will be closed.
   <p>
   Calling this method more than once has the effect of canceling any existing timeout and starting
   the timeout from scratch.

   @public
   @param timeoutMs {number} The quantity of time in milliseconds. 
   @return {HttpClientRequest} a reference to this, so the API can be used fluently
   */
  this.setTimeout = function(timeoutMs) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_httpClientRequest["setTimeout(long)"](timeoutMs);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_httpClientRequest;
};

// We export the Constructor function
module.exports = HttpClientRequest;