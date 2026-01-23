# Sayit App - Component Replacement Guide

## What is Sayit?
Sayit is an anonymous confession-sharing app built with React + Vite + Tailwind CSS. Users can view confessions organized by city areas, with trending lists and search functionality.

## App Flow Overview
The app follows a simple 5-step flow:
1. **Login** → 2. **Location Permission** → 3. **Trust Agreement** → 4. **City Map View** → 5. **Area Detail View**

---

## 🔄 FULLY REPLACEABLE COMPONENTS (Safe to Replace)

These components are standalone and changing them won't break other parts of the app. Just provide new components with the same prop interfaces.

### 1. LoginScreen (`src/components/LoginScreen.jsx`)
**Purpose:** Initial login screen with Google authentication button
**Props:** `{ onContinue }` - function to proceed to next step
**Where used:** Main app flow step 1
**Safe to replace:** ✅ Yes, completely standalone

### 2. TrustDialog (`src/components/TrustDialog.jsx`)
**Purpose:** Terms/agreement screen explaining anonymity and community guidelines
**Props:** `{ onAgree }` - function to proceed to city view
**Where used:** Main app flow step 3
**Safe to replace:** ✅ Yes, completely standalone

### 3. LocationPermission (`src/components/LocationPermission.jsx`)
**Purpose:** Location permission request screen (only gets city name, no tracking)
**Props:** `{ onEnable }` - function to proceed to trust dialog
**Where used:** Main app flow step 2
**Safe to replace:** ✅ Yes, completely standalone

### 4. SearchPill (`src/components/SearchPill.jsx`)
**Purpose:** Centered search bar (Apple-style design)
**Props:** `{ placeholder, value, onChange }`
**Where used:** CityWorld view and AreaView
**Safe to replace:** ✅ Yes, standalone - just replace the search input styling/functionality

### 5. HamburgerMenu (`src/components/HamburgerMenu.jsx`)
**Purpose:** App menu with options (search other city, subscription, create room, logout)
**Props:** `{ onLogout }` - function to return to login
**Where used:** CityWorld view (top-left corner)
**Safe to replace:** ✅ Yes, standalone - menu functionality stays the same

### 6. TrendingDrawer (`src/components/TrendingDrawer.jsx`)
**Purpose:** Trending confessions panel (right sidebar on desktop, bottom drawer on mobile)
**Props:** `{ userCity, isAreaView }`
**Where used:** CityWorld and AreaView
**Safe to replace:** ✅ Yes, standalone - trending list design/functionality

---

## ⚠️ COMPONENTS THAT AFFECT OTHERS (Careful Replacement)

### 7. ConfessionCard (`src/components/ConfessionCard.jsx`)
**Purpose:** Individual confession display with voting buttons
**Props:** `{ confession, votes, compact }`
**Where used:** TrendingDrawer (and potentially other places)
**⚠️ Impact:** Used inside TrendingDrawer - if you change props interface, you'll need to update TrendingDrawer too
**Safe to replace:** ⚠️ Partially - can change styling but keep same props

### 8. HotspotMarker (`src/components/HotspotMarker.jsx`)
**Purpose:** Clickable area markers on the city map (size based on confession count)
**Props:** `{ intensity, x, y, areaName, onClick, confessions }`
**Where used:** CityWorld (positioned on map)
**⚠️ Impact:** Integrated with CityWorld's hotspot data structure
**Safe to replace:** ⚠️ Partially - can change marker appearance but keep positioning logic

---

## 🏗️ CORE APP COMPONENTS (Don't Replace)

### 9. CityWorld (`src/components/CityWorld.jsx`)
**Purpose:** Main city map view combining WorldMapCanvas + hotspots + UI elements
**Props:** `{ onAreaSelect, userCity, onLogout }`
**Where used:** Main app flow step 4
**❌ Don't replace:** This orchestrates multiple components together

