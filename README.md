# BrainFlix

BrainFlix is a school project where I created a mock video player website. This is the backend code which was created using Node.js and Express.js. 

## Getting Started

To run the server for this project, run ```$ npm install``` to get all dependencies and packages.

#### Backend .env

```.env.sample``` in ```foodsaver-backend``` provides a sample of environment variables required to run this project. You will need to add the following environment variables to your .env file:
`PORT`

#### Now you are all set!

Run ```$ npx nodemon index.js``` to run the server.


## API Documentation

#### Get limited details for all videos

```
  GET /videos
```


#### Get all details for one video based on the requested video ID

```
  GET /videos/:id
```


#### Post a video

```
  POST /video
```
