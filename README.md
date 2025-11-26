# 🌦️ Weather App — Blazor WebAssembly  

The Weather App — Blazor WebAssembly project is a modern single-page application (SPA) designed to deliver live, accurate, and visually engaging weather information for any global location. Built entirely using C# and .NET 8, the application leverages client-side WebAssembly execution, allowing the UI to load and run directly in the browser without requiring a backend server for general weather retrieval.

The app integrates with the OpenWeatherMap API, fetching real-time meteorological data such as temperature, humidity, atmospheric pressure, wind speed, and cloud coverage. Each weather response triggers a dynamic UI update, including animated high-resolution background videos that visually represent the live conditions.

---

## 🚀 Live Demo
🔗 **https://relaxed-dodol-508da1.netlify.app/auth**

---

## 📌 Overview
The Weather App provides real-time weather forecasts using the OpenWeatherMap API.  
Each weather condition dynamically updates the background video (rain, snow, storm, clear, etc.) to create an immersive experience.

The project includes:
- A Blazor WebAssembly **Client UI**
- An optional ASP.NET Core **Server backend** (for history/favorites)
- Animated video backgrounds
- Responsive design
- Completely static hosting with Netlify

---

## ✨ Features

### 🌤 Core Weather Features
- Live weather by city
- Temperature, humidity, pressure
- “Feels Like” temperature
- Wind speed and direction
- Weather icons and descriptions

### 🎬 Visual Experience
- Dynamic background videos:
  - Clear
  - Sunny
  - Cloudy
  - Rain
  - Snow
  - Thunderstorm
  - Default fallback

### 👤 User Experience
- Recent search history
- Favorites management (via server)
- Clean and minimal UI
- Auto geolocation (optional if enabled)

### ⚙️ System
- Deployed using Netlify static hosting
- Optimized Blazor WebAssembly publish
- SPA routing handled with `_redirects`

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Blazor WebAssembly (.NET 8) |
| Backend (optional) | ASP.NET Core Web API |
| API Provider | OpenWeatherMap |
| Styling | Bootstrap + Custom CSS |
| Hosting | Netlify (static hosting) |




