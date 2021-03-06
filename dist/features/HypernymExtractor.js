"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

/**
 * HypernymExtractor - extracts hypernyms - words and phrases that are entailed by the given text.
 *
 * A hypernym is described by a regular expression, a feature string, and a confidence score.
 * For example: if regexp=/no (.*)/ and feature="without $1", then, 
 *   if the sample contains "no car", the extractor will add the feature "without car", with the given confidence score (usually a number from 0 to 1).
 * 
 * Adds hypernym features to the given feature-vector.
 * 
 * @param hypernyms - an array of objects {regexp: /regexp/g, feature: "feature", confidence: confidence}
 * @param sample - a string.
 * @param features an initial hash of features (optional). The hypernym features will be added to that array.
 */
function _default(hypernyms) {
  return function (sample, features) {
    hypernyms.forEach(function (hypernym) {
      if (!(hypernym.regexp instanceof RegExp)) {
        hypernym.regexp = new RegExp(hypernym.regexp, "gi");
      }

      if (hypernym.regexp.test(sample)) {
        features[hypernym.feature] = hypernym.confidence;
      }
    });
  };
}

;