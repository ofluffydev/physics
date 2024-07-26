---
title: Center of mass
sidebar_position: 6
---

# Center of Mass

## Introduction

The center of mass (COM) is a fundamental concept in physics that represents the average position of mass in a system. It's crucial for understanding the motion of complex objects and systems of particles.

## Definition

The center of mass is the point in a body or system of bodies where, for many purposes, the system's mass behaves as if it were concentrated. For a system of particles, it's the average position weighted by mass.

## Mathematical Representation

For a system of discrete particles:

R_cm = (Σ m_i \* r_i) / M

Where:

-   R_cm is the position vector of the center of mass
-   m_i is the mass of the i-th particle
-   r_i is the position vector of the i-th particle
-   M is the total mass of the system (M = Σ m_i)

For continuous bodies:

R_cm = (∫ r dm) / M

Where:

-   r is the position vector
-   dm is an infinitesimal mass element
-   M is the total mass of the body

## Properties of Center of Mass

1. **Weighted Average**: The COM is the mass-weighted average position of all parts of the system.

2. **External Forces**: The motion of the COM is determined by external forces only; internal forces do not affect it.

3. **Simplification**: For many calculations, a complex system can be treated as a single particle located at its COM.

4. **Conservation**: In the absence of external forces, the COM of a closed system moves at constant velocity.

5. **Symmetry**: For objects with uniform density and symmetric shape, the COM is at the geometric center.

## Calculating Center of Mass

### For Discrete Particles

1. Choose a coordinate system.
2. Determine the mass and position of each particle.
3. Calculate the total mass of the system.
4. Use the formula: x_cm = (Σ m_i \* x_i) / M for each coordinate.

### For Continuous Bodies

1. Set up the appropriate integral based on the body's geometry.
2. Integrate to find the total mass and mass-weighted position.
3. Divide the mass-weighted position by the total mass.

## Applications

1. **Stability Analysis**: Determining whether an object will topple or remain stable.
2. **Projectile Motion**: Simplifying the analysis of complex objects in flight.
3. **Astrophysics**: Studying the motion of celestial bodies and systems.
4. **Robotics**: Balancing and controlling the motion of robots.
5. **Sports**: Analyzing techniques in gymnastics, diving, and other sports.

## Example Problems

### Problem 1: Discrete Particles

Three particles with masses m1 = 2 kg, m2 = 3 kg, and m3 = 4 kg are located at coordinates (0, 0), (2, 0), and (2, 2) meters respectively. Find the center of mass of the system.

TODO: Add solution.

### Problem 2: Rod with Varying Density

A rod of length L has a density that varies linearly from ρ0 at one end to 2ρ0 at the other end. Find the position of the center of mass from the less dense end.

TODO: Add solution.

### Problem 3: Composite Body

A solid hemisphere of radius R is attached to the base of a solid cylinder of the same radius and height h. Both have uniform density. Find the center of mass of the composite body.

TODO: Add solution.

### Problem 4: System of Moving Particles

Two particles of masses m and 2m are moving along the x-axis with velocities v and -v/2 respectively. At t=0, they are located at x=0 and x=L. Find the position of the center of mass as a function of time.

TODO: Add solution.

## Conclusion

Understanding the center of mass is crucial for analyzing the behavior of complex systems in physics and engineering. It simplifies many problems by allowing us to treat distributed masses as single points. The concept is fundamental in areas ranging from classical mechanics to astrophysics and has practical applications in fields like robotics and sports biomechanics.
