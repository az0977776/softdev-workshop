def inc(x):
    return x + 1
f = inc
print f(10)

def h(x):
    return lambda y: x + y

print h(1)
print h(2)
print h(1)(3)
print h(2)(5)

b=h(1)
print b(3)

def f(x):
    def g(y):
        return x + y
    return g

print f(3)
print f(3)(2)

def repeat(string):
    def j(times):
        output = ''
        while (times > 0):
            output += string
            times -= 1
        return output
    return j

r1=repeat('hi')
r2=repeat('goodbye')

print r1(2)
print r2(2)
print repeat('cool')(3)

