---
title: Descent
keywords: descent, unreal, eye, game, goldsmiths, msccge
featured: primary
intro: Puzzle horror game developed in Unreal. Contribution includes the development of the AI system and other general gameplay elements.
tags:
 - artificial intelligence
 - gameplay programming
 - behavior tree
 - pathfinding
 - unreal
 - blueprint
video_id: H7Oh1xJ3M38
type: Group coursework
position: AI/gameplay programmer
dates: Dec 2016 - Jan 2017
links: 
 - GitHub: https://github.com/parmandorc/Descent
priority: 0
---

{% assign image_path = page.url | split: "/" | last | prepend: '/assets/images/' | prepend: site.baseurl %}

This was the first big group project I got to partake in during my time at _Goldsmiths, University of London_, that involved collaboration between programmers and artists (3 and 4 students, respectively). Hence, team and social skills were essential in the development of the project.

As the AI programmer of the team, my main responsibility was the development of the AI system in the game. The AI of the enemy is based on a Behavior Tree, with two basic behaviors: cyclic patrolling through a set of waypoints, and chasing the player when in vision range (and going to their last known location when losing vision of them). Although the Behavior Tree is rather simple, it has served to gain familiarity with the AI tools available in Unreal Engine. This includes the Blackboard and BT assets, or the different types of nodes for BT Blueprint programming, such as tasks, decorators and services, but also other systems like the NavMesh and its settings.

<div class="image-group">
	<div><img alt="Screenshot of the Behaviour Tree blueprint in Unreal" src="{{image_path}}/behaviorTree.jpg" /></div>
	<div><img alt="Screenshot of the NavMesh used in Descent" src="{{image_path}}/navmesh.jpg" /></div>
</div>

However, I also got to develop other gameplay elements, particularly three of the puzzles in the game: the 9 tiles puzzle, the day-night switch and the main altar / final puzzle. This involved work with different aspects of gameplay programming, such as camera animation, management of objects in the scene, collisions, player input, and even some level streaming (used for the day and night scenarios).

Finally, after some communication issues and technical difficulties were solved, the game was finished in time with all of its main major features. In fact, part of the team keeps working on the game to this day with the idea of possibly trying to publish it in the future.
