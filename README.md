<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# zxdy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Divide elements of a double-precision complex floating-point strided array `x` by the corresponding elements of a double-precision complex floating-point strided array `y` and assign the results to `y`.

<section class="intro">

This BLAS extension implements the operation

<!-- <equation class="equation" label="eq:xdy" align="center" raw="\mathbf{y} = \mathbf{x} \oslash \mathbf{y}" alt="Equation for xdy operation."> -->

```math
\mathbf{y} = \mathbf{x} \oslash \mathbf{y}
```

<!-- <div class="equation" align="center" data-raw-text="\mathbf{y} = \mathbf{x} \oslash \mathbf{y}" data-equation="eq:xdy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@c4d46b7cc46098480b669a07e94be382a39cff2e/lib/node_modules/@stdlib/blas/ext/base/zxdy/docs/img/equation_xdy.svg" alt="Equation for xdy operation.">
    <br>
</div> -->

<!-- </equation> -->

where `⊘` denotes the [Hadamard division][hadamard-division].

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-zxdy
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var zxdy = require( '@stdlib/blas-ext-base-zxdy' );
```

#### zxdy( N, x, strideX, y, strideY )

Divides elements of a double-precision complex floating-point strided array `x` by the corresponding elements of a double-precision complex floating-point strided array `y` and assigns the results to `y`.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 4.0, 6.0, 12.0, 8.0, 16.0, 8.0 ] );
var y = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 4.0, 4.0 ] );

zxdy( x.length, x, 1, y, 1 );
// y => <Complex128Array>[ 5.0, 1.0, 5.0, -1.0, 3.0, -1.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: stride length for `x`.
-   **y**: output [`Complex128Array`][@stdlib/array/complex128].
-   **strideY**: stride length for `y`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to divide every other element of `x` by every other element of `y`:

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 4.0, 6.0, 100.0, 200.0, 12.0, 8.0, 300.0, 400.0 ] );
var y = new Complex128Array( [ 1.0, 1.0, 500.0, 600.0, 2.0, 2.0, 700.0, 800.0 ] );

zxdy( 2, x, 2, y, 2 );
// y => <Complex128Array>[ 5.0, 1.0, 500.0, 600.0, 5.0, -1.0, 700.0, 800.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

// Initial arrays...
var x0 = new Complex128Array( [ 100.0, 200.0, 4.0, 6.0, 12.0, 8.0, 16.0, 8.0, 300.0, 400.0 ] );
var y0 = new Complex128Array( [ 500.0, 600.0, 700.0, 800.0, 1.0, 1.0, 2.0, 2.0, 4.0, 4.0 ] );

// Create offset views...
var x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Complex128Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

zxdy( 3, x1, 1, y1, 1 );
// y0 => <Complex128Array>[ 500.0, 600.0, 700.0, 800.0, 5.0, 1.0, 5.0, -1.0, 3.0, -1.0 ]
```

#### zxdy.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Divides elements of a double-precision complex floating-point strided array `x` by the corresponding elements of a double-precision complex floating-point strided array `y` and assigns the results to `y` using alternative indexing semantics.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 4.0, 6.0, 12.0, 8.0, 16.0, 8.0 ] );
var y = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 4.0, 4.0 ] );

zxdy.ndarray( x.length, x, 1, 0, y, 1, 0 );
// y => <Complex128Array>[ 5.0, 1.0, 5.0, -1.0, 3.0, -1.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to divide the last three elements of `x` by the last three elements of `y`:

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 100.0, 200.0, 300.0, 400.0, 4.0, 6.0, 12.0, 8.0, 16.0, 8.0 ] );
var y = new Complex128Array( [ 500.0, 600.0, 700.0, 800.0, 1.0, 1.0, 2.0, 2.0, 4.0, 4.0 ] );

zxdy.ndarray( 3, x, 1, x.length-3, y, 1, y.length-3 );
// y => <Complex128Array>[ 500.0, 600.0, 700.0, 800.0, 5.0, 1.0, 5.0, -1.0, 3.0, -1.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `y` unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var Complex128Array = require( '@stdlib/array-complex128' );
var logEach = require( '@stdlib/console-log-each' );
var zxdy = require( '@stdlib/blas-ext-base-zxdy' );

