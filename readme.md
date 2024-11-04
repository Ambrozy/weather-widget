# Weather application

The weather app displays the current temperature and conditions for user location, along with hourly and 10-day
forecasts. It provides detailed temperature highs and lows, as well as the chance of precipitation for each day.

1. [About repository](#about-repository)
2. [Solution design](#solution-design)
    1. [Functionality](#functionality)
    2. [Constraints](#constraints)
    3. [Library and tool selection](#library-and-tool-selection)
    4. [Application architecture](#application-architecture)
    5. [CI/CD](#cicd)
3. [Code refactoring](#code-refactoring)
4. [Ideas for further project development](#ideas-for-further-project-development)
    1. [Technical issues](#technical-issues)
    2. [UI issues](#UI-issues)

# About repository

To start using this repository add `.env.local` file and specify `VITE_ACCUWEATHER_API_KEY` there.

`bun run dev` - run dev server run

`bun run build` - build project and save result into `dist` directory

`bun run preview` - serve website from `dist` directory

`bun run lint` - run linting of repository

`bun run test` - run unit tests

`generate-pwa-assets` - generate PWA assets

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
    - Using of contrast colors.
4. **API limitation**.
    - free plan of accuweather API allows
        - 50 calls per day
        - request no more than recent 12 hours forecast
        - request no more than recent 5 days forecast

      It's enough for the demo, but not for the real application
5. **Browser support**.
   - 100% support for the latest version of Chrome, Firefox, Safari, and Edge.
   - 100% support for any desktop and phone screen dimensions; minimum width: 320px, maximum width (4K): 3840px.

### Library and tool selection:

Use the minimum number of required libraries for flexible and easy development.

- **Main stack**:
    - `typescript` to make the project easier to write and maintain.
    - Use `styled-components` for styling, which solves several problems: style encapsulation for each component,
      conditional styling, auto prefixes, and theme switching based on the time of day.
    - Use `react` for rendering optimization and development convenience, as originally in the project. There’s no point
      in changing the main framework because there would be no significant performance gain for such a simple app, and
      maintainability would suffer due to a rarer library being used.
    - Native `fetch` is sufficient for data loading. Only a few requests are needed, and using an additional library
      would add extra weight to the final build.

- Use the fastest and easy to use tools for faster development:
    - `vite` - build tool.
    - `vitest` - test runner.
    - `bun` - package manager and unit-test runner.
- use `msw` as mocking API requests for testing.
- Use `eslint` and `prettier` for code style enforcement.
- Use `vite-plugin-pwa` for easier PWA (Progressive Web Application) configuration.
- Use `generate-pwa-assets` for generating PWA assets from svg icon.
- Use `vite-bundle-visualizer` for analyzing the build.

### Application architecture:

`Backend` -> `PWA` -> `API Service` -> `Cache with LocalStorage` -> `State Manager` -> `View`

- **`Backend`** - [AccuWeather API](https://developer.accuweather.com/packages).
- **`PWA`** - Progressive Web Application, controls offline application state and caches the app when installed on
  mobile devices.
- **`API Service`** - functions for making requests and initially handling responses. We are also working on limiting
  API calls and transforming API data into application state. Since the application displays the weather hourly and
  daily, there is no need to query the weather more often than one hour and day respectively, unless the user changes
  location. Data transformation is necessary because we do not own the API, and if it changes, it is easier to fix the
  adapter than to refactor the entire application.
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
   which will simplify future development in case of icon replacement.
4. Extend `index.html` file with helpful page information like title, favicon, language, etc.
5. If we want to switch the background depending on the time of day, simply changing the background is not sufficient.
   The text and other elements become difficult to read. Therefore, it is necessary to adjust them and request the
   designer to create different screen versions. A good solution here would be to use themes.

# Ideas for further project development:

### Technical issues

1. Add localization and translation to different languages. Use the `i18next` library for this.
2. Upload application code to CDN to faster access at any location.
3. Improve reliability by adding screenshot testing using `storybook` and e2e testing using `playwright`.

### UI issues

1. Change icons to colored one and extend number of icons for more weather conditions
2. Add an option to select and save a specific location.
3. Add tabs for weather in different locations.
4. Display additional data such as pressure, wind speed, humidity, etc.
5. Display storm and other warnings.
6. Support tiny screen devices as watches.
