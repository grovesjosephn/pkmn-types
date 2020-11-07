import React, {FC} from 'react';
import {Text} from 'ink';
import {useQuit} from './hooks';
import {typeDefense, typeOffense} from './pktypes';

const App: FC<{primary?: string; secondary?: string}> = ({primary, secondary}) => {
	useQuit();
	console.log(typeDefense(primary, secondary));
	console.log(typeOffense(primary));

	return (
		<Text> Press q to quit...</Text>
	);
};

module.exports = App;
export default App;
