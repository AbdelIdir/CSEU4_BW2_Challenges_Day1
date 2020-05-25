def containsDuplicate(num):
    if len(num) == len(set(num)):
        return False
    else:
        return True


ex = [1, 2, 3, 4, 4]


print(containsDuplicate(ex))
