# Weather application

The weather app displays the current temperature and conditions for user location, along with hourly and 10-day
forecasts. It provides detailed temperature highs and lows, as well as the chance of precipitation for each day.

1. [Solution design](#solution-design)
    1. [Functionality](#functionality)
    2. [Constraints](#constraints)
    3. [Library and tool selection](#library-and-tool-selection)
    4. [Application architecture](#application-architecture)
    5. [CI/CD](#cicd)
2. [Code refactoring](#code-refactoring)
3. [Ideas for further project development](#ideas-for-further-project-development)
    1. [Technical issues](#technical-issues)
    2. [UI issues](#UI-issues)

# Solution design

### Functionality:

1. View current weather (temperature, precipitation) and changes throughout the day.
2. View weather (temperature, precipitation, temperature changes throughout the day) for the next 10 days.
3. Determine user location and show weather for that location (default to Stockholm).
4. View in the browser and install on the phone for quick access.
5. View last known weather when offline (from the last time the user opened the app).

### Constraints:

1. **Performance**.
    - Fast app startup (minimum styles and code, minification of production build).
    - Run smoothly even on low-end smartphones (optimize interface with React).
2. **Responsiveness**.
    - Responsive layout suitable for various screen sizes on mobile and portable devices (smartphones, tablets).
    - Show whatever is possible with poor internet: previous state < current weather < 10-day forecast.
    - Display current loading status or errors in data loading.
    - If showing previous state, make it clear what time the weather is being displayed from and that it is not the
      current state.
3. **Accessibility**.
    - Support screen readers, markup with ARIA labels.
    - Navigate the app using a keyboard (left-right scrolling for hourly forecast, up-down scrolling for 10-day
      forecast).
    - Scroll area covers entire content, not just scrollbar.
4. **API limitation**.
    - free plan of accuweather API allow only 50 calls/day

### Library and tool selection:

Use the minimum number of required libraries since the project is small in terms of functionality.

- **Main stack**:
    - `typescript` to make the project easier to write and maintain.
    - `css` — no additional preprocessors since there is minimal styling.
    - Use `react` for rendering optimization and development convenience, as originally in the project. There’s no point
      in changing the main framework because there would be no significant performance gain for such a simple app, and
      maintainability would suffer due to a rarer library being used.
    - Native `fetch` is sufficient for data loading. Only a few requests are needed, and using an additional library
      would add extra weight to the final build.

- Use the fastest and easy to use tools for faster development:
    - `vite` - build tool.
    - `bun` - package manager and unit-test runner.
- Use `eslint` and `prettier` for code style enforcement.
- Use `vite-plugin-pwa` for easier PWA (Progressive Web Application) configuration.
- Use `vite-bundle-visualizer` for analyzing the build.

### Application architecture:

`Backend` -> `PWA` -> `API Service` + `LocalStorage` -> `State Manager` -> `View`

- **`Backend`** - [AccuWeather API](https://developer.accuweather.com/packages).
- **`PWA`** - Progressive Web Application, controls offline application state and caches the app when installed on
  mobile devices.
- **`API Service`** - functions to make requests and initially process responses. We are also working on tracking of API
  limitation here.
- **`LocalStorage`** - used to store request caches. Only successfully received data is stored.
- **`State Manager`** - stores the current application state.
- **`View`** - displays the current application state.

### CI/CD:

- **CI**: Lint and test on master branch changes. This is enough for development by one developer.
- **CD**: Use `GitHub pages` to deploy our weather app. On master branch changes, after a successful CI check, build and
  deploy the app.

# Code refactoring

1. Rewrite code in `typescript`.
2. Everything is written in one place initially, which complicates understanding of the code. It is better to logically
   separate the code into different parts according to the architectural solution.
    - Requests are separate functions.
    - The state is small enough and can be kept as a hook and placed in a separate file.
    - `LocalStorage` work goes into a separate file.
    - Split `html` and `css` rendering into independent components to improve readability.
    - Move utils in separate files.
3. It's better to store `SVG` in `*.svg` files and leave their transformation to `react` components to the bundler,
   which will simplify future development in case of icon replacement. And we have to replace icons with colored ones.
4. Extend `index.html` file with helpful page information like title, favicon, language, etc.
5. Remove redundant styles.

# Ideas for further project development:

### Technical issues

1. Add localization and translation to different languages. Use the `i18next` library for this.
2. Upload application code to CDN to faster access at any location.
3. Improve reliability by adding screenshot testing using `storybook` and e2e testing using `playwright`.

### UI issues

1. Add an option to select and save a specific location.
2. Add tabs for weather in different locations.
3. Display additional data such as pressure, wind speed, humidity, etc.
4. Display storm and other warnings.
