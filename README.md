Hasiru Bandhana AI is a full-stack, hybrid AI-powered plant health, disease detection, and farm monitoring platform designed to help users identify plant diseases, track their progression over time, and understand how plant diseases are affecting different areas of a farm.

The platform combines:

🧠 Local deep-learning image classification
🤖 External AI APIs for intelligent assistance
📈 Disease progression tracking
🌱 Individual plant health monitoring
🌾 Farm-level disease analysis
🗺️ Area-wise disease monitoring
📊 Historical analytics and visualization
📖 Plant disease knowledge base
💬 AI-powered explanations and recommendations
Hasiru Bandhana means "Green Bond", representing the connection between people, plants, agriculture, and technology.

The system is designed with a hybrid AI architecture. Core plant disease classification can run locally using TensorFlow/Keras, while optional external AI services can provide advanced explanations, recommendations, natural-language interaction, trend analysis, and agricultural assistance.

✨ Features
🔍 AI-Powered Plant Disease Detection

Hasiru Bandhana AI uses a custom-trained TensorFlow/Keras image classification model to identify plant diseases from leaf images.

Users can:

Upload plant leaf images.
Drag and drop images into the application.
Receive an AI-generated plant/disease prediction.
View prediction confidence.
View the top 3 possible predictions.
Identify healthy and diseased leaves.
View detailed disease information.
Receive AI-assisted explanations and recommendations.

The current machine learning model supports 38 plant/disease classes.

⚠️ Intelligent Uncertain Prediction Handling

Machine learning predictions are not always reliable, especially when an uploaded image differs significantly from the training data.

Hasiru Bandhana AI therefore uses a configurable confidence threshold.

For example:

Confidence Threshold = 50%


The prediction flow is:

                Model Prediction
                       │
                       ▼
                Confidence Check
                       │
             ┌─────────┴─────────┐
             │                   │
             ▼                   ▼
       >= Threshold         < Threshold
             │                   │
             ▼                   ▼
    Valid Prediction         Uncertain


If the prediction confidence is below the configured threshold, the system can return:

Uncertain Prediction

rather than presenting a potentially incorrect disease as a confirmed diagnosis.

🤖 Hybrid AI Architecture

Hasiru Bandhana AI combines local machine learning with optional external AI APIs.

The local model performs the core image classification, while external AI services can provide higher-level reasoning and natural-language assistance.

                         🌿 Plant Image
                               │
                               ▼
                     ┌──────────────────┐
                     │  React Frontend  │
                     └────────┬─────────┘
                              │
                              ▼
                     ┌──────────────────┐
                     │  Node.js Backend │
                     └────────┬─────────┘
                              │
                ┌─────────────┴─────────────┐
                │                           │
                ▼                           ▼
       ┌──────────────────┐       ┌──────────────────┐
       │  Local ML Service │       │ External AI APIs │
       │ TensorFlow/Keras  │       │ Optional AI      │
       └────────┬─────────┘       └────────┬─────────┘
                │                           │
                ▼                           ▼
       Disease Prediction          Explanations
       Confidence Score            Recommendations
       Top Predictions             Conversation
                │                   Trend Analysis
                │                   Farm Insights
                └──────────┬────────┘
                           ▼
                   🌱 AI Plant Assistant
                           │
                           ▼
                    📊 Farm Dashboard

🧠 Local AI

The locally hosted TensorFlow/Keras model is responsible for the primary image classification task.

It can provide:

Plant identification
Disease classification
Healthy/diseased classification
Prediction confidence
Top-3 predictions

The local model means that the core disease classification pipeline does not have to depend on an external AI service.

🌐 External AI

External AI APIs can be integrated as an additional intelligence layer.

Depending on the provider and implementation, external AI can provide:

Natural-language disease explanations
Conversational plant-health assistance
Personalized explanations
General treatment guidance
Prevention suggestions
Follow-up questions
Historical trend explanations
Farm-health summaries
AI-generated reports
Multilingual assistance
Farmer-friendly explanations
Context-aware agricultural assistance

For example:

Local ML Prediction
        │
        ▼
Disease: Tomato Early Blight
Confidence: 87%
        │
        ▼
External AI
        │
        ▼
Simple explanation +
general prevention guidance


The external AI layer is designed to complement the local ML model rather than necessarily replace it.

🔐 External AI Configuration

External AI providers should be configured through environment variables.

