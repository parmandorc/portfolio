---
title: SplineCam
description: SplineCam
keywords: spline, bspline, maths, geometry, opengl, goldsmiths, msccge
intro: Spline editing tool aimed at definition and modification of a curve that a 3D camera will follow.
tags:
 - tools programming
 - 3d geometry & mathematics
 - c++
 - opengl
video_id: T_a2e2jTyLA
type: Group coursework
position: Programmer
dates: Jan 2017 - Feb 2017
links: 
 - GitHub: https://github.com/parmandorc/SplineCam
priority: 70
---

{% assign image_path = page.url | split: "/" | last | prepend: '/assets/images/' | prepend: site.baseurl %}

The goal of this project was to create a tool completely developed in C++/OpenGL, without the use of any auxiliary libraries or engines, with the purpose of learning how to set up a working graphic application from scratch.

The tool allows for the edition of a spline curve by modifying, creating and deleting its control points, and the use of a camera to follow the created path. The curve is implemented as a uniform B-spline, which makes it possible to have an arbitrary number of control points.

One of the key aspects of the application is the adaptive sampling for rendering the spline curve. While uniform sampling draws a straight segment after a fixed step through the curve, adaptive sampling uses more samples on sections of the curve that need so. This way, pronounced turns are sampled more intensively, while almost straight sections use only the needed amount of samples, thus achieving both maximum rendering quality and efficiency.

![Example of adaptive sampling for rendering a spline segment]({{image_path}}/adaptiveSampling.jpg)
