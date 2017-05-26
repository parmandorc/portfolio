---
title: Vision Vehicles
keywords: ai, artificial intelligence, neural networks, image recognition, machine learning, unreal
intro: Project on the use of image recognition and machine learning in AI controllers for vehicles in games.
tags:
 - artificial intelligence
 - machine learning
 - neural network
 - unreal
 - c++
 - blueprint
video_id: kOtsuPAOgUg
type: Group coursework
position: Lead programmer
dates: May 2017
links: 
 - GitHub: https://github.com/parmandorc/VisionVehicles
priority: 35
---

{% assign image_path = page.url | split: "/" | last | prepend: '/assets/images/' | prepend: site.baseurl %}

This is project seeks to prove the viability of image recognition techniques and machine learning in the field of video games.

The vehicle in this project uses a camera that is attached to it in order to render an image of the world around it and obtain useful information of the position of the road. This information is then used as input to the neural network that controls its movement, which outputs the throttle and steering of the vehicle. 

Moreover, the neural network can be trained using supervised learning by leaving control of the vehicle to the user – this way, the NN uses the input image and the controls of the player as training data. In other words, during training, the NN adjusts its internal model (the weights of the connections between neurons) depending in order to minimize the error between the outputs the NN would have given with the current frame's image, and the expected outputs the user is describing with their controls.