Example:

AI_PROVIDER=your_provider
AI_API_KEY=your_api_key
AI_MODEL=your_model


Never hard-code API keys into source code.

The .env file should be excluded from Git:

.env


A safe .env.example file can contain:

AI_PROVIDER=
AI_API_KEY=
AI_MODEL=

ML_SERVICE_URL=http://127.0.0.1:8000


For production deployments, API credentials should be stored using a secure secret-management solution.

🧩 AI Responsibility
Capability	Local ML	External AI
Leaf image classification	✅	Optional
Disease prediction	✅	Optional
Confidence calculation	✅	❌
Top-3 predictions	✅	❌
Disease explanation	Optional	✅
Natural-language conversation	❌	✅
Personalized explanations	❌	✅
General recommendations	Optional	✅
Farm-health summaries	✅	✅
Historical trend interpretation	❌	✅
Multilingual assistance	❌	✅
AI-generated reports	❌	✅
📖 Plant & Disease Library

Hasiru Bandhana AI includes a searchable plant disease encyclopedia.

Disease information is stored locally in:

diseases.json


Each disease entry can contain:

Plant name
Disease name
Disease category
Symptoms
Severity
Recommended actions
Prevention methods
Healthy/diseased classification

The local knowledge base can be updated without requiring an external database.

📈 Plant Disease Progress Tracking

Hasiru Bandhana AI is designed to go beyond one-time disease detection.

Users can repeatedly scan the same plant or crop over a period of time and compare the results.

The system can track whether the observed condition appears to be:

🟢 Improving
🟡 Stable
🟠 Progressing
🔴 Increasing across observations
⚪ Uncertain

Example:

Day 1
  │
  ▼
Healthy
  │
  ▼
Day 5
  │
  ▼
Early Infection
  │
  ▼
Day 10
  │
  ▼
Moderate Infection
  │
  ▼
Day 15
  │
  ▼
Severe Infection


This creates a historical health timeline for the plant.

📅 Plant Health Timeline

Each scan can be associated with a date and time.

Example:

Plant: Tomato-A12

┌────────────┬────────────────────┬────────────┐
│ Date       │ Prediction         │ Confidence │
├────────────┼────────────────────┼────────────┤
│ 01 Jun     │ Healthy            │ 94%        │
│ 05 Jun     │ Early Blight       │ 61%        │
│ 10 Jun     │ Early Blight       │ 74%        │
│ 15 Jun     │ Early Blight       │ 86%        │
└────────────┴────────────────────┴────────────┘


The dashboard can visualize:

Disease history
Confidence changes
Health status
Disease trends
Scan frequency
Observed severity changes
🌱 Individual Plant Monitoring

Multiple scans can be associated with the same plant.

A plant monitoring record can contain:

Plant
├── Plant ID
├── Crop Type
├── Farm
├── Plot
├── Location
├── Scan History
├── Disease History
├── Health Trend
└── Treatment / Observation History


This allows users to monitor a plant throughout its lifecycle.

🌾 Farm Health & Impact Monitoring

Hasiru Bandhana AI can aggregate individual plant observations to provide a broader view of farm health.

A farm can be divided into different areas:

Farm
│
├── Plot A
│   ├── Row 1
│   ├── Row 2
│   └── Row 3
│
├── Plot B
│   ├── Row 1
│   ├── Row 2
│   └── Row 3
│
└── Plot C
    ├── Row 1
    ├── Row 2
    └── Row 3


Each scan can be associated with a specific farm area.

This enables the system to track:

Total plants scanned
Healthy plants
Affected plants
Disease types
Infection percentage
Most affected plots
Disease trends
Changes over time
Observed recovery
Potential disease hotspots
🗺️ Disease Hotspot Monitoring

Area-based tracking can help identify regions of the farm with a higher concentration of affected observations.

Example:

                 FARM HEALTH MAP

        ┌──────────┬──────────┬──────────┐
        │          │          │          │
        │    🟢    │    🟢    │    🟡    │
        │ Healthy  │ Healthy  │ Moderate │
        │          │          │          │
        ├──────────┼──────────┼──────────┤
        │          │          │          │
        │    🟡    │    🟠    │    🔴    │
        │ Moderate │ High     │ Severe   │
        │          │ Risk     │ Risk     │
        ├──────────┼──────────┼──────────┤
        │          │          │          │
        │    🟢    │    🟠    │    🔴    │
        │ Healthy  │ High     │ Severe   │
        │          │ Risk     │ Risk     │
        └──────────┴──────────┴──────────┘


