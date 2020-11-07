#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './ui';

const cli = meow(`
	Usage
	  $ pkmn-types

	Examples
	  $ pkmn-types Water Ice
	  Strong:
		Fire
		Ground x4
		Rock
		Grass
		Flying
		Dragon
`,);

const [primary, secondary] = cli.input;
render(<App primary={primary} secondary={secondary}/>);
