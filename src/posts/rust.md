---
title: Exploring Rust
author: "Arkaprava Gaine"
date: "2025-01-20"
description: 'Exploring the basics of Rust'
headerImage: "/header/rust_logo.webp"
tags: [Rust , Programming , Basics]
---


>While some may downplay the significance of personal side projects, many of the world’s most groundbreaking innovations have emerged from such endeavours.

## History

A similar story unfolded with _[Rust](https://www.rust-lang.org/)_. It all began when Graydon Hoare, a 29-year-old programmer at Mozilla, became frustrated with his apartment’s malfunctioning elevator. He knew that the issue was stemming from the software controlling it and more specifically , the underlying programming language behind it. This sparked his curiosity and drive to try out writing a new language that fixes this ; a language that was supposed to fix the issues that come along with writing code for hardware in C/C++ ; the problem with _[memory management](https://www.w3schools.com/c/c_memory_management.php)_ . The solution was to design a language that struck the perfect balance between hardware control and memory management. Before Rust, the programming world was largely split between two domains: languages like C and C++ for high-performance or embedded applications and languages like Java, JavaScript and Python for building real-world applications more easily. Rust bridged this gap by combining the best of both worlds — eliminating the need for manual memory management while introducing strict rules to ensure safe and efficient data handling within programs. Code is harder to write but once compiled it’s memory safe and concurrency safe.

Graydon Hoare began designing Rust in 2006, and after years of iteration and refinement, a turning point came in 2009 when Mozilla decided to fund its development. By 2010, Rust had attracted a growing team of talented coders and programmers from around the world. During this time, critical features were introduced, including the Rust compiler, which converts Rust code into executable software and the _“ownership”_ system, which ensures that each piece of data is tied to only one variable at a time, significantly reducing memory issues.

Rust’s design cleverly implemented decades of prior research into practical tools for modern programming. By 2013, Rust had achieved a rare combination: performance close to bare-metal languages like C and C++ while maintaining robust _memory safety_. This was complemented by a welcoming and inclusive community that encouraged contributions from developers of all backgrounds and expertise levels.

In 2015, Rust released its first stable version, allowing companies to begin using it for production-grade software. Mozilla’s Servo web browser engine became the first major software built with Rust in 2016 ; paving the way for adoption by other tech giants, including Samsung, Microsoft, and Meta (formerly Facebook). By 2020, modern companies like Dropbox and Discord were leveraging Rust to enhance their products. Amazon Web Services even discovered that applications written in Rust consumed half the electricity compared to similar ones written in Java!!

In 2021, major companies united to established a non-profit organization dedicated to supporting Rust’s ongoing development by its community of volunteer contributors. By this year i.e 2024, Rust has solidified it’s reputation , with the _[Stack Overflow Developer](https://survey.stackoverflow.co/2024/technology#2-programming-scripting-and-markup-languages)_ Survey for the 9th time naming it the most loved programming language for its unparalleled combination of performance, safety, and developer experience.

Now Let’s explore some features of Rust.

## Memory Safety without Garbage collection

Popular languages like Java , JavaScript and Python all use garbage collectors , components that periodically clean up the memory as a piece of software is running but along with that comes the loss of low-level control for the programmer. Rust makes it easier , it gives memory safety to programmers but without garbage collection and hence providing more accessibility.

```rust
fn main() {
    let s1 = String::from("Hello"); 
    let s2 = s1; 
    // println!("{}", s1);
    let s3 = s2.clone(); 
    println!("{}", s2); 
    println!("{}", s3); 
}
```
Here first the ownership is allocated to _s1_ and then _s1’s_ ownership is allocated to _s2_ and hence `println(“{}”,s1)` will throw error as `s1` doesn’t own the value thus eliminating the possibility of dangling references or multiple owners.

But next _s3_ explicitly clones _s2_ hence there is no ownership issue and thus the next print statement works just fine.

Lets compare a similar code in C++

```c++
#include <iostream>
#include <string>
using namespace std;
int main() {
    string s1 = "Hello";
    string s2 = s1; 
    cout << s1 << std::endl;
    cout << s2 << std::endl;
    string* s3 = new std::string("World");
    delete s3; 
    // std::cout << *s3; 
}
```

In this code _s1_ and _s2_ are two independent variables and both are valid.Hence both the “cout” commands will work , something that rust doesn’t allow.Variable _s3_ on the other hand is dynamically allocates memory initialised with the string world , _s3_ is a raw pointer to this dynamically allocated memory. delete _s3_ means the allocated memory is explicitly removed and hence _s3_ becomes a dangling pointer i.e a pointer who’s memory has been already been freed and hence the cout will not work and hence commented out.

## Zero Cost Abstraction

This core feature in Rust allows developers to write _high level_ code without introducing any runtime performance _overhead_ .Under this concept abstract constructs and higher-order programming concepts that can be used without having a negative impact on _execution speed_ or _efficiency_.

Rust also allows developers to write code that is as _fast_ and _efficient_ as optimised low-level code, while also taking advantage of high-level abstractions that make programming easier and more secure.Another advantage of Rust’s zero-cost abstractions is that they allow developers to maintain precise control over system resources, similar to low-level system programming languages.

```rust
fn main() {
    let numbers = vec![1, 2, 3, 4, 5];
    let sum_of_squares: i32 = numbers.iter()
        .map(|&x| x * x) 
        .filter(|&x| x % 2 == 0)
        .sum(); 
    println!("Sum of even squares: {}", sum_of_squares);
}
```
Rust iterator methods like _.map() , .filter() , .sum()_ are lazy and don’t create intermediate collections or perform extra memory allocations.

Instead _.sum()_ builds a chain of operations that are executed in single pass.Here abstractions like _.map()_ and _.filter()_ are zero-cost , the compiler inlines them into efficient machine code during compilation. Hence all of this makes the code more expressive and concise yet without any overhead.

## Concurrency

Rust has built in support for concurrency through things like its _type system_ and _ownership_ concept.The _ownership_ system enforces strict rules for data access, and its _borrowing model_ prevents _data races_ by allowing controlled, simultaneous access. This ensures that multiple threads can work on shared data without introducing memory-related issues making it an excellent choice for systems that need to run in parallel.

```rust
use std::thread;
use std::sync::mpsc; 
fn main() {
    let (tx, rx) = mpsc::channel();
    let handle = thread::spawn(move || {
        let data = vec![1, 2, 3, 4, 5];
        for value in data {
            tx.send(value).unwrap(); 
            println!("Sent: {}", value);
        }
    });
    for received in rx {
        println!("Received: {}", received);
    }
    handle.join().unwrap(); 
}
```

Here _mpsc::channel()_ creates _tx_ and _rx_ for sending and receiving messages. _thread :: spawn ()_ creates a new thread. The move keyword makes sure that ownership of tx is moved into the thread , allowing thread to use it . Inside the thread a vector of numbers is iterated and each number is sent using _tx.send()_ . The main thread receives messages using the _rx_ channel in a for loop, which processes the data as it arrives.

The ownership of the sent data (value) is transferred through the channel, so no data is shared unsafely between threads. This avoids potential race conditions.

The _handle.join()_ ensures the main thread waits for the spawned thread to finish before exiting. This code hence is an example of how concurrency can be implemented in Rust.

## Cargo package manager

Rust’s integrated package manager , _[Cargo](https://doc.rust-lang.org/cargo/index.html)_, significantly improves project management, dependency tracking and the build process, helping produce a better, well-structured development workflow. As a matter of fact Rust was actually the first systems programming language to have a standard package manage.

```rust
[workspace]
resolver = "2"
members = [
    "libs/*",      
    "services/*",  
    "tests/unit",  
    "benchmarks/throughput",  
    "docs"          
]
exclude = [
    "target/",  
    "tmp/"      
]
[workspace.package]
rust-version = "1.70"  
edition = "2021"
license = "MIT"       
authors = ["moderator<moderator@teamdcs.com>"] 
[workspace.dependencies]
log = "0.4"           
serde = { version = "1.0", features = ["derive"] }  
serde_json = "1.0"    
regex = "1.5"          
dotenv = "0.15"        

[dependencies]
anyhow = "1.0.75"       
base64 = "0.21.5"       
bytesize = "1.3"
```
## Use Cases

Use-cases of Rust are widely varied , since it is a general purpose language with direct access to both hardware and memory. Let’s explore a few use cases.

**_CLI Tools_** : CLI tools or Command Line Interface Tools can be efficiently made due to its _efficient_ machine code and it’s _expressive syntax_. Check out the rust _[doc](https://rust-cli.github.io/book/index.html)_ to learn how to make CLI tools in Rust.

**_Web Development_** : The _async_ programming model and it’s performance make it fitting to make high performance web-servers APIs and backend services.Check out the rust _[doc](https://rustwasm.github.io/docs/book/)_ to learn how to make browser-native libraries in Rust.

**_Web3 and Blockchain_** : In recent times Rust has become a big player in the web3 ecosystem. With its multiple features of _memory safety , concurrency , performance_ it is widely used to make smart contracts for blockchain. Some examples are _[Solana](https://solana.com/docs/programs/rust)_ , _[Polkadot](https://crates.io/crates/polkadot)_.

**_Embedded Systems and IoT_** : It all started with making low level programming better and hence it makes sense that rust is an excellent choice to program small hardware systems with it’s minimal runtime and great control over memory layout. Check out the rust _[doc](https://rustwasm.github.io/docs/book/)_ to learn how to program embedded devices in Rust.

**_Operating Systems_** : Rust was originally created to solve an operating system issue. Hence it can be used to build operating systems, kernels, device drivers, or other low-level components where control over memory and performance is crucial. Eg : _[Redox](https://www.redox-os.org/)_