These visualizations can help users identify areas that require additional inspection.

Disease hotspots represent patterns in submitted observations and should not be interpreted as definitive proof of biological disease spread.
📊 Farm Impact Dashboard

The dashboard can provide a high-level view of the farm.

Example:

🌾 FARM HEALTH

Total Plants Scanned       500
Healthy Plants             320
Affected Plants            180
Observed Infection Rate     36%
Farm Health Score           64%
Most Common Disease         Early Blight
Most Affected Area          Plot B
Disease Trend               ↗ Increasing


Charts can include:

Total scans
Healthy vs. diseased plants
Disease distribution
Disease progression
Plot-wise infection
Most affected areas
Historical farm health
Confidence distribution
Disease trends

Charts can be implemented using Recharts.

📈 Disease Progression Analytics

Historical data can be used to calculate useful monitoring indicators.

Infection Percentage
Infection Percentage =
Affected Plants / Total Scanned Plants × 100


For example:

180 affected / 500 scanned × 100

= 36%

Disease Trend

The application can compare observations between different time periods.

Previous Observed Rate
          │
          ▼
          20%
          │
          ▼
Current Observed Rate
          │
          ▼
          36%


The dashboard can then indicate:

Disease Trend: ↗ Increasing


or:

Disease Trend: ↘ Decreasing


or:

Disease Trend: → Stable


These trends represent changes in submitted observations and should not be interpreted as definitive epidemiological measurements.

🩺 Treatment & Recovery Tracking

Hasiru Bandhana AI can maintain observations before and after an intervention.

Disease Detection
       │
       ▼
Treatment / Intervention
       │
       ▼
Follow-up Scan #1
       │
       ▼
Follow-up Scan #2
       │
       ▼
Recovery Analysis


Example:

Before Intervention
        │
        ▼
Observed Infection: 48%
        │
        ▼
Intervention
        │
        ▼
Follow-up #1: 42%
        │
        ▼
Follow-up #2: 31%
        │
        ▼
Follow-up #3: 24%


The system can report:

Observed Trend: ↘ Decreasing


This describes the observed data and does not automatically establish that the intervention caused the improvement.

🤖 AI-Powered Farm Intelligence

External AI can use prediction results and historical observations to generate understandable summaries.

For example:

Farm Health Summary

Observed disease levels have increased across
the last three monitoring periods.

Plot B has the highest observed concentration
of affected plants.

Consider inspecting Plot B and nearby areas
more frequently.


The AI should distinguish between:

Observed measurements
ML predictions
AI-generated interpretations
General agricultural recommendations

This helps users understand what is measured versus what is AI-generated.

🔄 Complete Hybrid AI Workflow
                    🌿 LEAF IMAGE
                         │
                         ▼
                 React Frontend
                         │
                         ▼
                 Node.js Backend
                         │
                         ▼
              Local TensorFlow Model
                         │
              ┌──────────┴──────────┐
              │                     │
              ▼                     ▼
         Prediction              Confidence
              │                     │
              └──────────┬──────────┘
                         ▼
                 Prediction Record
                         │
              ┌──────────┴──────────┐
              │                     │
              ▼                     ▼
       Disease Library        Historical Data
              │                     │
              └──────────┬──────────┘
                         ▼
                  External AI Layer
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
     Explanation    Recommendations   Farm Analysis
          │              │              │
          └──────────────┼──────────────┘
                         ▼
                 🌱 AI Plant Assistant
                         │
                         ▼
                  📊 User Dashboard

🔒 Privacy & Data Handling

Hasiru Bandhana AI follows a hybrid approach.

Local Processing

The following can remain local:

Plant images
Local ML inference
Prediction history
Farm records
Disease library
Analytics
External Processing

Only the information required for an external AI task should be sent to the external provider.

For example:

Plant: Tomato
Prediction: Early Blight
Confidence: 87%
Observed Trend: Increasing
Farm Area: Plot B


rather than unnecessarily sending the complete local database.

If images are sent to an external AI provider, the application should clearly inform users and implement the appropriate consent and privacy controls.

🧠 Machine Learning Model

Hasiru Bandhana AI uses a custom-trained TensorFlow/Keras image classification model.

