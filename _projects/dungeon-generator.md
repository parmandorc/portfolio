---
title: Dungeon Generator
description: Dungeon Generator
keywords: dungeon, generator, eye, procedural generation, fbx, goldsmiths, msccge
intro: Tool for procedural generation of dungeons from a kit of modular assets.
tags:
 - procedural content generation
 - tools programming
 - python
 - fbx
video_id: 4XtY1zG42ec
type: Group coursework
position: Lead programmer
dates: Nov 2016 - Jan 2017
links: 
 - GitHub: https://github.com/eliodeberardinis/Tools_Middleware_2_Dungeon
---

{% assign image_path = page.url | split: "/" | last | prepend: '/assets/images/' | prepend: site.baseurl %}

This tool was developed as a group coursework project for the __Tools & Middleware__ course (MScCGE at Goldsmiths, University of London). The tool's goal is procedurally generating dungeon-like structures using a given kit of modular assets. It was fully developed in Python, making use of the FBX SDK.

The system recursively builds the dungeon from an initially generated graph of the dungeon's high-level structure, placing the different tile assets by following the generation algorithm. Some of the most interesting aspects of the algorithm are:

- Tile concatenation. In the generation of corridors, the system efficiently manages to place each tile assets after each other by performing calculations and transformations based on the tiles' dimensions and structure.
- Collision system. In order to avoid corridors overlapping each other, the tool has a bounding-box based collision system, which features several optimizations, such as bulk/matrix computations using the NumPy library, or using a more efficient AABB-based collision system when possible.
- Backtracking capability. The system is able to resume generation from a previous point when reaching a point where all the corridor alternatives are inviable.
- Room decoration. The tool performs several customizations and decorations to the rooms, which bring a lot of character to them, and give the final touch to the generated dungeon.

<div class="image-group">
	<div><img alt="Example of room decoration: 4 column structure" src="{{image_path}}/decorations1.jpg" /></div>
	<div><img alt="Example of room decoration: large column" src="{{image_path}}/decorations2.jpg" /></div>
</div>
