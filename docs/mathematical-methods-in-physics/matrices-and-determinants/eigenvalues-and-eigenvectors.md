---
title: Eigenvalues and eigenvectors
sidebar_position: 4
---
# Eigenvalues and Eigenvectors

Eigenvalues and eigenvectors are fundamental concepts in linear algebra with wide-ranging applications in physics, engineering, and data science. They provide crucial information about linear transformations and are essential in many mathematical and scientific computations.

## Definitions

For a square matrix A, a non-zero vector v is an eigenvector of A if there exists a scalar λ such that:

Av = λv

The scalar λ is called an eigenvalue of A corresponding to the eigenvector v.

In other words, an eigenvector is a vector that, when transformed by the matrix, only changes by a scalar factor (the eigenvalue).

## Properties

1. **Eigenvector Scaling**: If v is an eigenvector of A with eigenvalue λ, then any scalar multiple of v is also an eigenvector with the same eigenvalue.

2. **Linear Independence**: Eigenvectors corresponding to distinct eigenvalues are linearly independent.

3. **Number of Eigenvalues**: An n×n matrix has at most n distinct eigenvalues.

4. **Trace and Determinant**:
    - The sum of the eigenvalues equals the trace of the matrix.
    - The product of the eigenvalues equals the determinant of the matrix.

5. **Eigenvalues of Triangular Matrices**: The eigenvalues of a triangular matrix are its diagonal entries.

6. **Eigenvalues of Inverse**: If λ is an eigenvalue of A, then 1/λ is an eigenvalue of A^(-1) (assuming A is invertible).

7. **Eigenvalues of Transpose**: A and A^T have the same eigenvalues.

## Finding Eigenvalues and Eigenvectors

### 1. Characteristic Equation

To find the eigenvalues:

1. Form the characteristic equation: det(A - λI) = 0
2. Solve this equation for λ

### 2. Finding Eigenvectors

For each eigenvalue λ:

1. Form the equation (A - λI)v = 0
2. Solve this homogeneous system to find v

### 3. Algebraic and Geometric Multiplicities

- The algebraic multiplicity of an eigenvalue is its multiplicity as a root of the characteristic equation.
- The geometric multiplicity is the dimension of the eigenspace (the space spanned by the eigenvectors) for that eigenvalue.
- The geometric multiplicity is always less than or equal to the algebraic multiplicity.

## Diagonalization

A matrix A is diagonalizable if it can be written as A = PDP^(-1), where D is a diagonal matrix of eigenvalues and P is a matrix whose columns are the corresponding eigenvectors.

Conditions for diagonalizability:
1. A has n linearly independent eigenvectors (where n is the dimension of A).
2. The geometric multiplicity equals the algebraic multiplicity for each eigenvalue.

## Applications

1. **Differential Equations**: Eigenvalues and eigenvectors are used to solve systems of differential equations.

2. **Principal Component Analysis (PCA)**: In data science, PCA uses eigenvectors of the covariance matrix to reduce dimensionality.

3. **Quantum Mechanics**: Eigenvalues and eigenvectors are fundamental in describing quantum states and observables.

4. **Vibration Analysis**: In engineering, they're used to analyze the natural frequencies and mode shapes of vibrating systems.

5. **Google's PageRank Algorithm**: The algorithm uses the principal eigenvector of the web graph to rank web pages.

6. **Facial Recognition**: Eigenfaces, based on eigenvectors, are used in some facial recognition algorithms.

7. **Stability Analysis**: In control theory, eigenvalues determine the stability of linear systems.

## Computational Methods

1. **Power Method**: An iterative method to find the dominant eigenvalue and its corresponding eigenvector.

2. **QR Algorithm**: An efficient method for computing all eigenvalues of a matrix.

3. **Lanczos Algorithm**: Used for large, sparse matrices to find a few eigenvalues and eigenvectors.

4. **Jacobi Eigenvalue Algorithm**: An iterative method for computing eigenvalues and eigenvectors of a symmetric matrix.

## Special Cases and Related Concepts

1. **Symmetric Matrices**:
    - All eigenvalues are real.
    - Eigenvectors corresponding to distinct eigenvalues are orthogonal.

2. **Hermitian Matrices**:
    - Similar properties to symmetric matrices, but for complex matrices.

3. **Orthogonal Matrices**:
    - All eigenvalues have absolute value 1.

4. **Singular Value Decomposition (SVD)**:
    - A generalization of the eigendecomposition to rectangular matrices.

5. **Jordan Canonical Form**:
    - A generalization for matrices that are not diagonalizable.

## Practical Considerations

1. **Numerical Stability**: Computing eigenvalues and eigenvectors can be numerically sensitive, especially for large matrices.

2. **Software Libraries**: Many numerical libraries (like LAPACK) provide efficient and stable algorithms for eigenvalue computation.

3. **Approximation**: In many applications, approximating a few dominant eigenvalues and eigenvectors is sufficient and more efficient than computing all of them.

4. **Sparse Matrices**: Special algorithms exist for efficiently computing eigenvalues of large, sparse matrices.

Understanding eigenvalues and eigenvectors is crucial in many areas of mathematics, physics, and engineering. They provide powerful tools for analyzing linear transformations, solving differential equations, and understanding the behavior of complex systems.