Model Details
Property	Value
Model	model/trained_model.keras
Framework	TensorFlow / Keras
Input Size	128 × 128
Channels	RGB
Output Classes	38
Class Mapping	class_names.json
Inference API	FastAPI
Image Processing	Pillow
Numerical Processing	NumPy

The model currently recognizes 38 plant/disease combinations.

🔬 Model Training

The model training and evaluation workflow is documented in:

Train_plant_disease.ipynb
Test_Plant_Disease.ipynb


These notebooks can be used to understand:

Dataset preparation
Image preprocessing
Model training
Validation
Testing
Evaluation
Classification performance
Prediction results
📂 Project Structure
Hasiru-Bandhana-AI/
│
├── client/                         # React Frontend
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   ├── pages/                  # Application pages
│   │   └── ...
│   │
│   └── package.json
│
├── server/                         # Node.js Backend
│   ├── routes/                     # API routes
│   ├── data/                       # Local prediction/farm history
│   ├── uploads/                    # Uploaded plant images
│   ├── server.js                   # Express server
│   ├── .env.example                # Environment configuration
│   └── package.json
│
├── ml-service/                     # Python ML Service
│   ├── main.py                     # FastAPI inference API
│   └── requirements.txt            # Python dependencies
│
├── model/
│   └── trained_model.keras         # Trained ML model
│
├── class_names.json                # Model class mapping
├── diseases.json                   # Disease information
│
├── Train_plant_disease.ipynb       # Model training notebook
├── Test_Plant_Disease.ipynb        # Model evaluation notebook
│
└── README.md

🗃️ Monitoring Data Structure

For long-term plant and farm monitoring, observations can follow this structure:

Farm
│
├── Plot
│   │
│   ├── Plant
│   │   │
│   │   ├── Scan
│   │   ├── Scan
│   │   └── Scan
│   │
│   └── Plant
│
└── Plot


A scan can contain:

Scan
├── Scan ID
├── Date / Time
├── Farm ID
├── Plot ID
├── Plant ID
├── Image
├── Predicted Plant
├── Predicted Disease
├── Confidence
├── Health Status
└── Observed Trend


This structure enables the application to build historical plant and farm health records.

💾 Dataset Information

The original dataset used to train the model is extremely large and is intentionally omitted from this repository.

If you wish to retrain the model or explore the raw dataset, it can be downloaded here:

🔗 Plant Disease Dataset

The dataset is not required to run Hasiru Bandhana AI.

The pre-trained model:

model/trained_model.keras


is sufficient for making predictions.

🛠️ Technology Stack
Component	Technologies
Frontend	React 19
Build Tool	Vite
Styling	Tailwind CSS v4
Routing	React Router
Charts	Recharts
Animations	Framer Motion
Backend	Node.js 22
API Framework	Express.js 5
File Uploads	Multer
Storage	Local JSON + Filesystem
ML Service	Python 3.12
ML API	FastAPI
ML Framework	TensorFlow / Keras
Image Processing	Pillow
Numerical Processing	NumPy
External AI	Configurable AI APIs
📋 Prerequisites

Before installing Hasiru Bandhana AI, make sure you have:

Python 3.12
Node.js 22
npm
Git

Verify the installations:

python --version
node --version
npm --version
git --version

🚀 Installation & Setup
1. Clone the Repository
git clone https://github.com/MayurChaudhari007/Plant-Disease-Prediction.git
cd Plant-Disease-Prediction

2. Configure the Python ML Service

Create a virtual environment:

python -m venv .venv

Windows
.venv\Scripts\activate

macOS / Linux
source .venv/bin/activate


Install ML dependencies:

pip install -r ml-service/requirements.txt

3. Configure the Node.js Backend

Navigate to the server:

cd server


Install dependencies:

npm install


Create the environment file.

macOS / Linux
cp .env.example .env

Windows
copy .env.example .env


Configure the ML service:

ML_SERVICE_URL=http://127.0.0.1:8000


If using an external AI provider, configure the required values:

AI_PROVIDER=
AI_API_KEY=
AI_MODEL=

4. Configure the React Frontend

Navigate to the client:

cd ../client


Install dependencies:

npm install

▶️ Running the Application

Hasiru Bandhana AI consists of three primary local services.

Open three separate terminal windows.

Terminal 1 — ML Service

From the project root:

cd ml-service


Activate the virtual environment.

