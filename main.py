num1 = int(input("enter the number: "))
num2 = int(input("enter the number: "))

#performing operations
add = num1 + num2
sub = num1 - num2
mul = num1 * num2
div = num1 / num2

# to avoid division by zero
if num2 !=0:
    div = num1 / num2
else:
    div = "umdefined (cannot divided by zero)"

#displaying results
print("/n Results: ")
print("the sum of", num1 , "add" , num2, "is", add)
print("the substraction of", num1 , "sub" , num2, "is", sub)
print("the numltiplication of", num1 , "mul", num2, "is", mul)
print("the division of" , num1 , "div" , num2, "is", div)
