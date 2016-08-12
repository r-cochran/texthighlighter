/* global describe, it, afterEach, beforeEach, expect, fixtures, sandbox */

describe('Normalization-iFrame', function () {
    'use strict';

    var hl;

    fixtures.loadFiles([
        'norm.20'
    ]);

    beforeEach(function () {
        hl = sandbox.init();
    });

    afterEach(function () {
        sandbox.empty();
    });

    /**
     * Tests normalization of highlights.
     * Procedure:
     * [1] Load fixture.
     * [2] Normalize highlights.
     * [3] Check highlights returned by normalization method.
     * @param params
     * @param {string} params.title - test title
     * @param {string} params.fixture - name of the fixture to load
     * @param {string[]} params.highlights - expected text content of highlights returned by normalization
     */
    function testNormalization(params) {
        it(params.title, function () {
            var normalized = hl.normalizeHighlights(sandbox.setFixture(params.fixture));

            expect(
                normalized.map(function (h) { return h.textContent; })
            ).toEqual(params.highlights);
        });
    }
    testNormalization({ 
		title: 'use case #20', 
		fixture: '20', 
		highlights: [ 'dolor', 'amet', 'Lorem ipsum ', ' sit ' ]
    });

});
