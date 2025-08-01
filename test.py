#!/usr/bin/env python
# -*- coding: utf-8 -*-

with open('test.js') as f:
    code = f.read()

import execjs

ctx = execjs.compile(code)

hello_result = ctx.call('hello', 'from python')
print(hello_result)

sum = ctx.call('sum', 101, 299)
print(sum)

