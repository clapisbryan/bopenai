# BopenAi

**Version**: 1.0  
**Date**: 02/23/2025  
**Finish Date**: 04/01/2025 
**Author(s)**: Bryan Clapis

---

## Table of Contents

1. [Introduction](#introduction)
2. [Overall Description](#overall-description)
3. [Visual Mockup Reference](#visual-mockup-reference)
4. [Features](#features)
5. [Functional Requirements](#functional-requirements)
6. [Non-Functional Requirements](#non-functional-requirements)
7. [Data Requirements](#data-requirements)
8. [External Interface Requirements](#external-interface-requirements)
9. [Glossary](#glossary)
10. [Appendices](#appendices)
11. [Revision History](#revision-history)

---

## 1. Introduction

### Purpose
This document outlines the technical specifications for the **BopenAi** project, a React-based web application that integrates with the **OpenAI API** to provide an AI-powered conversational agent. Users can interact with the AI, ask questions, and receive intelligent responses.

### Project Name: **BopenAi**
- **"B"** stands for **Bryan**, the creator of the project.
- **"openAi"** refers to **OpenAI**, the API that powers the conversational AI.

### Scope
The **BopenAi** application allows users to input text prompts and engage in conversation with an AI powered by OpenAI's GPT models. The app does not handle user authentication or manage user accounts.

### Definitions, Acronyms, and Abbreviations:
- **BopenAi**: The project name.
- **GPT**: Generative Pre-trained Transformer, the AI model by OpenAI.
- **API**: Application Programming Interface.
- **React.js**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.

---

## 2. Overall Description

### Product Perspective
The **BopenAi** is a **standalone web application** built using **React.js** that connects to OpenAI's GPT models via API to generate text responses based on user input. The app does not include user authentication or extensive user data management.

### Product Functions
- **Chat Interface**: Users can input text prompts and the system will return text responses from the AI.
- **API Communication**: The system sends user input to OpenAI's API and processes the returned AI response.

### User Classes and Characteristics
- **End Users**: Anyone who wants to interact with the AI via the chat interface.
- **Administrators**: Responsible for maintaining the application (e.g., updating the OpenAI API key or managing dependencies).

### Operating Environment
- **Hardware**: The application is designed to run on PCs, tablets, and smartphones.
- **Software**: Compatible with web browsers (Chrome, Firefox, Safari).
- **Network**: An internet connection is required to interact with OpenAI's API.

### Assumptions and Dependencies
- Requires an OpenAI API key for access to the service.
- Assumes OpenAI's API service is available and operational.

---

## 3. Visual Mockup Reference

**Link or Screenshot**:  
[Insert link or attach screenshot of the visual mockup of the chat interface.]

### Chat Interface:
The user can type messages in the input box, and the AI’s responses will appear in a chat-like format below the input area.

---

## 4. Features

### Feature 1: **Chat Interface**
- **Description**: Provides a place for users to type messages and receive responses from the AI.

### Feature 2: **Real-Time API Interaction**
- **Description**: Sends the user input to the OpenAI API and retrieves a response in real-time.

### Feature 3: **Responsive Design**
- **Description**: The app is designed to be responsive, providing a seamless experience on both desktop and mobile devices.

---

## 5. Functional Requirements

### Use Cases

**Use Case 1**: **AI Conversation**
- **Title**: AI Chat
- **Description**: Allows users to interact with the AI by sending text prompts and receiving responses.
- **Actors**: End Users
- **Preconditions**: The user is on the homepage of the app.
- **Postconditions**: The user receives a response from the AI.

**Main Flow**:
1. The user types a message into the input field.
2. The system sends the message to OpenAI’s API.
3. The system displays the AI’s response in the chat window.

**Alternate Flows**:
- If the API request fails, the system will display an error message.

### System Features

**Feature 1**: **API Integration**
- **Description**: The system communicates with OpenAI’s API to generate responses based on user input.
- **Priority**: High
- **Inputs**: User input text.
- **Processing**: Sends input to the OpenAI API and processes the returned response.
- **Outputs**: Displays the AI’s response on the screen.

**Feature 2**: **Error Handling**
- **Description**: If the API request fails, an error message will be shown to the user, ensuring the application does not crash.

---

## 6. Non-Functional Requirements

### Performance
- The system should handle multiple concurrent users with minimal delay.

### Security
- User data (input text) should be transmitted securely via HTTPS.
- The OpenAI API key must be stored securely in environment variables.

### Usability
- The app should provide a simple, intuitive interface with clear instructions on how to use the AI chat.

### Reliability
- The app should be available 99% of the time and function without major disruptions.

### Supportability
- The system should be easy to maintain and allow for updates, such as changing the OpenAI API key or updating dependencies.

---

## 7. Data Requirements

### Data Models
- **User Input**: Text entered by the user.
- **AI Response**: Text returned by the OpenAI API.

### Database Requirements
- **No database is required**, as the application does not store user data long-term. The input and output are kept temporarily in the app’s state.

### Data Storage and Retrieval
- Data is temporarily stored in the app’s state, with the user input and AI response passed back and forth with the OpenAI API.

---

## 8. External Interface Requirements

### User Interfaces
- **Web Interface**: A responsive chat interface for user interaction.

### API Interfaces
- **OpenAI API**: Communicates with OpenAI’s GPT models to generate text responses.

### Hardware Interfaces
- No specific hardware interfaces are required other than standard devices with internet access.

### Software Interfaces
- **React.js**: JavaScript library used to build the app’s frontend.
- **Axios**: For making HTTP requests to the OpenAI API.

---

## 9. Glossary

- **BopenAi**: A web app that integrates OpenAI's GPT models for real-time conversations.
- **API**: A set of functions that allow the app to interact with external services like OpenAI.
- **GPT**: Generative Pre-trained Transformer, a language model created by OpenAI.
- **React.js**: A JavaScript library for building interactive UIs.

---

## 10. Appendices

### Supporting Information
- **API Documentation**: Detailed documentation for the OpenAI API is available [here](https://beta.openai.com/docs/).
- **State Management**: The app uses React’s `useState` for managing temporary data.

---

## 11. Revision History

- **Version 1.0** (02/23/2025): Initial version of the technical specifications for the BopenAi project.

---
