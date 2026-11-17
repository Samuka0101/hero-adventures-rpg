# Hero Adventures

Hero Adventures is a turn-based browser prototype about a hero fighting a giant orc. It uses browser dialogs for input and the developer console for the battle log. The prompts and combat messages are in Brazilian Portuguese.

## Run locally

1. Download or clone the repository.
2. Open the browser's developer console, then navigate to [`index.html`](index.html).
3. Enter names for the hero and the orc. Read the options in the console and enter the number of your action in the prompt.

| Input | Action |
| --- | --- |
| `1` | Attack |
| `2` | Defend |
| `3` | Throw or recover the spear |
| `4` | Flee |
| `5` | Sacrifice the hero and end the fight |

Reload the page to start a new fight.

## Prototype limitations

- Selecting **Defend** prints a guard message. Incoming damage stays the same.
- Throwing the spear currently raises a JavaScript error and stops the battle. Use the other actions to play through a fight.

The game logic lives in [`Scripts/script.js`](Scripts/script.js).