Windows
..\ .venv\Scripts\activate

macOS / Linux
source ../.venv/bin/activate


Start FastAPI:

python -m uvicorn main:app --reload --port 8000


The ML service runs at:

http://127.0.0.1:8000

Terminal 2 — Node.js Backend
cd server
npm start


The backend runs at:

http://localhost:5000

Terminal 3 — React Frontend
cd client
npm run dev


The frontend normally runs at:

http://localhost:5173


Open the frontend URL in your browser.

🌱 Complete System Workflow
                    🌿 USER
                       │
                       ▼
                 Upload Leaf
                       │
                       ▼
              React Frontend
                       │
                       ▼
              Node.js Backend
                       │
                       ▼
              Local ML Service
                       │
                       ▼
              TensorFlow Model
                       │
                       ▼
              Disease Prediction
                       │
              ┌────────┴────────┐
              │                 │
              ▼                 ▼
         Confidence        Top Predictions
              │
              ▼
       Store Observation
              │
      ┌───────┴────────┐
      │                │
      ▼                ▼
 Plant History     Farm History
      │                │
      ▼                ▼
Disease Trend     Area Analysis
      │                │
      └───────┬────────┘
              ▼
        External AI
              │
      ┌───────┼─────────┐
      ▼       ▼         ▼
 Explanation  Advice   Farm Summary
      │       │         │
      └───────┼─────────┘
              ▼
        📊 Dashboard

📊 Example Farm Monitoring Scenario

Suppose a farm has 500 tomato plants.

First monitoring period
Healthy:        450
Affected:        50

Observed Infection Rate: 10%

Second monitoring period
Healthy:        410
Affected:        90

Observed Infection Rate: 18%

Third monitoring period
Healthy:        320
Affected:       180

Observed Infection Rate: 36%


The system can visualize the change:

40% ┤                         ●
30% ┤                    ●
20% ┤              ●
10% ┤         ●
 0% ┼────────────────────────────
      Period 1  Period 2  Period 3


This shows that the observed proportion of affected plants increased over the monitoring periods.

🗺️ Farm Area Comparison

Example:

Farm Area	Plants Scanned	Healthy	Affected	Observed Infection
Plot A	150	135	15	10%
Plot B	170	110	60	35%
Plot C	180	75	105	58%

Plot C has the highest observed infection rate and may therefore be prioritized for additional field inspection.

🚨 Early Warning & Risk Visualization

Historical observations can be used to create monitoring indicators.

Example:

🌾 FARM STATUS

Overall Health
██████████████░░░░░░  72%

Observed Disease Rate
████████████░░░░░░░░  58%

Affected Area
████████░░░░░░░░░░░░  40%

Trend
↗ Increasing


These indicators are intended to help users identify areas that may require additional attention.

They are not professional agricultural risk assessments.

🔐 Security Considerations

Before deploying Hasiru Bandhana AI publicly, additional security measures should be implemented.

Recommended protections include:

Authentication
Authorization
Secure file upload validation
File type validation
File size limits
Rate limiting
API authentication
HTTPS
Secure API key storage
Input sanitization
Database security
Access control
Audit logging
Backup systems
Model-serving security

External AI API keys should never be exposed to the frontend.

Requests to external AI services should be handled through the backend.

⚠️ Important Limitations
Prediction Accuracy

Model predictions depend heavily on:

Image quality
Lighting
Camera quality
Leaf visibility
Background conditions
Similarity to the training dataset

For best results, upload clear images where the affected leaf is visible.

Disease Progression Limitations

Disease progression is inferred from historical image predictions and recorded observations.

The system does not directly measure biological disease progression.

Changes in observed disease levels can be influenced by:

Number of plants scanned
Sampling locations
Image quality
Environmental conditions
Model uncertainty
Changes in the population being monitored

Therefore, progression metrics should be interpreted as monitoring indicators, not definitive scientific measurements.

Farm Impact Limitations

Farm-level analytics depend on the quantity and distribution of scans.

If only a small portion of a farm is scanned, the results cannot reliably represent the health of the entire farm.

For meaningful monitoring, users should consistently scan representative plants across multiple farm areas.

External AI Limitations

External AI-generated recommendations may contain:

Incorrect information
Incomplete context
Over-generalized advice
Hallucinated information
Recommendations unsuitable for a specific crop or environment

