# Interview Genius AI

## Overview

Interview Genius AI is an innovative platform designed to assist individuals in practicing technical interviews using AI-driven tools. The initial phase of the project focuses on resume parsing to extract key information, enabling personalized interview preparation.

## Features

- **Resume Upload and Parsing**: Users can upload their resumes (in PDF format) for automatic extraction of important details such as name, email, phone number, skills, experience, and education.
- **AI-Generated Interview Questions**: Based on the parsed resume data, the platform generates customized interview questions to help users prepare effectively.
- **Interactive Interview Practice**: Users can simulate interview scenarios and receive feedback on their responses.
- **Voice-to-Text Integration**: Utilizes Assembly AI for voice-to-text conversion during interview practice sessions.

## Tech Stack

### Frontend

- **React with TypeScript**: User interface development.
- **Axios**: HTTP requests handling.

### Backend

- **Node js**: Using nodejs a backend.
- **Prisma**: Database ORM for PostgreSQL.
- **Python**: Scripting for resume parsing.
- **Expressjs**:Used to create the scalable webservers

### Development Setup

#### Prerequisites

- Node.js and npm installed.
- PostgreSQL database setup.
- Python installed.

#### Backend:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/interview-genius-ai.git
   cd interview-genius-ai
   ```

2. **Navigate to Backend**:

   - ```bash
     cd backend
     ```

   ```
   - Create a copy of .env.example and name the file .env
   - Set up Postgres DATABASE_URL in .env file. You can get a free PostgreSQL connection string from Aiven.io.
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Environment Configuration**:

   - Create a `.env` file in the root directory with your environment variables:

     ```plaintext
     DATABASE_URL=your_postgresql_database_url
     ASSEMBLY_AI_API_KEY=your_assembly_ai_api_key
     ```

5. **Run the Application**:

   ```bash
   npm run dev
   ```

6. **Deployment**:

   - ```bash
     npm run deploy
     ```

### Frontend:

1- Navigate to frontend:

```bash
cd frontend
```

2- Install dependencies:

```bash
npm install
```

3- Run frontend locally:

```bash
npm run dev
```
