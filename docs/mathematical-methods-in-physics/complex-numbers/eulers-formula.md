---
title: Euler's formula
sidebar_position: 3
---
# Euler's Formula

Euler's Formula is a mathematical equation that establishes the fundamental relationship between trigonometric functions and the complex exponential function. It is named after the Swiss mathematician Leonhard Euler and is considered one of the most beautiful equations in mathematics.

## The Formula

Euler's Formula states that for any real number x:

e^(ix) = cos x + i sin x

where:
- e is the base of natural logarithms
- i is the imaginary unit (i² = -1)
- x is a real number, typically considered as an angle in radians

## Derivation

While a rigorous proof requires advanced calculus, we can understand the formula through power series expansions:

1. e^(ix) = 1 + ix + (ix)²/2! + (ix)³/3! + ...
2. cos x = 1 - x²/2! + x⁴/4! - ...
3. sin x = x - x³/3! + x⁵/5! - ...

Separating the real and imaginary parts of the e^(ix) series, we get the cos x and i sin x series.

## Key Implications

1. **Euler's Identity**: When x = π, we get the famous Euler's Identity:
   e^(iπ) + 1 = 0

2. **Periodicity**: e^(ix) is periodic with period 2π, mirroring the periodicity of sine and cosine.

3. **Complex Unity**: All complex numbers with magnitude 1 can be expressed as e^(iθ) for some real θ.

## Applications

1. **Trigonometry**: Simplifies many trigonometric identities
    - cos x = (e^(ix) + e^(-ix)) / 2
    - sin x = (e^(ix) - e^(-ix)) / 2i

2. **Signal Processing**: Facilitates the analysis of periodic signals

3. **Quantum Mechanics**: Used in describing wave functions and operators

4. **Control Theory**: Simplifies the analysis of linear systems

5. **Electrical Engineering**: Useful in analyzing AC circuits

## Extensions

1. **Generalized Form**: For complex z = x + yi:
   e^z = e^x (cos y + i sin y)

2. **De Moivre's Theorem**: (cos θ + i sin θ)^n = cos(nθ) + i sin(nθ)
   This is a direct consequence of Euler's Formula

3. **Logarithmic Form**: ln(cos x + i sin x) = ix

## Geometric Interpretation

1. e^(ix) traces the unit circle in the complex plane as x varies
2. The real part (cos x) is the x-coordinate, and the imaginary part (sin x) is the y-coordinate

## Historical Context

Euler published this formula in 1748, although he may have discovered it earlier. It unified several branches of mathematics and paved the way for many advances in complex analysis and mathematical physics.

## Computational Aspects

1. **Numerical Evaluation**: Care must be taken when computing e^(ix) for large x due to periodicity

2. **Programming**: Many programming languages and libraries provide complex exponential functions

3. **Precision**: The formula is exact, but floating-point arithmetic can introduce small errors

## Related Concepts

1. **Fourier Transform**: Heavily relies on Euler's Formula

2. **Complex Logarithm**: ln z = ln |z| + i arg(z)

3. **Polar Form of Complex Numbers**: r e^(iθ) = r (cos θ + i sin θ)

4. **Hyperbolic Functions**: Similar formulas exist for cosh and sinh

Understanding Euler's Formula is crucial for many areas of advanced mathematics, physics, and engineering. It elegantly connects exponential and trigonometric functions, providing powerful tools for analyzing periodic phenomena and complex dynamics.