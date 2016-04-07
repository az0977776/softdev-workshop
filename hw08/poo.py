def union(a,b):
    return a + [x for x in b if x not in a]

def intersection(a,b):
    return [x for x in a if x in b]

def set_difference(a,b):
    return [x for x in a if x not in b]

def symmetric_difference(a,b):
    return set_difference(union(a,b), intersection(a,b))

def cartesian_product(a,b):
    return [(x,y) for x in a for y in b]


a = [1,2,3]
b = [3,4,5]

print "set A: "
print a
print "set B: "
print b

print "union(a,b)"
print union(a,b)
print "intersection(a,b)"
print intersection(a,b)
print "set_difference(a,b)"
print set_difference(a,b)
print "symmetric_difference(a,b)"
print symmetric_difference(a,b)
print "cartesian_product(a,b)"
print cartesian_product(a,b)


