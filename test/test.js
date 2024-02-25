/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var AccessorArray = require( '@stdlib/array-base-accessor' );
var Float64Array = require( '@stdlib/array-float64' );
var Int32Array = require( '@stdlib/array-int32' );
var isArray = require( '@stdlib/assert-is-array' );
var isAccessorArray = require( '@stdlib/array-base-assert-is-accessor-array' );
var isFloat64Array = require( '@stdlib/assert-is-float64array' );
var isInt32Array = require( '@stdlib/assert-is-int32array' );
var reverse = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reverse, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function reverses an array-like object (generic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 1, 2, 3 ];
	expected = [ 3, 2, 1 ];
	actual = reverse( x );

	t.strictEqual( actual, x, 'returns same reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 2, 3 ];
	expected = [ 3, 2 ];
	actual = reverse( x );

	t.strictEqual( actual, x, 'returns same reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 2 ];
	expected = [ 2 ];
	actual = reverse( x );

	t.strictEqual( actual, x, 'returns same reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [];
	expected = [];
	actual = reverse( x );

	t.strictEqual( actual, x, 'returns same reference' );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function reverses an array-like object (float64)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	expected = new Float64Array( [ 3.0, 2.0, 1.0 ] );
	actual = reverse( x );

	t.strictEqual( actual, x, 'returns same reference' );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 2.0, 3.0 ] );
	expected = new Float64Array( [ 3.0, 2.0 ] );
	actual = reverse( x );

	t.strictEqual( actual, x, 'returns same reference' );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 2.0 ] );
	expected = new Float64Array( [ 2.0 ] );
	actual = reverse( x );

	t.strictEqual( actual, x, 'returns same reference' );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [] );
	expected = new Float64Array( [] );
	actual = reverse( x );

	t.strictEqual( actual, x, 'returns same reference' );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function reverses an array-like object (int32)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Int32Array( [ 1, 2, 3 ] );
	expected = new Int32Array( [ 3, 2, 1 ] );
	actual = reverse( x );

	t.strictEqual( actual, x, 'returns same reference' );
	t.strictEqual( isInt32Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2 ] );
	expected = new Int32Array( [ 2, 1 ] );
	actual = reverse( x );

	t.strictEqual( actual, x, 'returns same reference' );
	t.strictEqual( isInt32Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1 ] );
	expected = new Int32Array( [ 1 ] );
	actual = reverse( x );

	t.strictEqual( actual, x, 'returns same reference' );
	t.strictEqual( isInt32Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [] );
	expected = new Int32Array( [] );
	actual = reverse( x );

	t.strictEqual( actual, x, 'returns same reference' );
	t.strictEqual( isInt32Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function reverses an array-like object (accessors)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new AccessorArray( [ 1, 2, 3, 4 ] );
	expected = [ 4, 3, 2, 1 ];
	actual = reverse( x );

	t.strictEqual( actual, x, 'returns same reference' );
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	deepEqual( actual, expected );

	x = new AccessorArray( [ 1, 2, 3 ] );
	expected = [ 3, 2, 1 ];
	actual = reverse( x );

	t.strictEqual( actual, x, 'returns same reference' );
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	deepEqual( actual, expected );

	x = new AccessorArray( [ 2, 3 ] );
	expected = [ 3, 2 ];
	actual = reverse( x );

	t.strictEqual( actual, x, 'returns same reference' );
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	deepEqual( actual, expected );

	x = new AccessorArray( [ 3 ] );
	expected = [ 3 ];
	actual = reverse( x );

	t.strictEqual( actual, x, 'returns same reference' );
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	deepEqual( actual, expected );

	x = new AccessorArray( [] );
	expected = [];
	actual = reverse( x );

	t.strictEqual( actual, x, 'returns same reference' );
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	deepEqual( actual, expected );

	t.end();

	function deepEqual( actual, expected ) {
		var i;
		for ( i = 0; i < expected.length; i++ ) {
			t.strictEqual( actual.get( i ), expected[ i ], 'returns expected value for element ' + i );
		}
	}
});

tape( 'the function reverses an array-like object (array-like)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	expected = {
		'length': 4,
		'0': 4,
		'1': 3,
		'2': 2,
		'3': 1
	};
	actual = reverse( x );

	t.strictEqual( actual, x, 'returns same reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 3,
		'0': 1,
		'1': 2,
		'2': 3
	};
	expected = {
		'length': 3,
		'0': 3,
		'1': 2,
		'2': 1
	};
	actual = reverse( x );

	t.strictEqual( actual, x, 'returns same reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 2,
		'0': 1,
		'1': 2
	};
	expected = {
		'length': 2,
		'0': 2,
		'1': 1
	};
	actual = reverse( x );

	t.strictEqual( actual, x, 'returns same reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 1,
		'0': 1
	};
	expected = {
		'length': 1,
		'0': 1
	};
	actual = reverse( x );

	t.strictEqual( actual, x, 'returns same reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 0
	};
	expected = {
		'length': 0
	};
	actual = reverse( x );

	t.strictEqual( actual, x, 'returns same reference' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
