(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define("MyDoc", ["React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["MyDoc"] = factory(require("React"), require("ReactDOM"));
	else
		root["MyDoc"] = factory(root["React"], root["ReactDOM"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdateMyDoc"];
/******/ 	window["webpackHotUpdateMyDoc"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "3f596b48a802985c6495";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"pages": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonpMyDoc"] = window["webpackJsonpMyDoc"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([3,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/errorList/index.js":
/*!*******************************************!*\
  !*** ./src/components/errorList/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _Drawer = __webpack_require__(/*! ./Drawer.js */ \"./src/components/errorList/Drawer.js\");\n\nvar _Drawer2 = _interopRequireDefault(_Drawer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar css = {\n    title: {\n        fontSize: '20px',\n        marginBottom: '20px'\n    },\n    from: {\n        display: 'flex',\n        flexDirection: 'row',\n        flexWrap: 'nowrap'\n    },\n    item: {\n        display: 'flex',\n        flexDirection: 'row',\n        flexWrap: 'nowrap',\n        lineHeight: '32px'\n    },\n    list: {\n        margin: '40px 0'\n    }\n\n};\n\nvar columns = [{\n    title: '时间',\n    dataIndex: 'time',\n    key: 'time',\n    width: 100,\n    render: function render(text) {\n        return _react2.default.createElement(\n            'span',\n            { style: { width: '50px' } },\n            text\n        );\n    }\n}, {\n    title: 'userID',\n    dataIndex: 'uid',\n    width: 100,\n    render: function render(text) {\n        return _react2.default.createElement(\n            'span',\n            { style: { width: '50px' } },\n            text\n        );\n    }\n}, {\n    title: '内容',\n    dataIndex: 'content'\n}];\n\nvar data = [{\n    time: '21:00',\n    uid: '123',\n    content: '出错文件: https://qiniu-cdn7.jinxidao.com/dvb/frontv2/js/common.js?v=120181214112105; 错误说明: SecurityError: The operation is insecure.; 出错行:1'\n}, {\n    time: '21:01',\n    uid: '1g23',\n    content: 'John Brown'\n}, {\n    time: '21:02',\n    uid: '12d3',\n    content: 'John Brown'\n}, {\n    time: '21:40',\n    uid: '12s3',\n    content: 'John Brown'\n}];\n\nvar pagination = { position: 'bottom', total: 50 };\n\nvar List = function (_React$Component) {\n    _inherits(List, _React$Component);\n\n    function List(props) {\n        _classCallCheck(this, List);\n\n        var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));\n\n        _this.clickRow = _this.clickRow.bind(_this);\n        return _this;\n    }\n\n    _createClass(List, [{\n        key: 'clickRow',\n        value: function clickRow(index) {\n            console.log(index);\n            this.props.showDrawer();\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(antd.Table, { columns: columns, dataSource: data, size: 'small', pagination: pagination,\n                onRow: function onRow(record, index) {\n                    return {\n                        onClick: function onClick() {\n                            _this2.clickRow(index);\n                        }\n                    };\n                }\n            });\n        }\n    }]);\n\n    return List;\n}(_react2.default.Component);\n\nvar errorList = function (_React$Component2) {\n    _inherits(errorList, _React$Component2);\n\n    function errorList(props) {\n        _classCallCheck(this, errorList);\n\n        var _this3 = _possibleConstructorReturn(this, (errorList.__proto__ || Object.getPrototypeOf(errorList)).call(this, props));\n\n        _this3.state = {\n            visible: false\n        };\n        _this3.showDrawer = _this3.showDrawer.bind(_this3);\n        _this3.onClose = _this3.onClose.bind(_this3);\n        return _this3;\n    }\n\n    _createClass(errorList, [{\n        key: 'showDrawer',\n        value: function showDrawer() {\n            this.setState({\n                visible: true\n            });\n        }\n    }, {\n        key: 'onClose',\n        value: function onClose() {\n            this.setState({\n                visible: false\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'div',\n                    { style: css.from },\n                    _react2.default.createElement(\n                        'div',\n                        { style: css.item },\n                        _react2.default.createElement(\n                            'span',\n                            { style: { width: '100px' } },\n                            '\\u7528\\u6237Id:'\n                        ),\n                        _react2.default.createElement(antd.Input, { placeholder: '\\u7528\\u6237Id', style: { margin: '0 40px 0 10px' } })\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { style: css.item },\n                        _react2.default.createElement(\n                            'span',\n                            { style: { width: '100px' } },\n                            '\\u9519\\u8BEF\\u5185\\u5BB9:'\n                        ),\n                        _react2.default.createElement(antd.Input, { placeholder: '\\u9519\\u8BEF\\u5185\\u5BB9', style: { margin: '0 40px 0 10px' } })\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { style: css.item },\n                        _react2.default.createElement(\n                            antd.Button,\n                            { type: 'primary', icon: 'search' },\n                            '\\u641C\\u7D22'\n                        )\n                    )\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { style: css.list },\n                    _react2.default.createElement(List, { showDrawer: this.showDrawer })\n                ),\n                _react2.default.createElement(_Drawer2.default, { onClose: this.onClose, visible: this.state.visible })\n            );\n        }\n    }]);\n\n    return errorList;\n}(_react2.default.Component);\n\nmodule.exports = errorList;\n\n//# sourceURL=webpack://MyDoc/./src/components/errorList/index.js?");

/***/ }),

/***/ "./src/components/performance/index.js":
/*!*********************************************!*\
  !*** ./src/components/performance/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar css = {\n  title: {\n    borderLeft: '5px solid #5aa7fd',\n    paddingLeft: '10px',\n    marginBottom: '20px'\n  },\n  Group: {\n    display: 'flex',\n    flexDirection: 'row',\n    flexWrap: 'nowrap',\n    justifyContent: 'flex-end '\n  },\n  item: {\n    display: 'flex',\n    flexDirection: 'row',\n    flexWrap: 'nowrap',\n    marginBottom: '10px',\n\n    lineHeight: '30px',\n    padding: '0 10px',\n    justifyContent: 'space-between'\n  },\n  name: {\n    flex: 1\n\n  },\n  time: {\n    width: '100px',\n    padding: '0 0px 0 20px ',\n    display: 'inline-block',\n    textAlign: 'right'\n  },\n  listul: {\n    marginBottom: '50px'\n  },\n  lv1: {\n    background: '#cffdbb'\n  },\n  lv2: {\n    background: '#fde8bb'\n  },\n  lv3: {\n    background: '#ffb2b2'\n  }\n};\n\nvar Performance = function (_React$Component) {\n  _inherits(Performance, _React$Component);\n\n  function Performance(props) {\n    _classCallCheck(this, Performance);\n\n    return _possibleConstructorReturn(this, (Performance.__proto__ || Object.getPrototypeOf(Performance)).call(this, props));\n  }\n\n  _createClass(Performance, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { style: css.Performance, className: 'Performance' },\n        _react2.default.createElement(\n          'div',\n          { style: css.Group },\n          _react2.default.createElement(\n            antd.Radio.Group,\n            { defaultValue: 'a', buttonStyle: 'solid', size: 'small' },\n            _react2.default.createElement(\n              antd.Radio.Button,\n              { value: 'a' },\n              '\\u5F53\\u5929\\u5E73\\u5747\\u6570\\u636E'\n            ),\n            _react2.default.createElement(\n              antd.Radio.Button,\n              { value: 'b' },\n              '\\u6700\\u65B015\\u5206\\u949F\\u5185\\u6570\\u636E'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { style: css.title },\n          'CSS:'\n        ),\n        _react2.default.createElement(\n          'ul',\n          { style: css.listul },\n          _react2.default.createElement(\n            'li',\n            { style: css.item, className: 'lv1' },\n            _react2.default.createElement(\n              'div',\n              { style: css.name },\n              'http://tc-cdn01.jinxidao.com/dis/assets/css/searchlist2.css?v=20181213'\n            ),\n            _react2.default.createElement(\n              'span',\n              { style: css.time },\n              '0.23s'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            { style: css.item, className: 'lv1' },\n            _react2.default.createElement(\n              'div',\n              { style: css.name },\n              'http://tc-cdn01.jinxidao.com/dis/assets/css/searhttp://tc-cdn01.jinxidao.com/dis/assets/csshttp://tc-cdn01.jinxidao.com/dis/assets/csshttp://tc-cdn01.jinxidao.com/dis/assets/csschlist2.css?v=20181213'\n            ),\n            _react2.default.createElement(\n              'span',\n              { style: css.time },\n              '0.23s'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            { style: css.item, className: 'lv1' },\n            _react2.default.createElement(\n              'div',\n              { style: css.name },\n              'http://tc-cdn01.jinxidao.com/dis/assets/css/searchlist2.css?v=20181213'\n            ),\n            _react2.default.createElement(\n              'span',\n              { style: css.time },\n              '0.23s'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { style: css.title },\n          'JS:'\n        ),\n        _react2.default.createElement(\n          'ul',\n          { style: css.listul },\n          _react2.default.createElement(\n            'li',\n            { style: css.item, className: 'lv1' },\n            _react2.default.createElement(\n              'div',\n              { style: css.name },\n              'http://tc-cdn01.jinxidao.com/dis/assets/css/searchlist2.css?v=20181213'\n            ),\n            _react2.default.createElement(\n              'span',\n              { style: css.time },\n              '0.23s'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            { style: css.item, className: 'lv2' },\n            _react2.default.createElement(\n              'div',\n              { style: css.name },\n              'http://tc-cdn01.jinxidao.com/dis/assets/css/searhttp://tc-cdn01.jinxidao.com/dis/assets/csshttp://tc-cdn01.jinxidao.com/dis/assets/csshttp://tc-cdn01.jinxidao.com/dis/assets/csschlist2.css?v=20181213'\n            ),\n            _react2.default.createElement(\n              'span',\n              { style: css.time },\n              '0.23s'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            { style: css.item, className: 'lv3' },\n            _react2.default.createElement(\n              'div',\n              { style: css.name },\n              'http://tc-cdn01.jinxidao.com/dis/assets/css/searchlist2.css?v=20181213'\n            ),\n            _react2.default.createElement(\n              'span',\n              { style: css.time },\n              '0.23s'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { style: css.title },\n          'XHR:'\n        ),\n        _react2.default.createElement(\n          'ul',\n          { style: css.listul },\n          _react2.default.createElement(\n            'li',\n            { style: css.item },\n            _react2.default.createElement(\n              'div',\n              { style: css.name },\n              'http://tc-cdn01.jinxidao.com/dis/assets/css/searchlist2.css?v=20181213'\n            ),\n            _react2.default.createElement(\n              'span',\n              { style: css.time },\n              '0.23s'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            { style: css.item },\n            _react2.default.createElement(\n              'div',\n              { style: css.name },\n              'http://tc-cdn01.jinxidao.com/dis/assets/css/searhttp://tc-cdn01.jinxidao.com/dis/assets/csshttp://tc-cdn01.jinxidao.com/dis/assets/csshttp://tc-cdn01.jinxidao.com/dis/assets/csschlist2.css?v=20181213'\n            ),\n            _react2.default.createElement(\n              'span',\n              { style: css.time },\n              '0.23s'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            { style: css.item },\n            _react2.default.createElement(\n              'div',\n              { style: css.name },\n              'http://tc-cdn01.jinxidao.com/dis/assets/css/searchlist2.css?v=20181213'\n            ),\n            _react2.default.createElement(\n              'span',\n              { style: css.time },\n              '0.23s'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Performance;\n}(_react2.default.Component);\n\nmodule.exports = Performance;\n\n//# sourceURL=webpack://MyDoc/./src/components/performance/index.js?");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _head = __webpack_require__(/*! components/head */ \"./src/components/head/index.js\");\n\nvar _head2 = _interopRequireDefault(_head);\n\nvar _nav = __webpack_require__(/*! components/nav */ \"./src/components/nav/index.js\");\n\nvar _nav2 = _interopRequireDefault(_nav);\n\nvar _pagelist = __webpack_require__(/*! ./pagelist.js */ \"./src/pages/pagelist.js\");\n\nvar _pagelist2 = _interopRequireDefault(_pagelist);\n\nvar _main = __webpack_require__(/*! ./main.js */ \"./src/pages/main.js\");\n\nvar _main2 = _interopRequireDefault(_main);\n\n__webpack_require__(/*! ./index.scss */ \"./src/pages/index.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar css = {\n    main: {\n        margin: '20px 0',\n        display: 'flex',\n        flexDirection: 'row',\n        flexWrap: 'nowrap',\n        paddingTop: '80px',\n        minWidth: '1400px'\n    },\n    indexMain: {\n        minWidth: '700px',\n        flex: 1,\n        padding: '0px 50px'\n    }\n};\n\nvar App = function (_React$Component) {\n    _inherits(App, _React$Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n    }\n\n    _createClass(App, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_head2.default, null),\n                _react2.default.createElement(\n                    'div',\n                    { style: css.main },\n                    _react2.default.createElement(_nav2.default, null),\n                    _react2.default.createElement(_pagelist2.default, null),\n                    _react2.default.createElement(\n                        'div',\n                        { style: { width: '1100px' } },\n                        _react2.default.createElement(_main2.default, null)\n                    )\n                )\n            );\n        }\n    }]);\n\n    return App;\n}(_react2.default.Component);\n\n_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('root'));\n\n//# sourceURL=webpack://MyDoc/./src/pages/index.js?");

/***/ }),

