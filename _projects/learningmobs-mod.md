---
title: LearningMobs Mod
keywords: ai, artificial intelligence, reinforcement learning, qlearning, machine learning, minecraft, mod, forge
intro: Mod for Minecraft showcasing an implementation of a reinforcement learning algorithm for the combat AI of NPCs.
tags:
 - artificial intelligence
 - machine learning
 - reinforcement learning
 - minecraft forge
 - java
video_id: 
type: Personal project
position: Main programmer
dates: Oct 2014
links: 
 - GitHub: https://github.com/parmandorc/LearningMobs-Mod
 - Minecraft Forum: http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/2241864-learningmobs-mod
priority: 50
---

{% assign image_path = page.url | split: "/" | last | prepend: '/assets/images/' | prepend: site.baseurl %}

This is a mod for the game Minecraft that showcases an implementation of a reinforcement learning algorithm for the combat AI of NPCs (Non-Player Characters).

It was developed as a personal project during my BSc in Computer Science (at _Universidad Politécnica de Madrid_) in order to develop something that was specific to video games, in contrast with the generalistic nature of the work being done during said degree. In fact, a key goal was to create something that was closely related to the field of AI in video games, being this the first project I ever developed on that area. Finally, Minecraft was the chosen platform as it enabled quick development and had great available sources of documentation.

The project is an implementation of the SARSA q-learning algorithm, which is based on the idea that agents have a list of tasks they can perform, and will learn from experience which task is optimal for a given state of the fight.

Despite the limitations of the algorithm for its use in video games (elevated learning times, low scalability and complexity of determining the variables that take factor in the state of an in-game fight), the project served as an initial contact point with serious videogame development and the application of AI techniques to it.
