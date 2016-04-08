import time

def fname(f):
    def argus(*arg):
        arg1 = ''.join(str(e) + ', ' for e in arg)
        print "function: " + f.func_name
        print "arguments: " + arg1
        return f(*arg)
    return argus

def timeasd(f):
    start = time.time()
    def argus(*arg):
        return f(*arg)
    print "execution time: " + str(time.time()-start)
    return argus

@timeasd
@fname
def sum(a,b):
    return a + b

print sum(1,2)

@timeasd
@fname
def fib(n):
    if n == 0 or n == 1 or n == 2:
        return 1
    else:
        return fib(n-1) + fib(n-2)

print fib(5)