/***/ "./src/pages/index.scss":
/*!******************************!*\
  !*** ./src/pages/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://MyDoc/./src/pages/index.scss?");

/***/ }),

/***/ "./src/pages/main.js":
/*!***************************!*\
  !*** ./src/pages/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _head = __webpack_require__(/*! components/head */ \"./src/components/head/index.js\");\n\nvar _head2 = _interopRequireDefault(_head);\n\nvar _nav = __webpack_require__(/*! components/nav */ \"./src/components/nav/index.js\");\n\nvar _nav2 = _interopRequireDefault(_nav);\n\nvar _pagelist = __webpack_require__(/*! ./pagelist.js */ \"./src/pages/pagelist.js\");\n\nvar _pagelist2 = _interopRequireDefault(_pagelist);\n\nvar _todayData = __webpack_require__(/*! components/todayData */ \"./src/components/todayData/index.js\");\n\nvar _todayData2 = _interopRequireDefault(_todayData);\n\nvar _LineCharts = __webpack_require__(/*! components/LineCharts */ \"./src/components/LineCharts/index.js\");\n\nvar _LineCharts2 = _interopRequireDefault(_LineCharts);\n\nvar _sevenLineCharts = __webpack_require__(/*! components/sevenLineCharts */ \"./src/components/sevenLineCharts/index.js\");\n\nvar _sevenLineCharts2 = _interopRequireDefault(_sevenLineCharts);\n\nvar _errorList = __webpack_require__(/*! components/errorList */ \"./src/components/errorList/index.js\");\n\nvar _errorList2 = _interopRequireDefault(_errorList);\n\nvar _performance = __webpack_require__(/*! components/performance */ \"./src/components/performance/index.js\");\n\nvar _performance2 = _interopRequireDefault(_performance);\n\n__webpack_require__(/*! ./index.scss */ \"./src/pages/index.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar css = {\n    main: {\n        margin: '0px 0',\n        padding: '0 30px',\n        width: '1100px'\n    },\n    indexMain: {\n        minWidth: '700px',\n        flex: 1,\n        padding: '0px 50px'\n    },\n    daysAnalytics: {\n        margin: '20px 0',\n        border: '1px solid #efefef',\n        boxShadow: '0 0 5px #efefef'\n    },\n    LineCharts: {\n        flex: 1\n    }\n};\n\nvar Main = function (_React$Component) {\n    _inherits(Main, _React$Component);\n\n    function Main(props) {\n        _classCallCheck(this, Main);\n\n        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));\n    }\n\n    _createClass(Main, [{\n        key: 'render',\n        value: function render() {\n            var c_width = window.innerWidth - 1000;\n            c_width = c_width <= 700 ? 700 : c_width;\n            return _react2.default.createElement(\n                'div',\n                { style: css.main },\n                _react2.default.createElement(_todayData2.default, null),\n                _react2.default.createElement(\n                    'div',\n                    { style: css.daysAnalytics },\n                    _react2.default.createElement(\n                        antd.Tabs,\n                        { defaultActiveKey: '1' },\n                        _react2.default.createElement(\n                            antd.Tabs.TabPane,\n                            { tab: '\\u8D44\\u6E90\\u5206\\u6790', key: '1' },\n                            _react2.default.createElement(\n                                'div',\n                                { style: { padding: '10px 20px' } },\n                                _react2.default.createElement(_performance2.default, null)\n                            )\n                        ),\n                        _react2.default.createElement(\n                            antd.Tabs.TabPane,\n                            { tab: '\\u9519\\u8BEF\\u5217\\u8868', key: '2' },\n                            _react2.default.createElement(\n                                'div',\n                                { style: { padding: '20px' } },\n                                _react2.default.createElement(_errorList2.default, null)\n                            )\n                        ),\n                        _react2.default.createElement(\n                            antd.Tabs.TabPane,\n                            { tab: '\\u6570\\u636E\\u8D70\\u52BF', key: '3' },\n                            _react2.default.createElement(\n                                'div',\n                                { style: { padding: '20px' } },\n                                _react2.default.createElement(\n                                    'div',\n                                    { style: css.LineCharts },\n                                    _react2.default.createElement(_LineCharts2.default, { c_width: c_width, hideTitle: true })\n                                )\n                            )\n                        ),\n                        _react2.default.createElement(\n                            antd.Tabs.TabPane,\n                            { tab: '\\u6700\\u8FD17\\u5929\\u6570\\u636E\\u8D8B\\u52BF', key: '4' },\n                            _react2.default.createElement(\n                                'div',\n                                { style: { padding: '20px' } },\n                                _react2.default.createElement(\n                                    'div',\n                                    { style: css.LineCharts },\n                                    _react2.default.createElement(_sevenLineCharts2.default, { c_width: c_width, hideTitle: true })\n                                )\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Main;\n}(_react2.default.Component);\n\nmodule.exports = Main;\n\n//# sourceURL=webpack://MyDoc/./src/pages/main.js?");

