---
title: Bridges
description: Bridges (Bullet Physics Demo)
keywords: physics, bullet, constraint, hinge, spring, goldsmiths, msccge
intro: Demo of the Bullet Physics engine showcasing a scene with bridges constructed with constraints.
tags:
 - physics
 - c++
video_id: 8KyBjUC-2BE
type: Individual coursework
position: Main programmer
dates: Oct 2016 - Nov 2016
links: 
 - GitHub: https://github.com/parmandorc/octet/tree/master/octet/src/examples/example_shapes
---

{% assign image_path = page.url | split: "/" | last | prepend: '/assets/images/' | prepend: site.baseurl %}

This was a quick project developed for the __Tools & Middleware__ course (MScCGE at Goldsmiths, University of London), thought as a demo of the Bullet Physics engine.

The application shows a scene with physically-based bridges, constructed with the two main types of constraints in the Bullet SDK (hinges and springs).

Each type of constraint has a different set of parameters that can be tweaked, and so both types of bridges behave in a slightly different way.
