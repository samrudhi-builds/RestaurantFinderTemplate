# How to Run Restaurant Finder

## Option 1: Quick Start (Double-click method)
Simply double-click the `start.bat` file in the root directory. This will:
1. Install all dependencies
2. Start the development server
3. Open the app in your browser at http://localhost:3000

## Option 2: Manual Commands

### Step-by-Step Instructions:

1. **Navigate to the frontend folder**
   ```bash
   cd frontend
   ```

2. **Install dependencies (first time only)**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm start
   ```

4. **Open your browser**
   - The app will automatically open at: http://localhost:3000
   - If it doesn't open automatically, manually navigate to that URL

## To Stop the Application

Press `Ctrl + C` in the terminal window where the app is running

## Other Useful Commands

### Build for Production
```bash
cd frontend
npm run build
```
This creates an optimized production build in the `frontend/build` folder.

### Run Tests
```bash
cd frontend
npm test
```

### Check for Errors
```bash
cd frontend
npm run build
```

## Troubleshooting

### Port 3000 already in use?
If you see an error about port 3000 being in use:
- Either stop the other application using port 3000
- Or type `y` when prompted to run on a different port

### Dependencies not installing?
Try clearing npm cache:
```bash
npm cache clean --force
npm install
```

### Still having issues?
Delete the `node_modules` folder and reinstall:
```bash
cd frontend
rmdir /s node_modules
npm install
```
