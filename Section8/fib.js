function fib(num){
    if (num <= 0) {
        return null
    }
    if (num <=2) {
        return 1
    }
    return fib(num-1) + fib(num-2)
    // add whatever parameters you deem necessary - good luck!  
  }