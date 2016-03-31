print [x for x in range(8)]
print [x*x for x in range(8)]
print [(x,x*x,x*x*x) for x in range(8)]

p="myNoobPass1234"

print [x for x in p]
print [x for x in '1234']

UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

print [x for x in p if x in UC_LETTERS ]
print [1 for x in p if x in UC_LETTERS ]
print [1 if x in UC_LETTERS else 0 for x in p ]

def passTest(p):
    num = '0123456789'
    up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    low = 'abcdefghijklmnopqrstuvwxyz'
    if 1 in [1 for x in p if x in num]:
        if 1 in [1 for x in p if x in up]:
            if 1 in [1 for x in p if x in low]:
                return True
    return False

def passRate(p):
    num = '0123456789'
    up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    low = 'abcdefghijklmnopqrstuvwxyz'
    char = '.?!&#,;:-_*'

    rating = 0 
    
    if 1 in [1 for x in p if x in num]:
        rating += 2.5
    if 1 in [1 for x in p if x in up]:
        rating += 2.5
    if 1 in [1 for x in p if x in low]:
        rating += 2.5
    if 1 in [1 for x in p if x in char]:
        rating += 2.5
    return rating

print passTest('apple123')
print passTest('hunter2')
print passTest('Password1')

print passRate('asdbnfjkbhHJVAKSYdv12341234*&(^$')
print passRate('hi')
print passRate('jkdbakljsbgdfkj1234123o88UJJkJKsdjkrfvbsjtvb')
