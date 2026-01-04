# Developer Utilities

## Config Override System

As a developer, you can override configuration values during development without modifying source files. This is useful for testing different values quickly.

### How to Use

Open your browser's developer console and use the following commands:

#### Override a single config value

```javascript
// Change Email icon gradient
localStorage.setItem("config-override", JSON.stringify({
  "SOCIAL_ICON_CONFIG.Email.gradient": "from-blue-500 to-cyan-500"
}))
```

Then refresh the page to see the change.

#### Override multiple values

```javascript
localStorage.setItem("config-override", JSON.stringify({
  "SOCIAL_ICON_CONFIG.Email.gradient": "from-blue-500 to-cyan-500",
  "SOCIAL_ICON_CONFIG.Email.label": "Send Email",
  "SOCIAL_ICON_CONFIG.GitHub.gradient": "from-green-500 to-emerald-500"
}))
```

#### View current overrides

```javascript
JSON.parse(localStorage.getItem("config-override") || "{}")
```

#### Clear all overrides

```javascript
localStorage.removeItem("config-override")
```

#### Remove a specific override

```javascript
const overrides = JSON.parse(localStorage.getItem("config-override") || "{}");
delete overrides["SOCIAL_ICON_CONFIG.Email.gradient"];
localStorage.setItem("config-override", JSON.stringify(overrides));
```

### Available Config Paths

Based on your current constants:

- `SOCIAL_ICON_CONFIG.Email.gradient`
- `SOCIAL_ICON_CONFIG.Email.hoverGradient`
- `SOCIAL_ICON_CONFIG.Email.label`
- `SOCIAL_ICON_CONFIG.GitHub.gradient`
- `SOCIAL_ICON_CONFIG.GitHub.hoverGradient`
- `SOCIAL_ICON_CONFIG.GitHub.label`
- `SOCIAL_ICON_CONFIG.GitHub.iconColor`
- `SOCIAL_ICON_CONFIG.LinkedIn.gradient`
- `SOCIAL_ICON_CONFIG.LinkedIn.hoverGradient`
- `SOCIAL_ICON_CONFIG.LinkedIn.label`

### Helper Functions (in console)

You can also use the helper functions directly:

```javascript
// Import the utility (if using in a script)
import { setConfigOverride, clearConfigOverrides } from '@/utils/configOverride';

// Or use the global window object if exposed
window.setConfigOverride?.("SOCIAL_ICON_CONFIG.Email.gradient", "from-blue-500 to-cyan-500");
window.clearConfigOverrides?.();
```

### Notes

- Overrides are stored in `localStorage` and persist across page refreshes
- Changes require a page refresh to take effect (or use storage events for real-time updates)
- Overrides only work in development mode (browser environment)
- Use dot notation to access nested config properties

