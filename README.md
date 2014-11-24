This is a middleware to allow tracing/debugging requests, based on continuation local storage.

Right now, its merely adding a unique RID to each request, which can be used in traces throughout the code.
This is better than tagging it on req object, which has the limitation of not being available in all callbacks.
