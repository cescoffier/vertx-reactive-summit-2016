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

/** @module vertx-js/http_server_response */
var utils = require('vertx-js/util/utils');
var Buffer = require('vertx-js/buffer');
var WriteStream = require('vertx-js/write_stream');
var MultiMap = require('vertx-js/multi_map');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JHttpServerResponse = io.vertx.core.http.HttpServerResponse;

/**
 Represents a server-side HTTP response.
 <p>
 An instance of this is created and associated to every instance of
 @class
*/
var HttpServerResponse = function(j_val) {

  var j_httpServerResponse = j_val;
  var that = this;
  WriteStream.call(this, j_val);

  /**
   This will return <code>true</code> if there are more bytes in the write queue than the value set using {@link HttpServerResponse#setWriteQueueMaxSize}

   @public

   @return {boolean} true if write queue is full
   */
  this.writeQueueFull = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerResponse["writeQueueFull()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {HttpServerResponse}
   */
  this.exceptionHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpServerResponse["exceptionHandler(io.vertx.core.Handler)"](handler == null ? null : function(jVal) {
      handler(utils.convReturnThrowable(jVal));
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Write a String to the response body, encoded using the encoding <code>enc</code>.

   @public
   @param chunk {string} the string to write 
   @param enc {string} the encoding to use 
   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.write = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_httpServerResponse["write(io.vertx.core.buffer.Buffer)"](__args[0]._jdel);
      return that;
    }  else if (__args.length === 1 && typeof __args[0] === 'string') {
      j_httpServerResponse["write(java.lang.String)"](__args[0]);
      return that;
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_httpServerResponse["write(java.lang.String,java.lang.String)"](__args[0], __args[1]);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param maxSize {number} 
   @return {HttpServerResponse}
   */
  this.setWriteQueueMaxSize = function(maxSize) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_httpServerResponse["setWriteQueueMaxSize(int)"](maxSize);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {HttpServerResponse}
   */
  this.drainHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpServerResponse["drainHandler(io.vertx.core.Handler)"](handler);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   @return the HTTP status code of the response. The default is <code>200</code> representing <code>OK</code>.

   @public

   @return {number}
   */
  this.getStatusCode = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerResponse["getStatusCode()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set the status code. If the status message hasn't been explicitly set, a default status message corresponding
   to the code will be looked-up and used.

   @public
   @param statusCode {number} 
   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.setStatusCode = function(statusCode) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_httpServerResponse["setStatusCode(int)"](statusCode);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   @return the HTTP status message of the response. If this is not specified a default value will be used depending on what
   {@link HttpServerResponse#setStatusCode} has been set to.

   @public

   @return {string}
   */
  this.getStatusMessage = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerResponse["getStatusMessage()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set the status message

   @public
   @param statusMessage {string} 
   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.setStatusMessage = function(statusMessage) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_httpServerResponse["setStatusMessage(java.lang.String)"](statusMessage);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   If <code>chunked</code> is <code>true</code>, this response will use HTTP chunked encoding, and each call to write to the body
   will correspond to a new HTTP chunk sent on the wire.
   <p>
   If chunked encoding is used the HTTP header <code>Transfer-Encoding</code> with a value of <code>Chunked</code> will be
   automatically inserted in the response.
   <p>
   If <code>chunked</code> is <code>false</code>, this response will not use HTTP chunked encoding, and therefore the total size
   of any data that is written in the respone body must be set in the <code>Content-Length</code> header <b>before</b> any
   data is written out.
   <p>
   An HTTP chunked response is typically used when you do not know the total size of the request body up front.

   @public
   @param chunked {boolean} 
   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.setChunked = function(chunked) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      j_httpServerResponse["setChunked(boolean)"](chunked);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   @return is the response chunked?

   @public

   @return {boolean}
   */
  this.isChunked = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerResponse["isChunked()"]();
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
        that.cachedheaders = utils.convReturnVertxGen(j_httpServerResponse["headers()"](), MultiMap);
      }
      return that.cachedheaders;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Put an HTTP header

   @public
   @param name {string} the header name 
   @param value {string} the header value. 
   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.putHeader = function(name, value) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_httpServerResponse["putHeader(java.lang.String,java.lang.String)"](name, value);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   @return The HTTP trailers

   @public

   @return {MultiMap}
   */
  this.trailers = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedtrailers == null) {
        that.cachedtrailers = utils.convReturnVertxGen(j_httpServerResponse["trailers()"](), MultiMap);
      }
      return that.cachedtrailers;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Put an HTTP trailer

   @public
   @param name {string} the trailer name 
   @param value {string} the trailer value 
   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.putTrailer = function(name, value) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_httpServerResponse["putTrailer(java.lang.String,java.lang.String)"](name, value);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set a close handler for the response. This will be called if the underlying connection closes before the response
   is complete.

   @public
   @param handler {function} the handler 
   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.closeHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpServerResponse["closeHandler(io.vertx.core.Handler)"](handler);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Used to write an interim 100 Continue response to signify that the client should send the rest of the request.
   Must only be used if the request contains an "Expect:100-Continue" header

   @public

   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.writeContinue = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpServerResponse["writeContinue()"]();
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Same as {@link HttpServerResponse#end} but writes a String with the specified encoding before ending the response.

   @public
   @param chunk {string} the string to write before ending the response 
   @param enc {string} the encoding to use 
   */
  this.end = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpServerResponse["end()"]();
    }  else if (__args.length === 1 && typeof __args[0] === 'string') {
      j_httpServerResponse["end(java.lang.String)"](__args[0]);
    }  else if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_httpServerResponse["end(io.vertx.core.buffer.Buffer)"](__args[0]._jdel);
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_httpServerResponse["end(java.lang.String,java.lang.String)"](__args[0], __args[1]);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link HttpServerResponse#sendFile} but providing a handler which will be notified once the file has been
   completely written to the wire.

   @public
   @param filename {string} path to the file to serve 
   @param offset {number} the offset to serve from 
   @param length {number} the length to serve to 
   @param resultHandler {function} handler that will be called on completion 
   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.sendFile = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_httpServerResponse["sendFile(java.lang.String)"](__args[0]);
      return that;
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] ==='number') {
      j_httpServerResponse["sendFile(java.lang.String,long)"](__args[0], __args[1]);
      return that;
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_httpServerResponse["sendFile(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
      if (ar.succeeded()) {
        __args[1](null, null);
      } else {
        __args[1](null, ar.cause());
      }
    });
      return that;
    }  else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] ==='number') {
      j_httpServerResponse["sendFile(java.lang.String,long,long)"](__args[0], __args[1], __args[2]);
      return that;
    }  else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      j_httpServerResponse["sendFile(java.lang.String,long,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
      if (ar.succeeded()) {
        __args[2](null, null);
      } else {
        __args[2](null, ar.cause());
      }
    });
      return that;
    }  else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] ==='number' && typeof __args[3] === 'function') {
      j_httpServerResponse["sendFile(java.lang.String,long,long,io.vertx.core.Handler)"](__args[0], __args[1], __args[2], function(ar) {
      if (ar.succeeded()) {
        __args[3](null, null);
      } else {
        __args[3](null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Close the underlying TCP connection corresponding to the request.

   @public

   */
  this.close = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpServerResponse["close()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   @return has the response already ended?

   @public

   @return {boolean}
   */
  this.ended = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerResponse["ended()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   @return has the underlying TCP connection corresponding to the request already been closed?

   @public

   @return {boolean}
   */
  this.closed = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerResponse["closed()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   @return have the headers for the response already been written?

   @public

   @return {boolean}
   */
  this.headWritten = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerResponse["headWritten()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Provide a handler that will be called just before the headers are written to the wire.<p>
   This provides a hook allowing you to add any more headers or do any more operations before this occurs.

   @public
   @param handler {function} the handler 
   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.headersEndHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpServerResponse["headersEndHandler(io.vertx.core.Handler)"](handler);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Provide a handler that will be called just before the last part of the body is written to the wire
   and the response is ended.<p>
   This provides a hook allowing you to do any more operations before this occurs.

   @public
   @param handler {function} the handler 
   @return {HttpServerResponse} a reference to this, so the API can be used fluently
   */
  this.bodyEndHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_httpServerResponse["bodyEndHandler(io.vertx.core.Handler)"](handler);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   @return the total number of bytes written for the body of the response.

   @public

   @return {number}
   */
  this.bytesWritten = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_httpServerResponse["bytesWritten()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_httpServerResponse;
};

// We export the Constructor function
module.exports = HttpServerResponse;