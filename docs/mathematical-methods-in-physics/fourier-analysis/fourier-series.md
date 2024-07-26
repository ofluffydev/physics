---
title: Fourier series
sidebar_position: 1
---

# Fourier Series

## Introduction

Fourier series is a powerful mathematical tool named after Joseph Fourier, a French mathematician and physicist. It allows us to represent periodic functions as a sum of simple sine and cosine functions.

## Basic Concept

The main idea behind Fourier series is that any periodic function f(x) with period 2π can be expressed as an infinite sum of sines and cosines:

f(x) = a₀/2 + Σ(aₙ cos(nx) + bₙ sin(nx))

Where:

-   a₀, aₙ, and bₙ are constants (Fourier coefficients)
-   n is an integer that goes from 1 to infinity

## Fourier Coefficients

The Fourier coefficients are calculated using the following formulas:

1. a₀ = (1/π) ∫ f(x) dx (from -π to π)
2. aₙ = (1/π) ∫ f(x) cos(nx) dx (from -π to π)
3. bₙ = (1/π) ∫ f(x) sin(nx) dx (from -π to π)

These integrals essentially measure how much of each frequency component is present in the original function.

## Types of Fourier Series

1. **Full Fourier Series**: Contains both sine and cosine terms.
2. **Sine Series**: Contains only sine terms (used for odd functions).
3. **Cosine Series**: Contains only cosine terms (used for even functions).

## Convergence

The Fourier series converges to the original function under certain conditions:

-   At points of continuity, the series converges to the function value.
-   At jump discontinuities, the series converges to the average of the left and right limits.

## Importance in Mathematics and Physics

Fourier series is fundamental in:

-   Solving partial differential equations
-   Analyzing periodic phenomena
-   Understanding harmonic oscillations

## Example: Square Wave

A simple example of a Fourier series is the representation of a square wave:

f(x) = (4/π) \* (sin(x) + (1/3)sin(3x) + (1/5)sin(5x) + ...)

This series converges to a square wave as more terms are added.

## Practical Considerations

When working with Fourier series:

-   More terms generally lead to better approximation
-   The choice of how many terms to use depends on the desired accuracy and computational resources

## Exercises

1. Try sketching the first few terms of the square wave Fourier series.
2. Calculate the Fourier coefficients for a simple periodic function, like f(x) = x on \[-π, π].
3. Explore how the number of terms affects the approximation of a given periodic function.
