---
title: Colouring Book
keywords: colour, color, colouring, book, unreal, game, goldsmiths, msccge
featured: primary
intro: Local-multiplayer game developed in Unreal, with gameplay that could be shortly described as 'Splatoon meets Left 4 Dead'.
tags:
 - artificial intelligence
 - gameplay programming
 - physics
 - finite state machine
 - unreal
 - c++
video_id: 7CaVnZiIwJc
type: Group coursework
position: Lead programmer
dates: Mar 2017 - Apr 2017
links: 
 - GitHub: https://github.com/parmandorc/ColouringBook
 - Report (gameplay): https://www.dropbox.com/s/p0165gcnea0t4ih/ColouringBook_ProjectReport.pdf?dl=0
 - Report (AI): https://www.dropbox.com/s/auaiqyqc5q54z18/ColouringBook-AI.pdf?dl=0
priority: -1
---

{% assign image_path = page.url | split: "/" | last | prepend: '/assets/images/' | prepend: site.baseurl %}

This was the second and last big group project I worked in during my time at _Goldsmiths, University of London_, involving both programmers and artists (3 of each).

One of my main contributions to the game was the implementation of the painting mechanic, that is, the ink that splatters on to the paper when shooting the enemies, which combines elements of fluid physics and graphics programming. The effect of the ink on the paper is in fact achieved by dynamically painting a texture on runtime.

The second main contribution was the implementation of the AI Director in the game. This system tracks an estimation of the levels of stress of each player, and adapts the spawning of enemies accordingly. The Director is implemented as a Finite State Machine, and its purpose is to create waves of enemies that are customized to the player's needs. This way, players that need so will have usual breaks to recover after dealing with numerous enemies, while more demanding players will be able to play uninterruptedly with increased spawn rates and less long waiting periods. This way of adapting gameplay to the player is an example of AI's goal of enhancing the player's experience.

Finally, as the lead programmer of the team, my responsibilities included organizing the tasks of each programmer in the team according to their course requirements, ensuring that communication with artist is always open, and committing to making our game the best we can given the time limitations.