/***/ }),

/***/ "./src/pages/pagelist.js":
/*!*******************************!*\
  !*** ./src/pages/pagelist.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar css = {\n    main: {\n\n        marginLeft: '10px'\n    },\n    bar: {\n        margin: '0px 0',\n        display: 'flex',\n        flexDirection: 'row',\n        flexWrap: 'nowrap',\n        background: '#f3f3f3',\n        padding: '0 20px',\n        height: '60px',\n        lineHeight: '60px',\n        alignItems: 'center',\n        boxShadow: '0 2px 2px #efefef',\n        width: '500px'\n\n    },\n    item: {\n        marginRight: '10px',\n        width: '50px',\n        border: '1px solid #d5dbe0',\n        height: '30px',\n        lineHeight: '30px',\n        background: '#fff',\n        textAlign: 'center',\n        borderRadius: '3px',\n        cursor: 'pointer'\n    },\n    itemAct: {\n        border: '1px solid rgb(63, 170, 240)'\n    },\n    List: {\n        padding: '20px 0'\n    },\n    ListItem: {\n        display: 'flex',\n        height: '40px',\n        lineHeight: '40px',\n        flexDirection: 'row',\n        flexWrap: 'nowrap',\n        borderBottom: '1px solid #eee',\n        padding: '0 0px',\n        position: 'relative'\n    },\n    ListItemTitle: {\n        overflow: 'hidden',\n        textOverflow: 'ellipsis',\n        whiteSpace: 'nowrap',\n        padding: '0 10px',\n        position: 'absolute',\n        left: 0,\n        top: 0,\n        zIndex: 10\n    },\n    ListItemUrl: {\n        padding: '0 10px',\n        width: '355px',\n        overflow: 'hidden',\n        textOverflow: 'ellipsis',\n        whiteSpace: 'nowrap',\n        position: 'absolute',\n        left: '140px',\n        top: 0\n    }\n};\n\nvar Item = function (_React$Component) {\n    _inherits(Item, _React$Component);\n\n    function Item(props) {\n        _classCallCheck(this, Item);\n\n        return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));\n    }\n\n    _createClass(Item, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { style: css.ListItem, className: 'ListItem' },\n                _react2.default.createElement(\n                    'div',\n                    { style: css.ListItemTitle, className: 'ListItemTitle', title: '\\u4E91\\u5BA2\\u8D5Eddd\\u524D\\u7AEF\\u76D1\\u63A7' },\n                    '\\u4E91\\u5BA2\\u8D5E-\\u4E91\\u5BA2\\u8D5Eddd\\u524D\\u7AEF\\u76D1\\u63A7'\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { style: css.ListItemUrl, title: '\\u4E91\\u5BA2\\u8D5Eddd\\u524D\\u7AEF\\u76D1\\u63A7' },\n                    'https://www.runoob.com/w3cnote/flex-grammar.html'\n                )\n            );\n        }\n    }]);\n\n    return Item;\n}(_react2.default.Component);\n\nvar List = function (_React$Component2) {\n    _inherits(List, _React$Component2);\n\n    function List(props) {\n        _classCallCheck(this, List);\n\n        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));\n    }\n\n    _createClass(List, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { style: css.List },\n                _react2.default.createElement(Item, null),\n                _react2.default.createElement(Item, null),\n                _react2.default.createElement(Item, null),\n                _react2.default.createElement(Item, null),\n                _react2.default.createElement(Item, null),\n                _react2.default.createElement(Item, null),\n                _react2.default.createElement(Item, null),\n                _react2.default.createElement(Item, null),\n                _react2.default.createElement(Item, null),\n                _react2.default.createElement(Item, null)\n            );\n        }\n    }]);\n\n    return List;\n}(_react2.default.Component);\n\nvar Pagelist = function (_React$Component3) {\n    _inherits(Pagelist, _React$Component3);\n\n    function Pagelist(props) {\n        _classCallCheck(this, Pagelist);\n\n        var _this3 = _possibleConstructorReturn(this, (Pagelist.__proto__ || Object.getPrototypeOf(Pagelist)).call(this, props));\n\n        _this3.onChange = _this3.onChange.bind(_this3);\n        return _this3;\n    }\n\n    _createClass(Pagelist, [{\n        key: 'onChange',\n        value: function onChange(date, dateString) {}\n    }, {\n        key: 'render',\n        value: function render() {\n            var actCss = Object.assign({}, css.item, css.itemAct);\n            return _react2.default.createElement(\n                'div',\n                { style: css.main },\n                _react2.default.createElement(\n                    'div',\n                    { style: css.bar },\n                    _react2.default.createElement(\n                        'div',\n                        { style: actCss },\n                        '\\u9519\\u8BEF'\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { style: css.item },\n                        'pv'\n                    ),\n                    _react2.default.createElement(antd.DatePicker, { onChange: this.onChange, style: { width: '200px', marginRight: '10px' } }),\n                    _react2.default.createElement(antd.Input.Search, {\n                        placeholder: '\\u8F93\\u5165url\\u641C\\u7D22',\n                        onSearch: function onSearch(value) {\n                            return console.log(value);\n                        },\n                        style: { width: '240px' }\n                    })\n                ),\n                _react2.default.createElement(List, null),\n                _react2.default.createElement(\n                    'div',\n                    { style: { textAlign: 'right' } },\n                    _react2.default.createElement(antd.Pagination, { size: 'small', total: 50 })\n                )\n            );\n        }\n    }]);\n\n    return Pagelist;\n}(_react2.default.Component);\n\nmodule.exports = Pagelist;\n\n//# sourceURL=webpack://MyDoc/./src/pages/pagelist.js?");

/***/ }),

/***/ 3:
/*!********************************************!*\
  !*** multi ./config/../src/pages/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/czhih/Desktop/work/analytics/main/config/../src/pages/index.js */\"./src/pages/index.js\");\n\n\n//# sourceURL=webpack://MyDoc/multi_./config/../src/pages/index.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://MyDoc/external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;\n\n//# sourceURL=webpack://MyDoc/external_%22ReactDOM%22?");

/***/ })

/******/ });
});