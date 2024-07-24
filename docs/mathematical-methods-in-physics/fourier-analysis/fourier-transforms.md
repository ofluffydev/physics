---
title: Fourier transforms
sidebar_position: 2
---
# Fourier Transforms

## Introduction
Fourier transforms are a generalization of Fourier series that extend the concept to non-periodic functions. They are named after Joseph Fourier and play a crucial role in many areas of mathematics, physics, and engineering.

## Basic Concept
The Fourier transform decomposes a function of time (or space) into its constituent frequencies. It's a reversible operation, allowing us to move between the time (or space) domain and the frequency domain.

## Continuous Fourier Transform
For a function f(t), its Fourier transform F(ω) is given by:

F(ω) = ∫ f(t) e^(-iωt) dt  (from -∞ to +∞)

Where:
- ω represents angular frequency
- i is the imaginary unit
- e is Euler's number

The inverse Fourier transform is:

f(t) = (1/2π) ∫ F(ω) e^(iωt) dω  (from -∞ to +∞)

## Properties of Fourier Transforms
1. **Linearity**: The transform of a sum is the sum of the transforms.
2. **Scaling**: Scaling in one domain causes inverse scaling in the other.
3. **Shift**: A shift in one domain causes a phase change in the other.
4. **Convolution**: Convolution in one domain becomes multiplication in the other.

## Discrete Fourier Transform (DFT)
For discrete, finite-length signals, we use the DFT:

X[k] = Σ x[n] e^(-i2πkn/N)  (n from 0 to N-1)

Where:
- x[n] is the input sequence
- X[k] is the output sequence
- N is the number of samples

## Fast Fourier Transform (FFT)
The FFT is an efficient algorithm to compute the DFT, reducing computational complexity from O(N²) to O(N log N).

## Applications
Fourier transforms are widely used in:
1. Signal processing
2. Image processing
3. Data compression
4. Solving differential equations
5. Spectral analysis

## Fourier Transform Pairs
Some common Fourier transform pairs include:
1. Delta function ↔ Constant function
2. Gaussian function ↔ Gaussian function
3. Rectangular function ↔ Sinc function

## Relationship to Fourier Series
For periodic functions, the Fourier transform produces a discrete spectrum, which is directly related to the coefficients of the Fourier series.

## Generalizations
1. **Short-time Fourier transform**: For analyzing non-stationary signals.
2. **Fractional Fourier transform**: Rotates signals in the time-frequency plane.
3. **Wavelet transform**: Provides time-frequency localization.

## Exercises
1. Compute the Fourier transform of a simple function, like e^(-|t|).
2. Explore the effect of scaling and shifting on the Fourier transform of a function.
3. Implement a simple DFT algorithm and compare its output with a built-in FFT function.