var xbuf = discreteUniform( 20, -100, 100, {
    'dtype': 'float64'
});
var ybuf = discreteUniform( 20, 1, 100, {
    'dtype': 'float64'
});
var x = new Complex128Array( xbuf.buffer );
var y = new Complex128Array( ybuf.buffer );

zxdy( x.length, x, 1, y, 1 );
logEach( '%s', y );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/zxdy.h"
```

#### stdlib_strided_zxdy( N, \*X, strideX, \*Y, strideY )

Divides elements of a double-precision complex floating-point strided array `x` by the corresponding elements of a double-precision complex floating-point strided array `y` and assigns the results to `y`.

```c
#include "stdlib/complex/float64/ctor.h"

const double x[] = { 4.0, 6.0, 12.0, 8.0, 16.0, 8.0 };
double y[] = { 1.0, 1.0, 2.0, 2.0, 4.0, 4.0 };

stdlib_strided_zxdy( 3, (stdlib_complex128_t *)x, 1, (stdlib_complex128_t *)y, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] stdlib_complex128_t*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **Y**: `[inout] stdlib_complex128_t*` output array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.

```c
void stdlib_strided_zxdy( const CBLAS_INT N, const stdlib_complex128_t *X, const CBLAS_INT strideX, stdlib_complex128_t *Y, const CBLAS_INT strideY );
```

<!--lint disable maximum-heading-length-->

#### stdlib_strided_zxdy_ndarray( N, \*X, strideX, offsetX, \*Y, strideY, offsetY )

<!--lint enable maximum-heading-length-->

Divides elements of a double-precision complex floating-point strided array `x` by the corresponding elements of a double-precision complex floating-point strided array `y` and assigns the results to `y` using alternative indexing semantics.

```c
#include "stdlib/complex/float64/ctor.h"

const double x[] = { 4.0, 6.0, 12.0, 8.0, 16.0, 8.0 };
double y[] = { 1.0, 1.0, 2.0, 2.0, 4.0, 4.0 };

stdlib_strided_zxdy_ndarray( 3, (stdlib_complex128_t *)x, 1, 0, (stdlib_complex128_t *)y, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] stdlib_complex128_t*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Y**: `[inout] stdlib_complex128_t*` output array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `Y`.

```c
void stdlib_strided_zxdy_ndarray( const CBLAS_INT N, const stdlib_complex128_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, stdlib_complex128_t *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/zxdy.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays:
    const stdlib_complex128_t x[] = {
        stdlib_complex128( 4.0, 6.0 ),
        stdlib_complex128( 12.0, 8.0 ),
        stdlib_complex128( 16.0, 8.0 ),
        stdlib_complex128( 32.0, 16.0 )
    };
    stdlib_complex128_t y[] = {
        stdlib_complex128( 1.0, 1.0 ),
        stdlib_complex128( 2.0, 2.0 ),
        stdlib_complex128( 4.0, 4.0 ),
        stdlib_complex128( 8.0, 8.0 )
    };

    // Specify the number of indexed elements:
    const int N = 4;

    // Specify strides:
    const int strideX = 1;
    const int strideY = 1;

    // Divide elements of `x` by the corresponding elements of `y`:
    stdlib_strided_zxdy( N, x, strideX, y, strideY );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        printf( "y[ %i ] = %lf + %lfi\n", i, stdlib_complex128_real( y[ i ] ), stdlib_complex128_imag( y[ i ] ) );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-zxdy.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-zxdy

[test-image]: https://github.com/stdlib-js/blas-ext-base-zxdy/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-zxdy/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-zxdy/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-zxdy?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-zxdy.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-zxdy/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-zxdy/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-zxdy/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-zxdy/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-zxdy/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-zxdy/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-zxdy/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-zxdy/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-zxdy/main/LICENSE

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[hadamard-division]: https://en.wikipedia.org/wiki/Hadamard_product_(matrices)#Analogous_operations

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
