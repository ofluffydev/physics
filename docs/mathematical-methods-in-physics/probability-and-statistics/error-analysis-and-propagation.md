---
title: Error analysis and propagation
sidebar_position: 4
---
# Error Analysis and Propagation in Physics

## Introduction

In physics, measurements are never perfect. Every experimental result comes with some degree of uncertainty. Error analysis is the process of evaluating these uncertainties, while error propagation deals with how these uncertainties affect calculations based on the measurements. Understanding these concepts is crucial for interpreting experimental results, comparing theory with observation, and designing experiments.

## Types of Errors

### 1. Systematic Errors

Systematic errors are consistent, repeatable inaccuracies that affect all measurements in the same way.

- **Causes**: Improperly calibrated instruments, consistent human bias, or flawed experimental design.
- **Characteristics**: They shift all measurements in the same direction.
- **Mitigation**: Careful calibration, improved experimental design, and cross-checking with different methods.

### 2. Random Errors

Random errors are unpredictable fluctuations in measurements due to precision limitations.

- **Causes**: Environmental fluctuations, limitations in instrument precision, or inherent variability in the measured phenomenon.
- **Characteristics**: They cause scatter in repeated measurements around the true value.
- **Mitigation**: Increasing the number of measurements and using statistical methods.

## Error Analysis

### 1. Absolute Error

The absolute error is the difference between the measured value and the true or accepted value.

Absolute Error = |Measured Value - True Value|

### 2. Relative Error

The relative error is the ratio of the absolute error to the true value, often expressed as a percentage.

Relative Error = (Absolute Error / True Value) × 100%

### 3. Precision and Accuracy

- **Precision**: Refers to the reproducibility of measurements. It's quantified by the standard deviation of repeated measurements.
- **Accuracy**: Refers to how close a measurement is to the true value. It's affected by both systematic and random errors.

Problem: A student measures the acceleration due to gravity ten times and gets the following values (in m/s²): 9.78, 9.82, 9.79, 9.81, 9.80, 9.83, 9.77, 9.80, 9.81, 9.79. The accepted value is 9.81 m/s². Calculate the mean, standard deviation, absolute error, and relative error of these measurements.

TODO: Add solution

## Error Propagation

Error propagation is the effect of variables' uncertainties on the uncertainty of a function based on them. When we perform calculations using measured quantities, the uncertainties in those quantities propagate to create uncertainty in the final result.

### General Rules for Error Propagation

Let z = f(x, y) be a function of two variables x and y with uncertainties δx and δy.

1. **Addition and Subtraction**: z = x ± y
   δz = √[(δx)² + (δy)²]

2. **Multiplication and Division**: z = xy or z = x/y
   (δz/z)² = (δx/x)² + (δy/y)²

3. **Power**: z = x^n
   δz/z = |n|(δx/x)

4. **General Function**: z = f(x, y)
   δz = √[(∂f/∂x × δx)² + (∂f/∂y × δy)²]

### Example: Calculating the Period of a Pendulum

The period (T) of a simple pendulum is given by T = 2π√(L/g), where L is the length of the pendulum and g is the acceleration due to gravity.

Problem: A student measures the length of a pendulum to be 1.00 ± 0.01 m and uses g = 9.81 ± 0.01 m/s². Calculate the period of the pendulum and its uncertainty.

TODO: Add solution

## Reporting Results

When reporting experimental results, it's crucial to include both the measured value and its uncertainty. The general format is:

Measurement = (Value ± Uncertainty) Units

Some key points to remember:

1. The uncertainty should typically be reported to one or two significant figures.
2. The measured value should be rounded to the same decimal place as the uncertainty.
3. Always include units with both the value and the uncertainty.

Example: If a measurement of voltage yields 5.237 V with an uncertainty of 0.013 V, it should be reported as:

V = (5.237 ± 0.013) V

## Advanced Topics

### 1. Chi-Square Test

The chi-square test is used to determine the goodness of fit between observed data and expected values based on a hypothesis.

χ² = Σ[(Observed - Expected)² / Expected]

### 2. Least Squares Fitting

Least squares fitting is a method for finding the best-fit line (or curve) for a set of data points by minimizing the sum of the squares of the residuals.

### 3. Monte Carlo Methods

Monte Carlo methods use random sampling to obtain numerical results and can be particularly useful for complex error propagation problems.

## Conclusion

Error analysis and propagation are fundamental skills in experimental physics. They allow scientists to quantify the reliability of their measurements, make meaningful comparisons between experiment and theory, and design more effective experiments. By understanding these concepts, physicists can make more accurate predictions, identify sources of discrepancies, and push the boundaries of scientific knowledge with confidence in their results.