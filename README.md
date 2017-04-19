# MMM-Themes

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

Provider themes for MagicMirror

## Using the module

To use this module, add the following configuration block to the modules array in the `config/config.js` file:


```js
var config = {
    modules: [
        {
            module: "MMM-Themes",
			position: "fullscreen_above",
            config: {
                // See below for configurable options
            }
        }
    ]
}
```

## Configuration options

| Option      | Description
|------------ |-----------
| `count`     | The number theme icons to fall. More icons are havier for the cpu, so don't go wild. <br><b>Default value:</b> <code>10</code>
| `size`      | Scale ratio for each icon, to help adjustments for different screen resolutions. <br><b>Default value:</b> <code>1.00</code>
| `theme`     | The theme name to show. Availables `valentine`, `snow` and `saint_patrick`<br> <b>Default:</b><code>snow</code>
