---
title: Procedural Terrain Generator
description: PTG
keywords: procedural terrain generation, procedural content generation, upm, universidad politécnica de madrid, etsiinf, escuela técnica superior de ingenieros informáticos, grado, ingeniería informática, practicum, internship, proyecto final de grado, final degree project, lurtis rules
featured: secondary
intro: Terrain generation tool based in Perlin noise, which also performs the generation of water bodies and roads.
tags:
 - procedural content generation
 - artificial intelligence
 - tools
 - multithreading programming
 - data structures
 - unity3d
 - c#
video_id: 
type: Internship & Final Degree Project
position: Main developer
dates: Sep 2015 - Jul 2016
links: 
 - GitHub: https://github.com/parmandorc/PCG
---

{% assign image_path = page.url | split: "/" | last | prepend: '/assets/images/' | prepend: site.baseurl %}

This project was developed during an internship at the MIDAS research group of the _Universidad Politécnica de Madrid_, in collaboration with the company [Lurtis Rules](https://www.lurtis.com/), during the first term of the last year of my BSc in Computer Science. The project was then continued during the second and last term as Final Degree Project. The project was chosen as it was something I could work on during my generalistic BSc that was specifically related to videogames and artificial intelligence.

The main goals of the project were, first, to show the potential of _on-the-fly_ generation –that is, the ability to generate all the results on runtime from as little definition data as possible–, and second, to develop a tool with rich and dynamic interaction –i.e., with a wide range of inputs to allow the user to control the results in depth.

As a note, the tool was developed using a multithreaded architecture that is used, amongst others, by the level streaming system – the terrain is divided into chunks, and only the visible chunks are loaded and recalculated. The architecture uses coroutines to syncronize the different threads that perform the heavy computations of the different algorithms, abstracting them from the main thread so that the interaction with the UI is kept as fluid as possible.

The tool uses fractalized Perlin noise for the generation of terrain. The algorithm can be controlled using different parameters. Furthermore, the user can define different terrain areas, each one of them with its own values for the different parameters that control the terrain's generation.

<div class="image-group">
	<div><img alt="Example of the multiarea editor UI" src="{{image_path}}/multiareaUI.jpg" /></div>
	<div><img alt="Results for the given example of the multiarea editor UI" src="{{image_path}}/multiareaResults.jpg" /></div>
</div>

Several self-designed flooding algorithms are used for the generation of water bodies: rivers, lakes, seas, oceans...

<div class="image-group">
	<div><img alt="Example of river generation" src="{{image_path}}/river.jpg" /></div>
	<div><img alt="Example of ocean / lakes generation" src="{{image_path}}/ocean.jpg" /></div>
</div>

Roads or paths can be generated using the A* search algorithm. The user can control the generated results by setting a maximum slope the path can have, or a penalty to the algorithm's cost function for path sections that are constructed as bridges over water bodies.

<div class="image-group">
	<div><img alt="Example of road generation" src="{{image_path}}/road.jpg" /></div>
	<div><img alt="Example of road generation as a bridge over a water body" src="{{image_path}}/bridge.jpg" /></div>
</div>
