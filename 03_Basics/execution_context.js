/*
Javascript Execution Context

*global execution context - refer to this.

*Global EC
*Function EC
*Eval EC

--> memory creation phase
--> exection phase

let val1 = 10
let val2 =5

function addNum(num1, num2){
let total = num1+ num2
return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(2,5)

step-1-->global exec.
step-2-->memory phase
-> val1-undefined
-> val2-undefined
-> addNum-defination
-> result1-undefined
-> result2-undefined
step-3-->execution phase
-> val1-10
-> val2-5
-> addNum --> exec. context---> new var env
                                     +
                                execution phase
                            (delete after last execution)
                                |
                            Memory Phase
                        ->val1-undefined
                        ->val2-undefined
                        ->total-undefined
                                |
                        Execution Context
                        -> num1-10
                        -> num2-5
                        -> total-15


CALL STACK

    |           |
    |           |
    |    fun3   |
    |    fun2   |
    |    fun1   |
    |global exec|
    -------------

*/