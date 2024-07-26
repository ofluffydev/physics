---
title: Numerical Integration
sidebar_position: 1
---

# Numerical Integration in Physics

## Introduction

Numerical integration is a fundamental technique in computational physics, used to approximate definite integrals when analytical solutions are difficult or impossible to obtain. This lesson covers the basics of numerical integration, its importance in physics, and common methods used to perform these calculations.

## Importance in Physics

Numerical integration plays a crucial role in various areas of physics, including:

1. Quantum mechanics: Calculating expectation values and probabilities
2. Electromagnetism: Determining electric and magnetic fields from charge and current distributions
3. Thermodynamics: Computing work done in non-ideal processes
4. Mechanics: Evaluating work done by non-constant forces

## Basic Concepts

### Definite Integrals

A definite integral is represented as:

```
∫[a,b] f(x) dx
```

Where `a` and `b` are the lower and upper limits of integration, respectively, and `f(x)` is the function being integrated.

### Numerical Approximation

Numerical integration methods approximate the integral by summing the areas of smaller shapes (usually rectangles or trapezoids) that fit under the curve of the function.

## Common Methods

### 1. Rectangle Method (Midpoint Rule)

The rectangle method approximates the integral by summing the areas of rectangles. The midpoint rule uses the function value at the midpoint of each subinterval.

```
∫[a,b] f(x) dx ≈ Σ[i=1 to n] f(xi) * Δx
```

Where `xi` is the midpoint of the i-th subinterval, and `Δx = (b-a)/n`.

#### Example Problem

Calculate the work done by a force F(x) = 2x^3 - 3x^2 + 5 (in Newtons) acting on a particle moving from x = 0 to x = 2 meters using the midpoint rule with 4 subintervals.

TODO: Add solution

### 2. Trapezoidal Rule

The trapezoidal rule approximates the integral by summing the areas of trapezoids.

```
∫[a,b] f(x) dx ≈ (Δx/2) * [f(a) + 2f(x1) + 2f(x2) + ... + 2f(xn-1) + f(b)]
```

Where `xi` are equally spaced points between `a` and `b`, and `Δx = (b-a)/n`.

#### Example Problem

Estimate the electric field at a point P due to a non-uniform line charge distribution λ(x) = x^2 + 2x + 1 (in C/m) from x = 0 to x = 1 meter using the trapezoidal rule with 5 subintervals.

TODO: Add solution

### 3. Simpson's Rule

Simpson's rule is a more accurate method that approximates the function with parabolic arcs.

```
∫[a,b] f(x) dx ≈ (Δx/3) * [f(a) + 4f(x1) + 2f(x2) + 4f(x3) + ... + 2f(xn-2) + 4f(xn-1) + f(b)]
```

Where `n` is even, and `xi` are equally spaced points between `a` and `b`.

#### Example Problem

Calculate the moment of inertia of a non-uniform rod with linear density ρ(x) = 3x^2 + 2 (in kg/m) about an axis perpendicular to its end. The rod has a length of 2 meters. Use Simpson's rule with 6 subintervals.

TODO: Add solution

## Error Analysis and Convergence

Numerical integration methods have associated errors. The error generally decreases as the number of subintervals increases. The order of convergence differs for each method:

-   Rectangle Method: O(1/n^2)
-   Trapezoidal Rule: O(1/n^2)
-   Simpson's Rule: O(1/n^4)

## Adaptive Methods

Adaptive quadrature methods adjust the subinterval sizes based on the function's behavior, concentrating
