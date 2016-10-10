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

/** @module vertx-js/future */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JFuture = io.vertx.core.Future;

/**
 Represents the result of an action that may, or may not, have occurred yet.
 <p>

 @class
*/
var Future = function(j_val) {

  var j_future = j_val;
  var that = this;

  /**
   Has the future completed?
   <p>
   It's completed if it's either succeeded or failed.

   @public

   @return {boolean} true if completed, false if not
   */
  this.isComplete = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_future["isComplete()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set a handler for the result.
   <p>
   If the future has already been completed it will be called immediately. Otherwise it will be called when the
   future is completed.

   @public
   @param handler {function} the Handler that will be called with the result 
   @return {Future} a reference to this, so it can be used fluently
   */
  this.setHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_future["setHandler(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnTypeUnknown(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set the result. Any handler will be called, if there is one, and the future will be marked as completed.

   @public
   @param result {Object} the result 
   */
  this.complete = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_future["complete()"]();
    }  else if (__args.length === 1 && true) {
      j_future["complete(java.lang.Object)"](utils.convParamTypeUnknown(__args[0]));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set the failure. Any handler will be called, if there is one, and the future will be marked as completed.

   @public
   @param failureMessage {string} the failure message 
   */
  this.fail = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object') {
      j_future["fail(java.lang.Throwable)"](utils.convParamThrowable(__args[0]));
    }  else if (__args.length === 1 && typeof __args[0] === 'string') {
      j_future["fail(java.lang.String)"](__args[0]);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   The result of the operation. This will be null if the operation failed.

   @public

   @return {Object} the result or null if the operation failed.
   */
  this.result = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnTypeUnknown(j_future["result()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   A Throwable describing failure. This will be null if the operation succeeded.

   @public

   @return {todo} the cause or null if the operation succeeded.
   */
  this.cause = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnThrowable(j_future["cause()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Did it succeed?

   @public

   @return {boolean} true if it succeded or false otherwise
   */
  this.succeeded = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_future["succeeded()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Did it fail?

   @public

   @return {boolean} true if it failed or false otherwise
   */
  this.failed = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_future["failed()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Compose this future with another future.
  
   When this future succeeds, the handler will be called with the value.
  
   When this future fails, the failure will be propagated to the <code>next</code> future.

   @public
   @param handler {function} the handler 
   @param next {Future} the next future 
   */
  this.compose = function(handler, next) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'function' && typeof __args[1] === 'object' && __args[1]._jdel) {
      j_future["compose(io.vertx.core.Handler,io.vertx.core.Future)"](function(jVal) {
      handler(utils.convReturnTypeUnknown(jVal));
    }, next._jdel);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   @return an handler completing this future

   @public

   @return {function}
   */
  this.completer = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedcompleter == null) {
        that.cachedcompleter = utils.convReturnHandlerAsyncResult(j_future["completer()"](), function(result) { return utils.convParamTypeUnknown(result); });
      }
      return that.cachedcompleter;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_future;
};

/**
 Create a future that hasn't completed yet

 @memberof module:vertx-js/future

 @return {Future} the future
 */
Future.future = function() {
  var __args = arguments;
  if (__args.length === 0) {
    return utils.convReturnVertxGen(JFuture["future()"](), Future);
  } else throw new TypeError('function invoked with invalid arguments');
};

/**
 Created a succeeded future with the specified result.

 @memberof module:vertx-js/future
 @param result {Object} the result 
 @return {Future} the future
 */
Future.succeededFuture = function() {
  var __args = arguments;
  if (__args.length === 0) {
    return utils.convReturnVertxGen(JFuture["succeededFuture()"](), Future);
  }else if (__args.length === 1 && true) {
    return utils.convReturnVertxGen(JFuture["succeededFuture(java.lang.Object)"](utils.convParamTypeUnknown(__args[0])), Future);
  } else throw new TypeError('function invoked with invalid arguments');
};

/**
 Create a failed future with the specified failure message.

 @memberof module:vertx-js/future
 @param failureMessage {string} the failure message 
 @return {Future} the future
 */
Future.failedFuture = function(failureMessage) {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'string') {
    return utils.convReturnVertxGen(JFuture["failedFuture(java.lang.String)"](failureMessage), Future);
  } else throw new TypeError('function invoked with invalid arguments');
};

// We export the Constructor function
module.exports = Future;