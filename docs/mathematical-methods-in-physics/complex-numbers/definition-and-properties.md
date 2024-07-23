---
title: Definition and properties
sidebar_position: 1
---
# Definition and Properties of Complex Numbers

Complex numbers are a fundamental concept in mathematics, extending the idea of the one-dimensional number line to a two-dimensional complex plane. They play a crucial role in various fields of mathematics, physics, and engineering.

## Definition

A complex number z is defined as:

z = a + bi

where:
- a is the real part
- b is the imaginary part
- i is the imaginary unit, defined as i² = -1

The set of all complex numbers is denoted by ℂ.

## Representation

1. **Algebraic Form**: z = a + bi

2. **Polar Form**: z = r(cos θ + i sin θ) = r e^(iθ)
   where r is the magnitude and θ is the argument (angle)

3. **Complex Plane**: Represented as a point (a, b) or a vector from the origin to (a, b)

## Basic Properties

1. **Equality**: Two complex numbers are equal if and only if their real and imaginary parts are equal.
   z₁ = z₂ iff a₁ = a₂ and b₁ = b₂

2. **Complex Conjugate**: For z = a + bi, its complex conjugate is z* = a - bi

3. **Absolute Value (Modulus)**: |z| = √(a² + b²)

4. **Argument**: arg(z) = tan⁻¹(b/a), adjusted for the appropriate quadrant

## Arithmetic Operations

1. **Addition**: (a + bi) + (c + di) = (a + c) + (b + d)i

2. **Subtraction**: (a + bi) - (c + di) = (a - c) + (b - d)i

3. **Multiplication**: (a + bi)(c + di) = (ac - bd) + (ad + bc)i

4. **Division**: (a + bi) / (c + di) = ((ac + bd) / (c² + d²)) + ((bc - ad) / (c² + d²))i

5. **Exponentiation**: De Moivre's Formula: (r e^(iθ))ⁿ = rⁿ e^(inθ) = rⁿ(cos(nθ) + i sin(nθ))

## Important Identities

1. z · z* = |z|²

2. (z₁ · z₂)* = z₁* · z₂*

3. |z₁ · z₂| = |z₁| · |z₂|

4. |z₁ / z₂| = |z₁| / |z₂|

5. e^(iπ) + 1 = 0 (Euler's Identity)

## Properties of Complex Functions

1. **Analyticity**: A complex function is analytic if it is complex differentiable in a neighborhood of every point in its domain.

2. **Cauchy-Riemann Equations**: For f(x + yi) = u(x, y) + v(x, y)i to be analytic:
   ∂u/∂x = ∂v/∂y and ∂u/∂y = -∂v/∂x

3. **Harmonic Functions**: The real and imaginary parts of an analytic function are harmonic functions.

## Geometric Interpretation

1. **Addition/Subtraction**: Vector addition/subtraction in the complex plane

2. **Multiplication**: Scaling and rotation in the complex plane

3. **Complex Conjugate**: Reflection about the real axis

## Applications

1. **Electrical Engineering**: Analysis of alternating currents and electromagnetic fields

2. **Control Theory**: Stability analysis of linear systems

3. **Quantum Mechanics**: Description of quantum states and operators

4. **Signal Processing**: Fourier transforms and frequency domain analysis

5. **Fractals**: Generation and analysis of fractal structures

## Historical Note

The concept of complex numbers evolved over several centuries, with contributions from mathematicians like Cardano, Bombelli, Euler, and Gauss. The geometric interpretation of complex numbers as points in a plane was developed by Caspar Wessel and Jean-Robert Argand in the late 18th and early 19th centuries.

Understanding the definition and properties of complex numbers is fundamental to many areas of advanced mathematics and its applications. Complex numbers provide a powerful framework for dealing with many problems in science and engineering that are difficult or impossible to solve using only real numbers.