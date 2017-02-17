---
title: L-systems
description: L-systems
keywords: l-systems, fractal, graphics, mathematics, grammar, goldsmiths, msccge
intro: Demo of generation of tree-like structures using L-systems.
tags:
 - 3d geometry & mathematics
 - c++
video_id: UeN48cfyfVo
type: Individual coursework
position: Main programmer
dates: Dec 2016
links: 
 - GitHub: https://github.com/parmandorc/octet/tree/l-systems/octet/src/examples/l_systems
---

{% assign image_path = page.url | split: "/" | last | prepend: '/assets/images/' | prepend: site.baseurl %}

This was a project developed for the __Mathematics & Graphics__ course (MScCGE at Goldsmiths, University of London), and it shows an implementation of L-systems, which are used for generating tree-like structures.

L-systems consist of a generative grammar that produces a string which is then processed using turtle-graphics to generate the resulting graphical structure.

<div class="image-group">
	<div><img alt="Example of a tree-like structure generated with the application" src="{{image_path}}/3.jpg" /></div>
	<div><img alt="Example of a tree-like structure generated with the application" src="{{image_path}}/4_variance.jpg" /></div>
</div>

The application allows the user to tweak several parameters to alter the generated structure. It is also possible to give a random factor to the generation, which produces more realistic results.

L-systems are also capable of generating other self-similar fractal structures, such as the Sierpinksy triangle (left) and the Dragon curve (right).

<div class="image-group">
	<div><img alt="Sierpinski triangle" src="{{image_path}}/SierpinskiTriangle.jpg" /></div>
	<div><img alt="Dragon curve" src="{{image_path}}/dragonCurve.jpg" /></div>
</div>
