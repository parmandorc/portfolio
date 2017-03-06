---
title: Waypoint Pathfinding Demo
keywords: waypoint, pathfinding, a*, search, graph, goldsmiths, msccge
intro: Quick demo of waypoint pathfinding using the A* search algorithm.
tags:
 - artificial intelligence
 - pathfinding
 - unity3d
 - c#
video_id: so6phFdCQXw
type: Individual coursework
position: Main programmer
dates: Jan 2017
links: 
 - GitHub: https://github.com/parmandorc/WaypointPathfinding
priority: 60
---

{% assign image_path = page.url | split: "/" | last | prepend: '/assets/images/' | prepend: site.baseurl %}

This was a quick project developed over two 1-hour lab sessions on the __AI for games__ course (MScCGE at _Goldsmiths, University of London_), showcasing a very simple pathfinding system over a graph of waypoints.

The pathfinding is based on the A* search algorithm, and the edges in the graph can be either explicitly defined by a designer, or dynamically generated at start using raycasts.

Although very simple, the project served as a practice of the A* algorithm's implementation and as a quick introduction to waypoint-based pathfinding systems.
