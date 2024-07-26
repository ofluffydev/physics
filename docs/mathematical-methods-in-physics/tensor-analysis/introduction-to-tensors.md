---
title: Introduction to Tensors
sidebar_position: 1
---

# Introduction to Tensors

### 1. What are Tensors?

Tensors are mathematical objects that generalize scalars, vectors, and matrices to higher dimensions. They are fundamental in various fields of physics, engineering, and computer science, particularly in areas such as relativity theory, continuum mechanics, and machine learning.

A tensor can be thought of as a multi-dimensional array of numbers, with rules for how these numbers transform under changes of coordinates.

:::note
You made have heard of this word in "TensorFlow" which is a popular library for machine learning. The name "TensorFlow" comes from the operations that neural networks perform on multidimensional arrays (tensors).
:::

### 2. Tensor Order

The order (or rank) of a tensor is the number of indices required to specify an element of the tensor:

-   Scalar: 0th order tensor (single number)
-   Vector: 1st order tensor (array of numbers)
-   Matrix: 2nd order tensor (2D array of numbers)
-   Higher-order tensors: 3rd order and above (3D+ arrays of numbers)

### 3. Tensor Notation

Tensors are often denoted using index notation. For example:

-   Scalar: A
-   Vector: A_i
-   Matrix: A_ij
-   3rd order tensor: A_ijk

The subscript indices indicate the components of the tensor.

### 4. Einstein Summation Convention

In tensor analysis, we often use the Einstein summation convention, where repeated indices in a term imply summation over that index. For example:

A_i B^i = ∑_i A_i B^i

This convention simplifies many tensor expressions.

### 5. Tensor Operations

Some basic tensor operations include:

a) Tensor Addition: (A + B)\_ijk = A_ijk + B_ijk

b) Tensor Multiplication: (A ⊗ B)\_ijkl = A_ij B_kl

c) Contraction: Reducing the order of a tensor by summing over two indices

### 6. Example: Stress Tensor

In continuum mechanics, the stress tensor σ_ij represents the state of stress at a point in a material. It's a 2nd order tensor with 9 components in 3D space:

σ_ij = [σ_xx σ_xy σ_xz]
[σ_yx σ_yy σ_yz]
[σ_zx σ_zy σ_zz]

Each component represents the stress acting on a particular face in a particular direction.

### 7. Practice Problems

1. Given a 2nd order tensor A_ij and a vector v_j, compute the product B_i = A_ij v_j.

    TODO: Add solution

2. For a 3rd order tensor T_ijk, what is the result of the contraction S_ik = T_ijk δ^j_k, where δ^j_k is the Kronecker delta?

    TODO: Add solution

3. In special relativity, the electromagnetic field tensor F^μν is an antisymmetric 2nd order tensor. Write out its components in terms of electric field E and magnetic field B.

    TODO: Add solution

Remember, tensors are powerful tools for describing physical phenomena and mathematical structures. Practice and visualization are key to developing intuition for these multi-dimensional objects.
