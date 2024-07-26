---
title: Tensor operations
sidebar_position: 2
---

# Tensor Operations

### 1. Introduction

Tensor operations are fundamental in tensor analysis, allowing us to manipulate and combine tensors in various ways. These operations are crucial in fields such as physics, engineering, and machine learning. This lesson will cover the most common tensor operations and their properties.

### 2. Tensor Addition and Subtraction

Tensor addition and subtraction are only defined for tensors of the same order and dimensions.

**Addition**: (A + B)\_ijkl... = A_ijkl... + B_ijkl...
**Subtraction**: (A - B)\_ijkl... = A_ijkl... - B_ijkl...

Properties:

-   Commutative: A + B = B + A
-   Associative: (A + B) + C = A + (B + C)

Example:
For 2nd order tensors A and B:
(A + B)\_ij = A_ij + B_ij

### 3. Scalar Multiplication

A tensor can be multiplied by a scalar (a number):

(cA)\_ijkl... = c \* A_ijkl...

where c is a scalar and A is a tensor.

### 4. Tensor Product (Outer Product)

The tensor product, also known as outer product, combines two tensors to form a higher-order tensor:

(A ⊗ B)\_ijkl... = A_ij... \* B_kl...

Example:
For a vector u_i and a vector v_j, their tensor product is a 2nd order tensor:
(u ⊗ v)\_ij = u_i \* v_j

### 5. Contraction

Contraction reduces the order of a tensor by summing over two indices:

C_ik... = A_ijk...

Here, we sum over the repeated index j.

Example:
For a 3rd order tensor T_ijk, contracting over i and k gives a vector:
v_j = T_iji

### 6. Inner Product

The inner product of two tensors of the same order is obtained by contracting all indices:

A : B = A_ijkl... \* B_ijkl...

For vectors, this reduces to the dot product:
a · b = a_i \* b_i

### 7. Tensor Trace

The trace of a 2nd order tensor is the sum of its diagonal elements:

tr(A) = A_ii = A_11 + A_22 + A_33 + ...

### 8. Transpose

For a 2nd order tensor, the transpose is obtained by swapping the indices:

(A^T)\_ij = A_ji

### 9. Symmetric and Antisymmetric Parts

Any 2nd order tensor can be decomposed into symmetric and antisymmetric parts:

A_ij = (1/2)(A_ij + A_ji) + (1/2)(A_ij - A_ji)
= S_ij + W_ij

where S_ij is symmetric and W_ij is antisymmetric.

### 10. Tensor Differentiation

Partial differentiation of a tensor with respect to a coordinate is denoted by a comma:

A_ij,k = ∂A_ij / ∂x_k

### 11. Practice Problems

1. Given tensors A_ij and B_jk, compute C_ik = A_ij \* B_jk. What operation is this?

    TODO: Add solution

2. For a 2nd order tensor T_ij, compute its symmetric and antisymmetric parts.

    TODO: Add solution

3. Given a vector field v_i(x_j), compute its divergence (∇ · v) and curl (∇ × v)\_i in tensor notation.

    TODO: Add solution

### 12. Further Topics

-   Tensor calculus (integration of tensor fields)
-   Levi-Civita symbol and its applications
-   Metric tensor and its role in raising/lowering indices
-   Tensor decomposition techniques (e.g.
