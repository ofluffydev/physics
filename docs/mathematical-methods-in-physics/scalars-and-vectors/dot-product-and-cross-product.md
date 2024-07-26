---
title: Dot product and cross product
sidebar_position: 5
---

# Dot Product and Cross Product

## Introduction

The dot product and cross product are two fundamental operations in vector algebra. They are extensively used in physics and engineering to describe relationships between vectors and to solve various problems. While both involve two vectors, they produce different results and have distinct applications.

## Dot Product (Scalar Product)

The dot product of two vectors results in a scalar quantity.

### Definition

For two vectors A and B, their dot product is defined as:

A · B = |A| |B| cos(θ)

Where |A| and |B| are the magnitudes of vectors A and B, and θ is the angle between them.

### Properties

1. Commutative: A · B = B · A
2. Distributive over addition: A · (B + C) = A · B + A · C
3. Not associative: (A · B) · C is undefined (as A · B is a scalar)
4. A · A = |A|²
5. If A · B = 0, the vectors are perpendicular (orthogonal)

### Calculation in Cartesian Coordinates

Cartesian coordinates were introduced by René Descartes in the 17th century. They provide a way to represent points in space using numerical values along orthogonal axes.

They help in calculating the dot product of two vectors.

Below, we'll use the notation (a₁, a₂, a₃) to represent a vector in three-dimensional space, where a₁, a₂, and a₃ are the components along the x, y, and z axes, respectively.

If A = (a₁, a₂, a₃) and B = (b₁, b₂, b₃), then:

A · B = a₁b₁ + a₂b₂ + a₃b₃

### Applications in Physics

1. **Work**: W = F · d (Force dot product with displacement)
2. **Power**: P = F · v (Force dot product with velocity)
3. **Electric Potential Energy**: U = q₁q₂ / (4πε₀r) (r is position vector)
4. **Projection**: Finding the component of one vector along another

## Cross Product (Vector Product)

The cross product of two vectors results in a vector quantity.

### Definition

For two vectors A and B, their cross product is defined as:

A × B = |A| |B| sin(θ) n

Where n is a unit vector perpendicular to both A and B, following the right-hand rule.

### Properties

1. Anti-commutative: A × B = -(B × A)

    Anti-commutative means that the order of the vectors matters, and the result is negated when the order is reversed.

2. Distributive over addition: A × (B + C) = (A × B) + (A × C)

    Distributive property means that the cross product distributes over vector addition.

3. Not associative: A × (B × C) ≠ (A × B) × C

    The cross product is not associative, meaning that the order of operations matters.

4. A × A = 0 (zero vector)

    The cross product of a vector with itself is always the zero vector.

5. If A × B = 0, the vectors are parallel

    If the cross product of two vectors is zero, the vectors are parallel or antiparallel.

### Calculation in Cartesian Coordinates

Similar to the dot product, Cartesian coordinates are used to calculate the cross product of two vectors.

If A = (a₁, a₂, a₃) and B = (b₁, b₂, b₃), then:

A × B = (a₂b₃ - a₃b₂, a₃b₁ - a₁b₃, a₁b₂ - a₂b₁)

### Applications in Physics

1. **Torque**: τ = r × F (Position vector cross product with force)
2. **Angular Momentum**: L = r × p (Position vector cross product with linear momentum)
3. **Magnetic Force**: F = q(v × B) (Velocity cross product with magnetic field)
4. **Area of a Parallelogram**: Area = |A × B|

## Comparison of Dot and Cross Products

1. **Result**:

    - Dot product: Scalar
    - Cross product: Vector

2. **Geometric Interpretation**:

    - Dot product: Projection of one vector onto another
    - Cross product: Area of parallelogram formed by two vectors

3. **Commutativity**:

    - Dot product: Commutative
    - Cross product: Anti-commutative

4. **Physical Meaning**:
    - Dot product: Often related to work or energy
    - Cross product: Often related to rotation or orientation

## Examples

1. **Dot Product Example**:
   Calculate the work done by a force F = (3, 4, 0) N moving an object through a displacement d = (2, 2, 1) m.

    Work = F · d = (3)(2) + (4)(2) + (0)(1) = 6 + 8 + 0 = 14 J

2. **Cross Product Example**:
   Find the torque produced by a force F = (2, 0, -3) N applied at a point r = (0, 4, 0) m from the axis of rotation.

    τ = r × F = (0, 4, 0) × (2, 0, -3) = (12, 0, 8) N·m

## Conclusion

The dot product and cross product are powerful tools in vector algebra with numerous applications in physics and engineering. The dot product is particularly useful for calculating work and projections, while the cross product is essential for dealing with rotational motion and magnetic forces. Understanding these operations is crucial for solving complex problems in mechanics, electromagnetism, and other areas of physics.

As you continue your studies, you'll encounter these products in various contexts, often combined with other vector operations. Mastering these concepts will provide you with a strong foundation for understanding more advanced topics in physics and mathematics.
