// Fibonacci
// 
// Write a function that computes a member of the fibonacci sequence by a given index
// Create tests that covers all types of input (like in the previous workshop exercise)

// def fibonacci(self, n):
//     if n == 0 or n == 1:
//         return n
//     else:
//         return self.fibonacci(n-1) + self.fibonacci(n-2)


var i;
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for(i=2; i<=10; i++)
{
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i-2] + fib[i-1];
    console.log(fib[i]);
}