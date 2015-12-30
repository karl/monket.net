/*
QUnitToJSpecAdapter
Version: 1.0.0

Run qunit tests using JSspec

This provides almost the same api as qunit.

Tests must run sychronously, which means no use of stop and start methods.
You can use the JSpec mock timers to deal with timeouts, intervals, etc

The qunit #main DOM element is not included. If you need to do any DOM manipulation
you need to set it up and tear it down in each test.

*/
(function() {

	JSpec.addMatchers({
	    be_ok : '!!actual'
	});
	

    JSpec.context = JSpec.defaultContext;
    JSpec.context.QUnitAdapter = {
        modules: []
    };
   
    module = function(name, lifecycle) {
    
        JSpec.context.QUnitAdapter.modules.push({
            name: name,
            tests: [],
            setup:    (lifecycle && lifecycle.setup)    ? lifecycle.setup    : function() {}, 
            teardown: (lifecycle && lifecycle.teardown) ? lifecycle.teardown : function() {}
        });
    
        JSpec.describe(name, function() {
            
            var length = QUnitAdapter.modules[0].tests.length;
            for (var i = 0; i < length; i++) {
                it(QUnitAdapter.modules[0].tests[i].name, function() {
                    var adapter = {
                        expectedAsserts: 0,
                        calledAsserts: 0,
            
                        expect: function(count) {
                            adapter.expectedAsserts = count;
                        },
            
                        ok: function(actual, msg) {
                            adapter.calledAsserts++;
                            JSpec.expect(actual).to(JSpec.matchers.be_ok);
                        },
                
                        equals: function(a, b, msg) {
                            adapter.calledAsserts++;
                            JSpec.expect(a).to(JSpec.matchers.be, b);
                        },
            
                        start: function() {
                            throw 'start and stop methods are not available when using JSpec.\n' +
                                'Use the JSpec timer to deal with timeouts and intervals:\n' + 
                                'http://github.com/visionmedia/jspec/tree/master';
                        },
                    
                        stop: function() {
                            throw 'start and stop methods are not available when using JSpec.\n' +
                                'Use the JSpec timer to deal with timeouts and intervals:\n' + 
                                'http://github.com/visionmedia/jspec/tree/master';
                        },
                    
                        same: function(a, b, msg) {
                            adapter.calledAsserts++;
                            JSpec.expect(a).to(JSpec.matchers.eql, b);
                        },
            
                        reset: function() {
                            throw 'reset method is not available when using JSpec';
                        },
            
                        isLocal: function() {
                            return false;
                        }
                    };
                
                    eval('with(adapter) {' +
                        JSpec.contentsOf(QUnitAdapter.modules[0].setup) +
                        'try {' +
                        JSpec.contentsOf(QUnitAdapter.modules[0].tests[0].testCallback) +
                        '} catch(ex) { throw(ex); } finally {' +
                        JSpec.contentsOf(QUnitAdapter.modules[0].teardown) +
                        '} }');
                    
                    if (adapter.expectedAsserts > 0) {
                        JSpec.expect(adapter.calledAsserts).to(JSpec.matchers.equal, adapter.expectedAsserts);
                    }
                });
            }
            
            after_each(function() {
                QUnitAdapter.modules[0].tests.shift();
            });
                
            after(function() {
                QUnitAdapter.modules.shift();
            });
            
        });
    
    };
    
    test = function(name, testCallback) {
        JSpec.context.QUnitAdapter.modules[JSpec.context.QUnitAdapter.modules.length - 1].tests.push({
            name: name,
            testCallback: testCallback
        });
    };

})();
