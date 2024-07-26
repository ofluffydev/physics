---
title: Complex algebra
sidebar_position: 2
---

# Complex Algebra

Complex algebra extends algebraic operations and concepts to the domain of complex numbers. It provides powerful tools for solving problems in various fields of mathematics, physics, and engineering.

## Basic Operations Revisited

1. **Addition**: (a + bi) + (c + di) = (a + c) + (b + d)i

    - Geometrically: Vector addition in the complex plane

2. **Subtraction**: (a + bi) - (c + di) = (a - c) + (b - d)i

    - Geometrically: Vector subtraction in the complex plane

3. **Multiplication**: (a + bi)(c + di) = (ac - bd) + (ad + bc)i

    - Geometrically: Scaling and rotation in the complex plane

4. **Division**: (a + bi) / (c + di) = ((ac + bd) / (c² + d²)) + ((bc - ad) / (c² + d²))i
    - Geometrically: Scaling and rotation in the opposite direction

## Properties of Complex Arithmetic

1. **Commutativity**: z₁ + z₂ = z₂ + z₁ and z₁ · z₂ = z₂ · z₁

2. **Associativity**: (z₁ + z₂) + z₃ = z₁ + (z₂ + z₃) and (z₁ · z₂) · z₃ = z₁ · (z₂ · z₃)

3. **Distributivity**: z₁ · (z₂ + z₃) = z₁ · z₂ + z₁ · z₃

4. **Additive and Multiplicative Identities**: z + 0 = z and z · 1 = z

5. **Additive and Multiplicative Inverses**: z + (-z) = 0 and z · (1/z) = 1 (for z ≠ 0)

## Complex Conjugates in Algebra

1. **Definition**: For z = a + bi, its complex conjugate is z\* = a - bi

2. **Properties**:

    - (z₁ + z₂)_ = z₁_ + z₂\*
    - (z₁ · z₂)_ = z₁_ · z₂\*
    - (z₁ / z₂)_ = z₁_ / z₂\*
    - (z*)* = z
    - |z| = √(z · z\*)

3. **Use in Rationalization**: (a + bi) / (c + di) = ((a + bi)(c - di)) / ((c + di)(c - di))

## Powers and Roots

1. **Integer Powers**: Use De Moivre's Formula: (r e^(iθ))ⁿ = rⁿ e^(inθ) = rⁿ(cos(nθ) + i sin(nθ))

2. **Roots**: The n-th roots of z = r e^(iθ) are given by:
   z^(1/n) = r^(1/n) e^(i(θ + 2kπ)/n), where k = 0, 1, 2, ..., n-1

3. **Fractional Powers**: Combine the above concepts

## Polynomial Equations

1. **Fundamental Theorem of Algebra**: Every non-constant polynomial equation has at least one complex root

2. **Complex Roots**: Non-real roots of polynomials with real coefficients always occur in conjugate pairs

3. **Factorization**: Every polynomial of degree n can be factored into n linear terms in the complex domain

## Exponential and Logarithmic Forms

1. **Exponential Form**: e^z = e^x (cos y + i sin y), where z = x + yi

2. **Logarithmic Form**: ln z = ln |z| + i arg(z) + 2kπi, where k is an integer

3. **Euler's Formula**: e^(iθ) = cos θ + i sin θ

## Trigonometric Connections

1. **Complex Exponentials**:

    - cos θ = (e^(iθ) + e^(-iθ)) / 2
    - sin θ = (e^(iθ) - e^(-iθ)) / 2i

2. **Hyperbolic Functions**:
    - cosh x = cos(ix)
    - sinh x = -i sin(ix)

## Applications in Algebra

1. **Solving Cubic Equations**: Cardano's formula uses complex numbers

2. **Factoring Polynomials**: Complex roots help in complete factorization

3. **Trigonometric Identities**: Easily derived using complex exponentials

4. **Analytic Number Theory**: Prime number theory often involves complex analysis

## Advanced Topics

1. **Quaternions**: An extension of complex numbers to four dimensions

2. **Algebraic Closure**: The complex number system is algebraically closed

3. **Riemann Sphere**: A way to visualize the extended complex plane, including infinity

## Computational Considerations

1. **Numerical Stability**: Care must be taken in computations, especially near singularities

2. **Computer Algebra Systems**: Many systems have built-in support for complex arithmetic

3. **Precision Issues**: Rounding errors can accumulate in complex computations

Understanding complex algebra is crucial for many advanced topics in mathematics, including complex analysis, algebraic geometry, and number theory. It provides powerful tools for solving problems that are difficult or impossible in the real number system alone.
