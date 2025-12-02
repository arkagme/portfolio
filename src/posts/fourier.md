---
title: Art using Fourier Transforms
author: "Arkaprava Gaine"
date: "2025-06-22"
description: 'The beauty behind maths and how it can be used to make almost any art'
headerImage: "/header/fourierheader.webp"
tags: [Maths , CreativeCoding , p5.js , Javascript]
---

> People say art is for creatives, but even art can sometimes hide some really cool mathematical patterns behind it!

Welcome to **Maths but Pretty** - a series of blog posts that explores generating art by applying mathematical concepts using code.

Today we're going to explore something called **Fourier Series & Transforms** and see how they can be used to make almost any art you can think of!

Before we dive into it, let's look at something we can build using these concepts...

![Fourier GIF](/gifs/fouriert.webp)

Now isn't that cool !!

Before jumping into the fun parts, we need to dive a bit into what the heck Fourier series even is. Why should you even care?

Well, the idea of **Fourier series** doesn't even come from pure mathematics... it came into being when **[Joseph Fourier](https://en.wikipedia.org/wiki/Joseph_Fourier)** was studying heat flow in his research work published in _Théorie analytique de la chaleur_ (The Analytical Theory of Heat). This publication paved the path for three main important contributions - one mathematical and two physical. The mathematical contribution was:

> Any function of a variable, whether continuous or discontinuous, can be expanded in a series of sines of multiples of the variable.

Although this wasn't entirely correct, he was the first one to suggest that discontinuous functions can be represented as the sum of infinite series. Years later, another mathematician named **[Peter Gustav Lejeune Dirichlet](https://en.wikipedia.org/wiki/Peter_Gustav_Lejeune_Dirichlet)** fixed it and gave a satisfactory demonstration, and that work laid the foundation of what we know today as Fourier Transforms.

Enough of history , let's dive into the actual stuff !!

There are mainly two different things - **Fourier Series** and **Fourier Transforms**. Well, they're not different at all, but we'll consider them so for the ease of understanding. By the time you finish this article, you'll have a good understanding of why they're essentially different ways of saying the same thing.

## Fourier Series 

**Fourier series** can decompose any periodic function into a sum of sine and cosine waves of different frequencies and amplitudes. It's the format you'll find in most math textbooks. In mathematical terms, it is:

![Sine - Cosine Form](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jkx84kzma2ik3g4k1svn.png)

Here in the formula :

- a₀ is the average value (DC component)
- aₙ is the amplitude (strength) of the cosine wave at the n'th          harmonic
- bₙ is the amplitude of the sine wave at the n'th harmonic
- cos(2π(n/P)x) is the cosine function at the n'th harmonic. The argument (2π(n/P)x) ensures the correct frequency, where P is the period of the original function. The same logic applies to sine as well.


There are some formulae to calculate a₀, aₙ, and bₙ too. They are as follows:

![ coefficient formulae ](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gfbsn8omyrys1069ixkf.png)

