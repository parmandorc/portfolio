---
title: FlockAI
description: FlockAI
keywords: flockai, flock, ai, flock ai, unreal, flocking, behavior, behaviour
featured: secondary
intro: Implementation of a flocking behavior algorithm, featuring reaction to external stimuli.
tags:
 - artificial intelligence
 - flocking behavior
 - unreal
 - blueprint
 - c++
video_id: 39Wc7Bgj5gI
type: Personal project
position: Main programmer
dates: May 2015
links: 
 - GitHub: https://github.com/parmandorc/FlockAI
priority: 20 
---

{% assign image_path = page.url | split: "/" | last | prepend: '/assets/images/' | prepend: site.baseurl %}

This is an implementation of the traditional approach to flocking behavior, based on three components:
- Alignment. Agents follow the direction of the group.
- Cohesion. Agents stay together in a group.
- Separation. Agents move away from each other so the group does not collapse.

As a personal contribution, the algorithm doesn't use normalized vectors for each component as in the traditional approach. By contrast, vectors are proportional in length to the distances, which contributes to a more realistic behavior.

Furthermore, agents are able to react to external stimuli – they will move towards green dots and away from the red ones (similar to going towards food and away from danger). This allows for very interesting emergent behaviors.

<div class="image-group">
	<div><img alt="Emergent behavior: agents fenced in using red dots" src="{{image_path}}/fence-in.jpg" /></div>
	<div><img alt="Emergent behavior: agents avoiding an obstacle" src="{{image_path}}/avoid.jpg" /></div>
</div>

This was the first project I developed in Unreal, thus one of the goals was to gain familiarity with such an engine that is widely used in the industry. Hence, the project was developed using both Blueprint for the main algorithm, and C++ for the other parts of the game that hold the context on which the algorithm is used.

As a final note, one of the delights of the project was when, after one month of development, the final result was shared with family and friends in order to test its usability, and some of them would continue playing after the test was over, which shows the algorithm's potential as a possibly enjoyable game mechanic in a game.
