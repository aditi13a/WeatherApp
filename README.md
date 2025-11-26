🌦️ WeatherApp

A Blazor WebAssembly Weather Application with ASP.NET Core API & MongoDB Integration

📌 Overview

WeatherApp is a full-stack Blazor WebAssembly application built as part of my summer internship at Wise Work, under the Software Trainee role.
The project focuses on learning and applying:

.NET & C# fundamentals
-> Blazor WebAssembly front-end development
-> ASP.NET Core Web API backend
-> MongoDB CRUD operations
-> API integration using OpenWeatherMap
-> Real-world deployment workflows

The application displays live weather information for any location, allows users to manage favourite locations, and enhances user experience with a dynamic weather-based video background.

---

## 🚀 Live Demo
🔗 **https://relaxed-dodol-508da1.netlify.app/auth**

---
✨ Key Features

🌤️ Weather Search

Search weather by city name or pincode
Temperature displayed in °C and °F
Weather conditions, humidity, wind speed & more

⭐ Favorites

Add / remove favourite locations
Stored in MongoDB
Managed through a dedicated UI page

🕒 Recent Searches

Auto-maintained history of recent lookups

🎥 Dynamic Weather Background

Background video changes based on: rain, clear, cloudy, snow, default

🔐 User Authentication (Supabase)

Login / Signup functionality included

🎨 Clean UI

Modern responsive design
Consistent color palette
Minimal and intuitive layout

## 🧰 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Blazor WebAssembly (.NET 8) |
| Backend (optional) | ASP.NET Core Web API |
| API Provider | OpenWeatherMap |
| Styling | Bootstrap + Custom CSS |
| Hosting | Netlify (static hosting) |

### 🚀 How to Run the Project (WeatherApp)

This project is a Blazor WebAssembly (WASM) application with an ASP.NET Core Web API backend and MongoDB database.
Follow the steps below to run it locally.

## ✅ 1. Prerequisites

Make sure the following are installed:

.NET SDK 8.0+
Download: https://dotnet.microsoft.com/download

MongoDB Community Server
Download: https://www.mongodb.com/try/download/community

MongoDB Compass (optional, for viewing DB)
Download: https://www.mongodb.com/try/download/compass

A code editor like Visual Studio or VS Code

## ✅ 2. Clone the Repository
git clone https://github.com/aditi13a/WeatherApp.git
cd WeatherApp

## ✅ 3. Setup MongoDB

Start the MongoDB server:

net start MongoDB


Ensure the DB is running on:

mongodb://localhost:27017


(Optional) Open MongoDB Compass
→ Connect to: mongodb://localhost:27017
→ Database will be auto-created when favorites are added.

## ✅ 4. Configure API Keys

The project uses OpenWeatherMap API.

Get your API key:
https://openweathermap.org/api

Open:

WeatherApp.Server/appsettings.json


Add your key:

"OpenWeatherMap": {
  "ApiKey": "YOUR_API_KEY_HERE"
}

## ✅ 5. Install Dependencies

From the project root:

dotnet restore

## ✅ 6. Run the Server

# Navigate to the server project folder:

cd WeatherApp.Server
dotnet run


# The API starts on:

https://localhost:7213
http://localhost:5034


Keep this running.

## ✅ 7. Run the Client (WASM App)

# Open a second terminal:

cd WeatherApp.Client
dotnet run


# The client runs at:

https://localhost:7078
http://localhost:5031

## 🧪 8. Test Features

Now the full app runs locally.
Features to test:

Search weather by city / pincode
Temperature in °C / °F
Weather-based video background
Recent searches
Add/remove favorites (stored in MongoDB)
Supabase login/signup (if enabled)