As is evident from the original formula, the need for aₙ and bₙ is to find the strength or how much sine/cosine is needed to reconstruct the whole wave (that's why the integration). The reason behind multiplying aₙ and bₙ with cos and sine respectively can be deduced from the fact that sine and cosine functions are **orthogonal** over the interval **[−L,L]**, meaning their integrals (when multiplied together) are zero unless they are at the same frequency.

Hence, if we take any regular waveform, it can be decomposed into a summation of sine and cosine waves...

Lets try to re-create this for different wave-forms...

**1. Sine Wave**

If we calculate the above formula for a function switching between -1 and +1 and then calculate **a₀, aₙ, bₙ** it transforms into a sum of sines. The resultant equation looks something like this:

![sine wave calculation](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p47pseyful9mhelpjiqm.png)

And now if we put n = 1 and try to visualize it, we get something quite satisfying:

![sine gif](/gifs/sine.webp)

**2. Square Wave**

After visualizing the sine wave above, let's change it up a little more. Let's increase the number of harmonics or the value of **n**.

Here in the interactive you'll find that if you increase the harmonic value ( use the slider to increase the value of n ) , it slowly takes the form of a square wave. The number here is nothing but the value of n. As the number n increases, so does the number of smaller circles with faster speeds, and the curve starts looking closer to the actual curve.
   
<iframe src="/interactive_elements/square.html" class="w-full h-[750px] rounded-lg border-none bg-[#201c2e]"></iframe>

**3. Saw-tooth Wave**

We used the same formula to calculate the sine wave and the square wave thereafter. Let's try to apply a different f(x) in different limits and approximate the **sawtooth wave** function. A little math gives us the formula as: 

![Saw Tooth formula](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8plk4x6laovhkodcrw2v.png)

<iframe src="/interactive_elements/sawtooth.html" class="w-full h-[750px] rounded-lg border-none bg-[#201c2e]"></iframe>

In the visualizer you can see we did something similar to what we did before, it starts with a simple sine wave, but as we increase the value of n (the value of the harmonic that can be changed with the slider) - it starts approximating the actual sawtooth wave.

**4. Triangular Wave**

Let's try another one: a **triangular wave**. The function, when applied to the above formula, gives something a bit more complex like this:

![Triangular Wave formula ](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vztiqu45rqkz3pet0t2v.png)

Visualising this using the same methods as above gives us something like this: 

<iframe src="/interactive_elements/triangular.html" class="w-full h-[750px] rounded-lg border-none bg-[#201c2e]"></iframe>

Now that we have a good understanding of what Fourier series is, let's move on to a more interesting topic - the thing that lets us make any art we want.

## Fourier Transforms

We can describe **Fourier Transforms** as a complex form of Fourier series. It comes from applying the famous Euler's Formula to the original Fourier Series equation. It is defined as:

> The Fourier Transform is a mathematical operation that transforms a function of time (or space) into a function of frequency. It basically decomposes a signal into its constituent frequencies.

Formally ( or, mathematically ) for a function , the Fourier transform is defined as : 

![Fourier Transform](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vvpxiu2zq09qab9c0po8.png)

where : 

- f(x) is the original function
- F(k) is the Fourier Transform of frequency k
- The exponential term e represents complex sinusoidals at frequency k.

The shift from sinusoidal waves (the sine waves we talked about in the previous section) to circles is possible because of **[Euler's formula](https://en.wikipedia.org/wiki/Euler%27s_formula)**, as mentioned earlier. What Euler's formula does is transform the sinusoids into a complex form - a circular path.

![Circle path from eulers](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cc8ifk43437hc0shixd6.webp)

We can calculate the phase, frequency, and amplitude of the circle from this equation too! But the true trick behind drawing something from this formula is to use something called **Epicycles**. 
We've already used it before in this article. Remember the small circles circling around the big circles? Well, the formal name for that is Epicycles. We can truly approximate any closed curve using this trick of Fourier transforms and epicycles. The more complex the curve, the more the number of smaller epicycles needed.


Now, to make the implementation of this Fourier Transform easier, we use something called **DFT**, i.e., **Discrete Fourier Transform**. It's the same Fourier Transform but using summation instead of integrals. Frankly, because it's not that easy to implement integration with code, but it's quite easy to implement summation in code!

More specifically we will be implementing this formula :

![Discrete Fourier Transforms](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8hw2ent99zmlnlhxvkvx.png)

Let's see the implementation !!

The code for DFT in JavaScript looks something like this :

```js
function dft(x){
    let X = []
    let N = x.length
    for(let k=0 ; k < N ; k++){
        let re=0
        let im =0 
        for(let n=0;n < N;n++){
            let angle = ( TWO_PI *k*n)/N
            re+= x[n] * cos(angle)
            im-= x[n] * sin(angle)
        }
        re = re/N
        im = im/N
        
        let freq = k
        let amp = sqrt(re*re + im*im)
        let phase = atan2(im , re)
        X[k] ={ re, im , freq , amp , phase} ;
    }
    return X
}

```

And on screen it looks like : 

![arkagme fourier gif](/gifs/arkagme.webp)

If you look closely, the whole name is traced in one single closed loop. If it wasn't, then it wouldn't be able to trace the name so cleanly!

The basic process to create any art using DFT is as follows:

1. Implement DFT in any programming language of your choice. Preferably choose one with a graphics processing library (makes your life easier).

2. Implement the concept of epicycles and rendering of waves.
 
3. Take any vector design software like Adobe Illustrator or Inkscape and make the closed loop vector design.

4. Fetch the coordinates of the loop from the design using a script ([The script I used](https://github.com/arkagme/mathart/blob/main/fourier-transforms/script.py)).
 
5. Modify your DFT code to follow the coordinates and voila! You have your own art getting drawn by Fourier Transforms!

And that's how you can draw any art using Fourier Transforms.

I know this wasn't a very deep introduction to what Fourier Transforms or Fourier Series is all about, so here are some more resources to learn about it that go really deep into the concepts!

_Articles :_

[An article introducing FTs](https://www.jezzamon.com/fourier/)

[ Interactive drawing using FT's ](https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/)

[ A good basic on Fourier Series ](https://bilimneguzellan.net/en/purrier-series-meow-and-making-images-speak/)

[ On Discrete Fourier Transforms ](https://www.algorithm-archive.org/contents/cooley_tukey/cooley_tukey.html)

[ Drawing with epicycles ](https://observablehq.com/@maddhattpatt/drawing-with-epicycles)

_Videos :_

[ A video on Fourier Series by the legendary 3Blue1Brown ](https://www.youtube.com/watch?v=r6sGWTCMz2k)

[ Video on Fourier Transforms by 3b1b ](https://www.youtube.com/watch?v=spUNpyF58BY)

[ Fourier Series explained mathematically by Mathology ](https://www.youtube.com/watch?v=qS4H6PEcCCA)

[ A detailed analysis into Fourier Transforms by GoldenPlatedGoof ](https://www.youtube.com/watch?v=2hfoX51f6sg)

If you're reading this, thanks for reading until the end! I hope you ended up creating something close to your heart using this!

Do consider giving us a follow because more cool stuff will be coming your way.

Till then, adios!
Happy coding!