AI-generated information should therefore be treated as decision support, not professional agricultural diagnosis.

🔧 Troubleshooting
ML Service Unavailable — ECONNREFUSED

Make sure the ML service is running:

cd ml-service
python -m uvicorn main:app --reload --port 8000


Verify:

ML_SERVICE_URL=http://127.0.0.1:8000


Ensure Uvicorn was started from the ml-service directory.

Frontend Cannot Connect to Backend

Make sure the Node.js server is running:

cd server
npm start


Check for:

Port conflicts
Missing dependencies
Environment configuration errors
Node.js runtime errors

The backend should normally run at:

http://localhost:5000

Model Not Found

Verify that:

model/trained_model.keras


exists.

Also verify:

class_names.json


and:

diseases.json


are available in their expected locations.

Python Dependency Errors

Activate the virtual environment.

Windows
.venv\Scripts\activate

macOS/Linux
source .venv/bin/activate


Then reinstall:

pip install -r ml-service/requirements.txt

🚧 Future Enhancements

Potential future improvements include:

📱 Dedicated mobile application
🌐 Multilingual support
🗣️ Voice-based agricultural assistant
🗺️ Interactive farm maps
📍 GPS-based farm mapping
🧠 Additional plant and disease classes
📸 Advanced image preprocessing
📈 Advanced disease progression analytics
🚨 Early-warning notifications
🌦️ Weather-aware disease monitoring
🌡️ Environmental condition tracking
💧 Soil and irrigation monitoring
🌾 Crop-specific recommendations
📊 Advanced farm analytics
🔄 Continuous model improvement
☁️ Optional cloud deployment
👥 Multi-user farm management
🔐 User authentication
📡 Agricultural data integrations
📷 Periodic automated crop monitoring
🛰️ Satellite and drone imagery
🤖 Advanced AI agricultural assistant
📄 Automated farm health reports
🧠 Vision

Hasiru Bandhana AI aims to evolve from a simple plant disease classification system into a complete plant and farm health intelligence platform.

The long-term vision is:

                    🌿 PLANT
                       │
                       ▼
                📷 Image Analysis
                       │
                       ▼
                 🧠 AI Detection
                       │
                       ▼
                📅 Time Tracking
                       │
                       ▼
              📈 Disease Progression
                       │
                       ▼
                 🌾 Farm Analysis
                       │
              ┌────────┴────────┐
              ▼                 ▼
        🗺️ Disease Areas     📊 Farm Health
              │                 │
              └────────┬────────┘
                       ▼
                 🤖 External AI
                       │
                       ▼
               Intelligent Insights
                       │
                       ▼
                 🚨 Risk Signals
                       │
                       ▼
               🌱 Better Decisions


The goal is not simply to answer:

"What disease does this leaf have?"

but to help answer:

"How is this plant's health changing?"
"Is the observed disease trend increasing or decreasing?"
"Which part of my farm is most affected?"
"How has the observed health of my farm changed over time?"
"What patterns can be seen in my historical observations?"
"What should I inspect more closely?"
"How can AI help me understand my plant health data?"
🌱 Project Philosophy

Hasiru Bandhana AI combines:

Artificial Intelligence
        +
Computer Vision
        +
Machine Learning
        +
Historical Monitoring
        +
Farm Analytics
        +
Generative AI
        +
Data Visualization


to create a system that moves from:

Detect → Monitor → Understand → Respond → Protect

The platform is designed to create a meaningful connection between technology, agriculture, farmers, and plant health.

👨‍💻 Technology Summary
Frontend
├── React 19
├── Vite
├── Tailwind CSS v4
├── React Router
├── Recharts
└── Framer Motion

Backend
├── Node.js 22
├── Express.js 5
├── Multer
└── Local JSON Storage

Machine Learning
├── Python 3.12
├── FastAPI
├── TensorFlow
├── Keras
├── Pillow
└── NumPy

AI
└── Configurable External AI APIs

Model
├── 38 Plant/Disease Classes
├── 128 × 128 RGB Input
└── Local TensorFlow/Keras Inference

📜 License

This project is intended for educational, research, and demonstration purposes.

Before distributing the project publicly, add an appropriate open-source license such as MIT, Apache-2.0, or another license appropriate for your intended use.

🌿 Hasiru Bandhana AI
Identify. Monitor. Understand. Protect.
🌱 Connecting AI, People, and Plant Health.