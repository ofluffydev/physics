---
title: Two-Dimensional Motion
sidebar_position: 4
sidebar_label: 3D Motion
---

# Lesson: Three-Dimensional Motion in Kinematics

## Introduction

Three-dimensional motion extends the principles of kinematics to describe movement in space. This concept is crucial for understanding complex real-world motions, from the trajectory of spacecraft to the motion of particles in accelerators.

## Key Concepts

### 1. Position in 3D Space

- Position is represented by coordinates (x, y, z) in a Cartesian coordinate system.
- Position vector: r = xi + yj + zk, where i, j, and k are unit vectors in the x, y, and z directions respectively.

### 2. Displacement

- Displacement is a vector quantity: Δr = (Δx, Δy, Δz)
- Magnitude: |Δr| = √(Δx² + Δy² + Δz²)
- Direction is described by two angles:
    - Azimuthal angle (θ): tan⁻¹(√(x² + y²) / z)
    - Polar angle (φ): tan⁻¹(y / x)

### 3. Velocity

- Velocity in 3D is a vector: v = (vx, vy, vz)
- Average velocity: v_avg = Δr / Δt
- Instantaneous velocity: v = dr/dt = (dx/dt)i + (dy/dt)j + (dz/dt)k
- Speed (magnitude of velocity): |v| = √(vx² + vy² + vz²)

### 4. Acceleration

- Acceleration in 3D is a vector: a = (ax, ay, az)
- Average acceleration: a_avg = Δv / Δt
- Instantaneous acceleration: a = dv/dt = (d²x/dt²)i + (d²y/dt²)j + (d²z/dt²)k

## Equations of Motion in 3D

For constant acceleration, we extend the equations of motion to three dimensions:

1. Velocity-Time Relationship:
   v = v₀ + at

   In components:
    - vx = v₀x + axt
    - vy = v₀y + ayt
    - vz = v₀z + azt

2. Position-Time Relationship:
   r = r₀ + v₀t + ½at²

   In components:
    - x = x₀ + v₀xt + ½axt²
    - y = y₀ + v₀yt + ½ayt²
    - z = z₀ + v₀zt + ½azt²

3. Velocity-Displacement Relationship:
   v² = v₀² + 2a(r - r₀)

   In components:
    - vx² = v₀x² + 2ax(x - x₀)
    - vy² = v₀y² + 2ay(y - y₀)
    - vz² = v₀z² + 2az(z - z₀)

## Example Problems

### Example 1: Spacecraft Motion

A spacecraft is launched with an initial velocity of 1000 m/s at an angle of 60° to the horizontal and 30° east of north. Calculate its position after 10 seconds, assuming no air resistance and constant gravitational acceleration of 9.8 m/s² downward.

Solution:
1. Decompose initial velocity:
   v₀x = 1000 * cos(60°) * cos(30°) = 433 m/s
   v₀y = 1000 * cos(60°) * sin(30°) = 250 m/s
   v₀z = 1000 * sin(60°) = 866 m/s

2. Apply equations of motion:
   x = 0 + 433 * 10 = 4330 m
   y = 0 + 250 * 10 = 2500 m
   z = 0 + 866 * 10 - ½ * 9.8 * 10² = 8170 m

The spacecraft's position after 10 seconds: (4330 m, 2500 m, 8170 m)

### Example 2: Particle in a Magnetic Field

A charged particle enters a uniform magnetic field with velocity v = (2i + 3j + 4k) m/s. The magnetic field is B = (0i + 0j + 1k) Tesla. Calculate the initial acceleration of the particle if its charge-to-mass ratio (q/m) is 2 C/kg.

Solution:
The acceleration is given by the Lorentz force law: a = (q/m)(v × B)

1. Calculate cross product v × B:
   v × B = (3 - 2)i + (-4 - 0)j + (0 - 0)k = i - 4j

2. Multiply by charge-to-mass ratio:
   a = 2(i - 4j) = 2i - 8j m/s²

The initial acceleration is (2, -8, 0) m/s².

## Applications of 3D Motion

1. Orbital mechanics for satellites and spacecraft
2. Particle physics in accelerators
3. Robotics and 3D printing
4. Virtual reality and 3D animation
5. Sports analysis (e.g., golf ball trajectories)
6. Atmospheric and oceanic circulation models

## Conclusion

Understanding three-dimensional motion is crucial for analyzing complex real-world scenarios. It forms the foundation for advanced studies in physics, engineering, and computer graphics. The principles learned here extend to more complex systems in classical mechanics and even to relativistic motion in modern physics.

## Practice Problems

1. A football is kicked with an initial velocity of 25 m/s at an angle of 45° to the horizontal and 30° to the east of north. Calculate its position after 2 seconds, assuming no air resistance.

2. A drone starts at position (0, 0, 10) meters and moves with constant velocity v = (2i + 3j - 1k) m/s. Where will it be after 5 seconds?

3. An electron in a particle accelerator moves with velocity v = (10⁶i + 10⁶j + 10⁶k) m/s in a magnetic field B = (0i + 2j + 0k) Tesla. If the charge-to-mass ratio of an electron is -1.76 × 10¹¹ C/kg, what is its initial acceleration?
