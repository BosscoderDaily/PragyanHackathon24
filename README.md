# Smart Traffic System Managament System
*The Tetralogy's submission for the Pragyan Hackathon '24*

### Visit (here)[https://bosscoderdaily.github.io/PragyanHackathon24/] and show the camera pictures of cars or a road with cars or cars themselves to have a quick demo of how our model works before we dive in.

## Introduction

In an age of excruciatingly exasperating amounts of traffic on the roads and a still developing system to tackle this issue, the rise of AI and machine leanring and its utility in day-to-day use cases can very easily provide to be a plausible solution to the management of traffic in urban cities and populous towns. As we step towards futuristic cities with smart application of Language models, we believe our **- Smart Traffic Signal Management System -** is an efficient, low-cost and high-utility solution which can be established by ***local communities and municipality managements or local governing bodies*** to improve the traffic conditions of the region. There are two parts in the project; the AI Traffic Signal and the Public Transport Assistant.


![image](https://github.com/BosscoderDaily/PragyanHackathon24/assets/37211017/3df6b597-fa3f-403b-a213-1422d00e9b16)


### AI Traffic System
A system that is already established in countries like The United Arab Emirates and the US, having smart ComputerVision enabled cameras in the cameras near the traffic signals to analyse the varying levels of traffic at each junction based on the time/day of the week and clear up or change the signal lights based on these conditions, a few reasons this system may have had obstacles to establish in India may be:
- high cost of set-up
- technical insufficieny

However, these are no longer problems given the advances that we have made in the world of Machine Leanring and Language Models, and the ease of language models to adapt ot varying datasets with Retrieval Augmented Generation. In our repo, we have uploaded the basic Html and associated files we have used to make a basic car detection web-app. While we initially conisdred using a bigger level language model like LLama or Pathway, we settled with a ***simple and easy to use model*** like tensorflow.js due to
- ease of set-up
- low-cost
- availablity of pre-trained models
- ease of fine-tuning


![image](https://github.com/BosscoderDaily/PragyanHackathon24/assets/37211017/244543dd-8e6d-4dab-aea0-2197099f11c0)

The model is to be linked to a camera facing each road in a junction, and is coded such that is automatically stores an array of numbers representing the number of cars it detects in each road and stores this in a .csv file. A similar file is uploaded for instance. These csv files can then be fed into another leanring model which we have trained using the SimpleML extension on Google sheets.

![image](https://github.com/BosscoderDaily/PragyanHackathon24/assets/37211017/75376cf4-bebc-493d-bd72-cc2e152480ac)


Below are images of the data set based on which we trained a basic model to determine how much traffic is there on a road from a scale of 1 to 4, 1 being low and 4 being bing very high on the basis of number of cars present in varying distances on the road.

<img width="961" alt="Screenshot 2024-01-28 at 4 31 00 PM" src="https://github.com/BosscoderDaily/PragyanHackathon24/assets/37211017/e27d7a1c-8261-421d-92f6-8101a002a341">

Below is a Google Colab containing an exported version of the model we trained in sheets, along with the sheets dataset link.

[https://colab.research.google.com/drive/1fn0r9ezM1qaA0vxuNTQ7WEq7mhn1n_BP?usp=sharing]

[https://docs.google.com/spreadsheets/d/1y6qCOJOvMbC0j6FaBcnIfX4eUMCetTxBGRrF3McYryY/edit?usp=sharing]

### Public Transport Assistant

Due to shortages in our resources and capability to finsih the project within the stipulated time, the full fledged assitant was never made now, but the model for the assistant to analyse a road based on the csv data obtained from the Smart Camera was made. This means that given enough time and an open source api such as OpenAi Api or even tensorflow, we could train a chatbot based on this model to analyse when traffic is high or low based on the scale given by the model for a given road and hence suggest a better route for perhaps a bus driver that is using this system.

## Conclusion
While not being the most advanced employment of an RAG system in a language model, we have made a simple realtime database using Computervision and a SimpleML model which has been trained to analyse that realtime data and determine the traffic conditions of a road. Based on these conditions the Smart Signal may change the lights of the junction in a safe manner to enable smoother flow of traffic by varying the times of the stop signs, letting certain sides of traffic flow quikcer and so on based on its analysis of the prevailing traffic conditions.

While the Assistant part is not a full working model, we were able to train a simple low scale model to analyse the csv data from the Smart Camera to determine which roads have high traffic, and hope to be able to train a chatbot in the future which can use this data to determine better routes of travel to Public Transport drivers.






