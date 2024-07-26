---
title: Probability distributions
sidebar_position: 1
---

# Probability Distributions in Physics

## Introduction

Probability distributions are fundamental tools in physics for describing the likelihood of various outcomes in experiments or natural phenomena. They provide a mathematical framework for understanding and predicting the behavior of systems with inherent randomness or uncertainty.

## Types of Probability Distributions

### 1. Discrete Probability Distributions

Discrete probability distributions deal with countable outcomes. In physics, they often describe quantized systems or events that can only take on specific values.

#### 1.1 Binomial Distribution

The binomial distribution models the number of successes in a fixed number of independent trials, each with the same probability of success.

**Example**: Radioactive decay of a sample of atoms over a fixed time interval.

#### 1.2 Poisson Distribution

The Poisson distribution describes the number of events occurring in a fixed interval of time or space, given a known average rate.

**Example**: The number of cosmic ray hits on a detector in a given time period.

Problem: A cosmic ray detector registers an average of 5 hits per minute. What is the probability of detecting exactly 3 hits in a one-minute interval?

TODO: Add solution

### 2. Continuous Probability Distributions

Continuous probability distributions deal with outcomes that can take any value within a range. They are described by probability density functions (PDFs).

#### 2.1 Uniform Distribution

The uniform distribution assigns equal probability to all outcomes within a given range.

**Example**: The position of a particle in a box, assuming it's equally likely to be anywhere within the box.

#### 2.2 Normal (Gaussian) Distribution

The normal distribution is characterized by its bell-shaped curve and is fundamental in many physical phenomena due to the Central Limit Theorem.

**Example**: The velocity distribution of gas molecules in a container at thermal equilibrium.

#### 2.3 Exponential Distribution

The exponential distribution models the time between events in a Poisson process.

**Example**: The time between radioactive decays in a sample.

Problem: The half-life of a radioactive isotope is 10 minutes. What is the probability that a given atom will decay within the next 5 minutes?

TODO: Add solution

## Applications in Physics

### 1. Quantum Mechanics

Probability distributions are central to quantum mechanics, where the wavefunction describes the probability distribution of finding a particle in a particular state.

**Example**: The probability distribution of electron positions in an atom's orbitals.

### 2. Statistical Mechanics

In statistical mechanics, probability distributions are used to describe the behavior of large numbers of particles.

**Example**: The Maxwell-Boltzmann distribution of molecular speeds in a gas.

### 3. Experimental Physics

Probability distributions are crucial in analyzing experimental data and understanding measurement uncertainties.

**Example**: The distribution of repeated measurements of a physical quantity.

## Important Concepts

### 1. Probability Density Function (PDF)

The PDF, f(x), describes the relative likelihood of a continuous random variable taking on a specific value. It has the properties:

1. f(x) ≥ 0 for all x
2. ∫f(x)dx = 1 (over the entire range)

### 2. Cumulative Distribution Function (CDF)

The CDF, F(x), gives the probability that a random variable X takes on a value less than or equal to x:

F(x) = P(X ≤ x) = ∫f(t)dt (from -∞ to x)

### 3. Expectation Value

The expectation value E[X] is the average value of a random variable over many trials:

For discrete distributions: E[X] = Σ x*i * P(x*i)
For continuous distributions: E[X] = ∫x * f(x)dx

## Conclusion

Understanding probability distributions is crucial for physicists to model and interpret various phenomena in nature. They provide a powerful tool for dealing with uncertainty and randomness in physical systems, from the quantum scale to astronomical observations.