### 10. AreaView (`src/components/AreaView.jsx`)
**Purpose:** Detailed view when clicking a hotspot (zoomed map + area-specific content)
**Props:** `{ area, onBack }`
**Where used:** Main app flow step 5
**❌ Don't replace:** This orchestrates multiple components together

### 11. WorldMapCanvas (`src/components/WorldMapCanvas.jsx`)
**Purpose:** Scrollable map background with grid and ambient effects
**Props:** `{ children, zoomed, hotspots, fixedUI }`
**Where used:** CityWorld and AreaView as foundation
**❌ Don't replace:** Core map rendering logic

### 12. App.jsx (Main App)
**Purpose:** Step-based navigation and state management
**❌ Don't replace:** This is the app's brain - manages the entire flow

### 13. GlassPanel (`src/components/GlassPanel.jsx`)
**Purpose:** Utility component for consistent glassmorphism styling
**Where used:** Throughout the app for consistent design
**❌ Don't replace:** Just a styling utility

---

## 🎨 WHAT YOU CAN EASILY REPLACE

Based on your feedback, here are the components you mentioned not liking:

### **Login Page** → Replace `LoginScreen.jsx`
- Just provide a new login component with `{ onContinue }` prop
- Current: Google sign-in button in dark theme
- Keep the same callback function

### **Agreement/Trust Page** → Replace `TrustDialog.jsx`
- Provide new terms/agreement component with `{ onAgree }` prop
- Current: Lock icon, anonymity explanation, checkbox, "Enter the City" button
- Keep the agreement checkbox logic if you want

### **Location Page** → Replace `LocationPermission.jsx`
- Provide new location permission component with `{ onEnable }` prop
- Current: Location icon, explanation text, "Enable Location" button

### **Search Bar** → Replace `SearchPill.jsx`
- Provide new search input component with `{ placeholder, value, onChange }` props
- Current: Centered pill-style input with search icon
- Used in both city view and area view

### **Menu** → Replace `HamburgerMenu.jsx`
- Provide new menu component with `{ onLogout }` prop
- Current: Hamburger button with dropdown (search other city, subscription, create room, logout)
- Keep the logout callback

### **Trending List** → Replace `TrendingDrawer.jsx`
- Provide new trending panel with `{ userCity, isAreaView }` props
- Current: Expandable sidebar (desktop) / bottom drawer (mobile) with city/country/global tabs
- Uses `ConfessionCard` internally - can replace both together

---

## 🔗 COMPONENT RELATIONSHIPS

```
App.jsx (main flow controller)
├── LoginScreen (step 1)
├── LocationPermission (step 2)
├── TrustDialog (step 3)
├── CityWorld (step 4)
│   ├── WorldMapCanvas (map background)
│   ├── HotspotMarker (×6 areas)
│   ├── SearchPill (search bar)
│   ├── HamburgerMenu (menu)
│   └── TrendingDrawer
│       └── ConfessionCard (×10 confessions)
└── AreaView (step 5)
    ├── WorldMapCanvas (zoomed)
    ├── SearchPill (area search)
    └── TrendingDrawer (area-specific)
        └── ConfessionCard
```

---

## 📝 HOW TO REPLACE COMPONENTS

1. **Create your new component** with the same filename and props interface
2. **Test it** in isolation first
3. **Replace the file** - the app will automatically use your new version
4. **Check that callbacks work** (onClick, onChange, etc.)

Example replacement:
```jsx
// Your new LoginScreen.jsx
function LoginScreen({ onContinue }) {
  return (
    <div>
      {/* Your new design */}
      <button onClick={onContinue}>Continue</button>
    </div>
  );
}
```

---

## 🎯 QUICKEST WINS

If you want to change the look fast:

1. **LoginScreen** - Most visible first impression
2. **SearchPill** - Used everywhere, big impact
3. **HamburgerMenu** - Easy to redesign
4. **TrendingDrawer** - Main content area
5. **TrustDialog** - Important for user trust

The **positioning and flow logic** stays the same - you only need to change the **visual design and styling** of these components!